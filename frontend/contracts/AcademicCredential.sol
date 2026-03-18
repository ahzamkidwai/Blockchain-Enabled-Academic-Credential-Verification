// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

/**
 * @title AcademicCredential
 * @dev Soulbound (non-transferable) NFT-based academic credential system
 * Credentials are issued by authorized institutions, stored with IPFS CID,
 * and can be revoked. Supports public verification via credential hash.
 */
contract AcademicCredential is AccessControl {
    using Counters for Counters.Counter;
    using ECDSA for bytes32;

    bytes32 public constant ISSUER_ROLE = keccak256("ISSUER_ROLE");
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    Counters.Counter private _tokenIds;

    enum CredentialStatus {
        Active,
        Revoked,
        Suspended
    }

    struct Credential {
        uint256 tokenId;
        address student;
        address issuer;
        string ipfsCID; // Encrypted credential data on IPFS
        bytes32 credentialHash; // SHA-256 hash of credential content
        string credentialType; // "Bachelor", "Master", "PhD", "Certificate", etc.
        string institutionName;
        uint256 issuedAt;
        uint256 expiresAt; // 0 = no expiry
        CredentialStatus status;
        string revocationReason;
    }

    struct Institution {
        string name;
        string country;
        bool isActive;
        uint256 registeredAt;
    }

    // tokenId => Credential
    mapping(uint256 => Credential) private _credentials;

    // student address => array of tokenIds
    mapping(address => uint256[]) private _studentCredentials;

    // credentialHash => tokenId (for fast verification)
    mapping(bytes32 => uint256) private _hashToTokenId;

    // issuer address => Institution
    mapping(address => Institution) public institutions;

    // Events
    event CredentialIssued(
        uint256 indexed tokenId,
        address indexed student,
        address indexed issuer,
        bytes32 credentialHash,
        string credentialType
    );

    event CredentialRevoked(
        uint256 indexed tokenId,
        address indexed revokedBy,
        string reason
    );

    event CredentialSuspended(
        uint256 indexed tokenId,
        address indexed suspendedBy,
        string reason
    );

    event CredentialReinstated(
        uint256 indexed tokenId,
        address indexed reinstatedBy
    );

    event InstitutionRegistered(
        address indexed issuer,
        string name,
        string country
    );

    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
    }

    // ─── Institution Management ───────────────────────────────────────────────

    function registerInstitution(
        address issuerAddress,
        string calldata name,
        string calldata country
    ) external onlyRole(ADMIN_ROLE) {
        require(bytes(name).length > 0, "Institution name required");
        institutions[issuerAddress] = Institution({
            name: name,
            country: country,
            isActive: true,
            registeredAt: block.timestamp
        });
        _grantRole(ISSUER_ROLE, issuerAddress);
        emit InstitutionRegistered(issuerAddress, name, country);
    }

    function deactivateInstitution(
        address issuerAddress
    ) external onlyRole(ADMIN_ROLE) {
        institutions[issuerAddress].isActive = false;
        _revokeRole(ISSUER_ROLE, issuerAddress);
    }

    // ─── Credential Issuance ─────────────────────────────────────────────────

    function issueCredential(
        address student,
        string calldata ipfsCID,
        bytes32 credentialHash,
        string calldata credentialType,
        uint256 expiresAt
    ) external onlyRole(ISSUER_ROLE) returns (uint256) {
        require(student != address(0), "Invalid student address");
        require(bytes(ipfsCID).length > 0, "IPFS CID required");
        require(credentialHash != bytes32(0), "Credential hash required");
        require(
            _hashToTokenId[credentialHash] == 0,
            "Credential already exists"
        );
        require(institutions[msg.sender].isActive, "Institution not active");

        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();

        _credentials[newTokenId] = Credential({
            tokenId: newTokenId,
            student: student,
            issuer: msg.sender,
            ipfsCID: ipfsCID,
            credentialHash: credentialHash,
            credentialType: credentialType,
            institutionName: institutions[msg.sender].name,
            issuedAt: block.timestamp,
            expiresAt: expiresAt,
            status: CredentialStatus.Active,
            revocationReason: ""
        });

        _studentCredentials[student].push(newTokenId);
        _hashToTokenId[credentialHash] = newTokenId;

        emit CredentialIssued(
            newTokenId,
            student,
            msg.sender,
            credentialHash,
            credentialType
        );

        return newTokenId;
    }

    // ─── Revocation / Suspension ──────────────────────────────────────────────

    function revokeCredential(
        uint256 tokenId,
        string calldata reason
    ) external {
        Credential storage cred = _credentials[tokenId];
        require(cred.tokenId != 0, "Credential does not exist");
        require(
            hasRole(ADMIN_ROLE, msg.sender) || cred.issuer == msg.sender,
            "Not authorized"
        );
        require(cred.status != CredentialStatus.Revoked, "Already revoked");

        cred.status = CredentialStatus.Revoked;
        cred.revocationReason = reason;

        emit CredentialRevoked(tokenId, msg.sender, reason);
    }

    function suspendCredential(
        uint256 tokenId,
        string calldata reason
    ) external {
        Credential storage cred = _credentials[tokenId];
        require(cred.tokenId != 0, "Credential does not exist");
        require(
            hasRole(ADMIN_ROLE, msg.sender) || cred.issuer == msg.sender,
            "Not authorized"
        );
        require(cred.status == CredentialStatus.Active, "Not active");

        cred.status = CredentialStatus.Suspended;
        cred.revocationReason = reason;

        emit CredentialSuspended(tokenId, msg.sender, reason);
    }

    function reinstateCredential(uint256 tokenId) external {
        Credential storage cred = _credentials[tokenId];
        require(cred.tokenId != 0, "Credential does not exist");
        require(
            hasRole(ADMIN_ROLE, msg.sender) || cred.issuer == msg.sender,
            "Not authorized"
        );
        require(cred.status == CredentialStatus.Suspended, "Not suspended");

        cred.status = CredentialStatus.Active;
        cred.revocationReason = "";

        emit CredentialReinstated(tokenId, msg.sender);
    }

    // ─── View Functions ───────────────────────────────────────────────────────

    function getCredential(
        uint256 tokenId
    ) external view returns (Credential memory) {
        require(
            _credentials[tokenId].tokenId != 0,
            "Credential does not exist"
        );
        return _credentials[tokenId];
    }

    function verifyCredentialByHash(
        bytes32 credentialHash
    ) external view returns (bool isValid, Credential memory credential) {
        uint256 tokenId = _hashToTokenId[credentialHash];
        if (tokenId == 0) {
            return (false, credential);
        }
        credential = _credentials[tokenId];
        isValid = (credential.status == CredentialStatus.Active &&
            (credential.expiresAt == 0 ||
                credential.expiresAt > block.timestamp));
    }

    function getStudentCredentials(
        address student
    ) external view returns (uint256[] memory) {
        return _studentCredentials[student];
    }

    function getCredentialStatus(
        uint256 tokenId
    ) external view returns (CredentialStatus) {
        require(
            _credentials[tokenId].tokenId != 0,
            "Credential does not exist"
        );
        return _credentials[tokenId].status;
    }

    function totalCredentials() external view returns (uint256) {
        return _tokenIds.current();
    }

    function getTokenIdByHash(
        bytes32 credentialHash
    ) external view returns (uint256) {
        return _hashToTokenId[credentialHash];
    }

    // ─── Soulbound: Block All Transfers ───────────────────────────────────────

    // Credentials are non-transferable by design.
    // No transfer functions are implemented.
    // The 'student' field is permanently bound at issuance.

    // ─── Prevent accidental ETH sends ─────────────────────────────────────────
    receive() external payable {
        revert("Contract does not accept ETH");
    }
}
