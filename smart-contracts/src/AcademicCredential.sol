// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "./interfaces/IAcademicCredential.sol";
import "./libraries/Errors.sol";

/// @title Academic Credential Soulbound NFT
/// @author Senior Solidity Developer
/// @notice ERC721-based non-transferable NFT for academic credential verification
contract AcademicCredential is ERC721, Ownable, IAcademicCredential {
    /// @notice Counter for token IDs
    uint256 private _tokenIdCounter;

    /// @notice Mapping of authorized institutions
    mapping(address => bool) private _authorizedInstitutions;

    /// @notice Structure storing credential metadata
    struct Credential {
        string ipfsHash;
        bool revoked;
    }

    /// @notice Mapping from tokenId to credential details
    mapping(uint256 => Credential) private _credentials;

    /// @notice Constructor sets NFT name and symbol
    constructor() ERC721("AcademicCredential", "ACRED") Ownable(msg.sender) {}

    // =============================================================
    //                      AUTHORIZATION
    // =============================================================

    /// @notice Authorize an institution to issue credentials
    /// @dev Only contract owner can call
    function authorizeInstitution(address institution) external onlyOwner {
        if (_authorizedInstitutions[institution]) {
            revert Errors.AlreadyAuthorized();
        }

        _authorizedInstitutions[institution] = true;
    }

    /// @notice Remove an institution's authorization
    /// @dev Only contract owner can call
    function removeInstitution(address institution) external onlyOwner {
        if (!_authorizedInstitutions[institution]) {
            revert Errors.NotAuthorized();
        }

        _authorizedInstitutions[institution] = false;
    }

    /// @notice Returns whether an institution is authorized
    function isAuthorizedInstitution(
        address institution
    ) external view returns (bool) {
        return _authorizedInstitutions[institution];
    }

    // =============================================================
    //                      ISSUE CREDENTIAL
    // =============================================================

    /// @notice Issue a credential NFT to a student
    /// @param student Address of credential recipient
    /// @param ipfsHash IPFS CID containing credential metadata
    /// @return tokenId Newly minted credential ID
    function issueCredential(
        address student,
        string calldata ipfsHash
    ) external returns (uint256 tokenId) {
        if (!_authorizedInstitutions[msg.sender]) {
            revert Errors.NotAuthorizedInstitution();
        }

        tokenId = ++_tokenIdCounter;

        _safeMint(student, tokenId);

        _credentials[tokenId] = Credential({
            ipfsHash: ipfsHash,
            revoked: false
        });

        emit CredentialIssued(tokenId, student, msg.sender, ipfsHash);
    }

    // =============================================================
    //                      REVOKE CREDENTIAL
    // =============================================================

    /// @notice Revoke an existing credential
    /// @dev Only issuing institutions can revoke
    function revokeCredential(uint256 tokenId) external {
        if (_ownerOf(tokenId) == address(0)) {
            revert Errors.TokenDoesNotExist();
        }

        if (!_authorizedInstitutions[msg.sender]) {
            revert Errors.NotAuthorizedInstitution();
        }

        _credentials[tokenId].revoked = true;

        emit CredentialRevoked(tokenId);
    }

    // =============================================================
    //                      GETTERS
    // =============================================================

    /// @notice Returns credential metadata
    function getCredential(
        uint256 tokenId
    ) external view returns (string memory ipfsHash, bool revoked) {
        if (_ownerOf(tokenId) == address(0)) {
            revert Errors.TokenDoesNotExist();
        }

        Credential memory cred = _credentials[tokenId];
        return (cred.ipfsHash, cred.revoked);
    }

    // =============================================================
    //                      SOULBOUND LOGIC
    // =============================================================

    /// @notice Override transfer logic to prevent transfers
    function _update(
        address to,
        uint256 tokenId,
        address auth
    ) internal override returns (address) {
        address from = super._update(to, tokenId, auth);

        // If not minting (from != address(0)), block transfer
        if (from != address(0) && to != address(0)) {
            revert Errors.SoulboundToken();
        }

        return from;
    }
}
