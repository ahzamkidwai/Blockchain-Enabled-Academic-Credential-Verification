// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// OpenZeppelin imports
import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

/// Internal imports
import {IAcademicCredential} from "./interfaces/IAcademicCredential.sol";
import {Errors} from "./libraries/Errors.sol";

/// @title Academic Credential NFT (Soulbound)
/// @notice Issues non-transferable academic certificates stored via IPFS
contract AcademicCredential is ERC721, Ownable, IAcademicCredential {
    /// =============================================================
    ///                         STORAGE
    /// =============================================================

    uint256 private _tokenIdCounter;

    struct Institution {
        string name;
        string country;
        bool isActive;
    }
    mapping(address => Institution) private _institutions;

    struct Credential {
        string ipfsHash;
        bytes32 fileHash;
        bool revoked;
        address issuer;
        string credentialType;
        uint256 expiresAt;
        uint256 issuedAt;
    }

    struct StudentCredential {
        uint256 tokenId;
        string ipfsHash;
        bytes32 fileHash;
        bool revoked;
        address issuer; 
        string credentialType;
        uint256 expiresAt;
        uint256 issuedAt;
    }

    mapping(uint256 => Credential) private _credentials;
    mapping(bytes32 => uint256) private _hashToTokenId;
    mapping(address => bytes32[]) private _studentCertificates;
    mapping(address => StudentCredential[]) private _studentWalletCredentials;

    /// =============================================================
    ///                         CONSTRUCTOR
    /// =============================================================

    constructor() ERC721("AcademicCredential", "ACRED") Ownable(msg.sender) {}

    /// =============================================================
    ///                   INSTITUTION MANAGEMENT
    /// =============================================================

    function authorizeInstitution(
        address institution,
        string calldata name,
        string calldata country
    ) external override onlyOwner {
        if (_institutions[institution].isActive) {
            revert Errors.AlreadyAuthorized();
        }

        _institutions[institution] = Institution({
            name: name,
            country: country,
            isActive: true
        });

        emit InstitutionAuthorized(institution);
    }

    function getInstitution(
        address institution
    ) external view override returns (string memory, string memory, bool) {
        Institution memory inst = _institutions[institution];
        return (inst.name, inst.country, inst.isActive);
    }

    function removeInstitution(address institution) external override onlyOwner {
        if (!_institutions[institution].isActive) {
            revert Errors.NotAuthorized();
        }

        _institutions[institution].isActive = false;
        emit InstitutionRemoved(institution);
    }

    function isAuthorizedInstitution(
        address institution
    ) external view override returns (bool) {
        return _institutions[institution].isActive;
    }

    /// =============================================================
    ///                   CORE FUNCTIONALITY
    /// =============================================================

    function issueCredential(
        address student,
        string calldata ipfsHash,
        bytes32 fileHash,
        string calldata credentialType,
        uint256 expiresAt
    ) external override returns (uint256 tokenId) {
        if (!_institutions[msg.sender].isActive) {
            revert Errors.NotAuthorizedInstitution();
        }

        if (_hashToTokenId[fileHash] != 0) {
            revert Errors.CredentialAlreadyIssued();
        }

        tokenId = ++_tokenIdCounter;

        _safeMint(student, tokenId);

        _credentials[tokenId] = Credential({
            ipfsHash: ipfsHash,
            fileHash: fileHash,
            revoked: false,
            issuer: msg.sender,
            credentialType: credentialType,
            expiresAt: expiresAt,
            issuedAt: block.timestamp
        });

        _hashToTokenId[fileHash] = tokenId;
        _studentCertificates[student].push(fileHash);

        _studentWalletCredentials[student].push(StudentCredential({
            tokenId: tokenId,
            ipfsHash: ipfsHash,
            fileHash: fileHash,
            revoked: false,
            issuer: msg.sender,
            credentialType: credentialType,
            expiresAt: expiresAt,
            issuedAt: block.timestamp
        }));

        emit CredentialIssued(tokenId, student, msg.sender, ipfsHash, fileHash);
    }

    function revokeCredential(uint256 tokenId) external override {
        if (_ownerOf(tokenId) == address(0)) {
            revert Errors.TokenDoesNotExist();
        }

        if (!_institutions[msg.sender].isActive) {
            revert Errors.NotAuthorizedInstitution();
        }

        if (_credentials[tokenId].issuer != msg.sender) {
            revert Errors.NotAuthorizedInstitution();
        }

        _credentials[tokenId].revoked = true;

        emit CredentialRevoked(tokenId);
    }

    /// =============================================================
    ///                   QUERY FUNCTIONS
    /// =============================================================

    function getCredential(
        uint256 tokenId
    ) external view override returns (string memory ipfsHash, bool revoked) {
        if (_ownerOf(tokenId) == address(0)) {
            revert Errors.TokenDoesNotExist();
        }

        Credential memory cred = _credentials[tokenId];
        return (cred.ipfsHash, cred.revoked);
    }

    function getCredentialByHash(
        bytes32 fileHash
    )
        external
        view
        override
        returns (
            string memory ipfsHash,
            address issuer,
            address student,
            bool revoked, 
            uint256 expiresAt,
            uint256 issuedAt
        )
    {
        uint256 tokenId = _hashToTokenId[fileHash];

        if (tokenId == 0) {
            revert Errors.TokenDoesNotExist();
        }

        Credential memory cred = _credentials[tokenId];

        return (cred.ipfsHash, cred.issuer, ownerOf(tokenId), cred.revoked, cred.expiresAt, cred.issuedAt);
    }

    function getStudentCertificateDetails (
        address student
    ) external view returns (StudentCredential[] memory) {
        return _studentWalletCredentials[student];
    }

    function getCertificatesOfStudent(
        address student
    ) external view override returns (bytes32[] memory) {
        return _studentCertificates[student];
    }

    function getCertificateCount(
        address student
    ) external view override returns (uint256) {
        return _studentCertificates[student].length;
    }

    function totalCredentials() external view returns (uint256) {
        return _tokenIdCounter;
    }

    /// =============================================================
    ///                   SOULBOUND LOGIC
    /// =============================================================

    function _update(
        address to,
        uint256 tokenId,
        address auth
    ) internal override returns (address) {
        address from = super._update(to, tokenId, auth);

        if (from != address(0) && to != address(0)) {
            revert Errors.SoulboundToken();
        }

        return from;
    }

    function approve(address, uint256) public pure override {
        revert Errors.SoulboundToken();
    }

    function setApprovalForAll(address, bool) public pure override {
        revert Errors.SoulboundToken();
    }
}