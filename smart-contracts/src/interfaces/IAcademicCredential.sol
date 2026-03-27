// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title Interface for Academic Credential NFT
interface IAcademicCredential {
    /// @notice Emitted when a credential is issued
    event CredentialIssued(
        uint256 indexed tokenId,
        address indexed student,
        address indexed institution,
        string ipfsHash,
        bytes32 fileHash
    );

    /// @notice Emitted when a credential is revoked
    event CredentialRevoked(uint256 indexed tokenId);

    /// @notice Emitted when an institution is authorized
    event InstitutionAuthorized(address indexed institution);

    /// @notice Emitted when an institution is removed
    event InstitutionRemoved(address indexed institution);

    function issueCredential(
        address student,
        string calldata ipfsHash,
        bytes32 fileHash
    ) external returns (uint256);

    function revokeCredential(uint256 tokenId) external;

    function authorizeInstitution(address institution) external;

    function removeInstitution(address institution) external;

    function isAuthorizedInstitution(
        address institution
    ) external view returns (bool);

    function getCredential(
        uint256 tokenId
    ) external view returns (string memory ipfsHash, bool revoked);
}
