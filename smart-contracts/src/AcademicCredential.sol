// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// OpenZeppelin imports
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

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

    /// Authorized institutions
    mapping(address => bool) private _authorizedInstitutions;

    /// Credential structure
    struct Credential {
        string ipfsHash; // IPFS CID (for UI & retrieval)
        bytes32 fileHash; // Hash of actual certificate (for verification)
        bool revoked; // Revocation status
        address issuer; // Institution
    }

    /// tokenId => Credential
    mapping(uint256 => Credential) private _credentials;

    /// fileHash => tokenId (unique mapping)
    mapping(bytes32 => uint256) private _hashToTokenId;

    /// student => list of fileHashes (NOT tokenIds → better UX)
    mapping(address => bytes32[]) private _studentCertificates;

    /// =============================================================
    ///                         CONSTRUCTOR
    /// =============================================================

    constructor() ERC721("AcademicCredential", "ACRED") Ownable(msg.sender) {}

    /// =============================================================
    ///                   INSTITUTION MANAGEMENT
    /// =============================================================

    /// @notice Authorize an institution
    function authorizeInstitution(address institution) external onlyOwner {
        if (_authorizedInstitutions[institution]) {
            revert Errors.AlreadyAuthorized();
        }

        _authorizedInstitutions[institution] = true;
        emit InstitutionAuthorized(institution);
    }

    /// @notice Remove institution authorization
    function removeInstitution(address institution) external onlyOwner {
        if (!_authorizedInstitutions[institution]) {
            revert Errors.NotAuthorized();
        }

        _authorizedInstitutions[institution] = false;
        emit InstitutionRemoved(institution);
    }

    /// @notice Check if institution is authorized
    function isAuthorizedInstitution(
        address institution
    ) external view returns (bool) {
        return _authorizedInstitations[institution];
    }

    /// =============================================================
    ///                   CORE FUNCTIONALITY
    /// =============================================================

    /// @notice Issue credential NFT (Soulbound)
    /// @dev Only authorized institutions can call
    function issueCredential(
        address student,
        string calldata ipfsHash,
        bytes32 fileHash
    ) external returns (uint256 tokenId) {
        /// Validate institution
        if (!_authorizedInstitutions[msg.sender]) {
            revert Errors.NotAuthorizedInstitution();
        }

        /// Prevent duplicate certificates
        if (_hashToTokenId[fileHash] != 0) {
            revert Errors.CredentialAlreadyIssued();
        }

        /// Increment tokenId
        tokenId = ++_tokenIdCounter;

        /// Mint soulbound NFT
        _safeMint(student, tokenId);

        /// Store credential
        _credentials[tokenId] = Credential({
            ipfsHash: ipfsHash,
            fileHash: fileHash,
            revoked: false,
            issuer: msg.sender
        });

        /// Indexing
        _hashToTokenId[fileHash] = tokenId;
        _studentCertificates[student].push(fileHash);

        emit CredentialIssued(tokenId, student, msg.sender, ipfsHash, fileHash);
    }

    /// @notice Revoke credential
    function revokeCredential(uint256 tokenId) external {
        if (_ownerOf(tokenId) == address(0)) {
            revert Errors.TokenDoesNotExist();
        }

        if (!_authorizedInstitutions[msg.sender]) {
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

    /// @notice Get credential by tokenId
    function getCredentialByTokenId(
        uint256 tokenId
    )
        external
        view
        returns (
            string memory ipfsHash,
            bytes32 fileHash,
            address issuer,
            address student,
            bool revoked
        )
    {
        if (_ownerOf(tokenId) == address(0)) {
            revert Errors.TokenDoesNotExist();
        }

        Credential memory cred = _credentials[tokenId];

        return (
            cred.ipfsHash,
            cred.fileHash,
            cred.issuer,
            ownerOf(tokenId),
            cred.revoked
        );
    }

    /// @notice Get credential using file hash (MAIN VERIFICATION FUNCTION)
    function getCredentialByHash(
        bytes32 fileHash
    )
        external
        view
        returns (
            string memory ipfsHash,
            address issuer,
            address student,
            bool revoked
        )
    {
        uint256 tokenId = _hashToTokenId[fileHash];

        if (_ownerOf(tokenId) == address(0)) {
            revert Errors.TokenDoesNotExist();
        }

        Credential memory cred = _credentials[tokenId];

        return (cred.ipfsHash, cred.issuer, ownerOf(tokenId), cred.revoked);
    }

    /// @notice Get all certificate hashes of a student
    function getCertificatesOfStudent(
        address student
    ) external view returns (bytes32[] memory) {
        return _studentCertificates[student];
    }

    /// @notice Get count of certificates
    function getCertificateCount(
        address student
    ) external view returns (uint256) {
        return _studentCertificates[student].length;
    }

    /// =============================================================
    ///                   SOULBOUND LOGIC
    /// =============================================================

    /// @dev Prevent transfers
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

    /// @notice Disable approvals for soulbound tokens
    function approve(
        address /*to*/,
        uint256 /*tokenId*/
    ) public virtual override {
        revert Errors.SoulboundToken();
    }

    /// @notice Disable operator approvals for soulbound tokens
    function setApprovalForAll(
        address /*operator*/,
        bool /*approved*/
    ) public virtual override {
        revert Errors.SoulboundToken();
    }
}
