// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IAcademicCredential {
    event CredentialIssued(
        uint256 indexed tokenId,
        address indexed student,
        address indexed institution,
        string ipfsHash,
        bytes32 fileHash
    );

    event CredentialRevoked(uint256 indexed tokenId);

    event InstitutionAuthorized(address indexed institution);
    event InstitutionRemoved(address indexed institution);

    function issueCredential(
        address student,
        string calldata ipfsHash,
        bytes32 fileHash,
        string calldata credentialType,
        uint256 expiresAt
    ) external returns (uint256);

    function revokeCredential(uint256 tokenId) external;

    function authorizeInstitution(
        address institution,
        string calldata name,
        string calldata country
    ) external;

    function removeInstitution(address institution) external;

    function isAuthorizedInstitution(
        address institution
    ) external view returns (bool);

    function getInstitution(
        address addr
    ) external view returns (string memory, string memory, bool);

    function getCredential(
        uint256 tokenId
    ) external view returns (string memory ipfsHash, bool revoked);

    function getCredentialByHash(
        bytes32 fileHash
    )
        external
        view
        returns (
            string memory ipfsHash,
            address issuer,
            address student,
            bool revoked,
            uint256 expiresAt,
            uint256 issuedAt
        );

    function getCertificatesOfStudent(
        address student
    ) external view returns (bytes32[] memory);

    function getCertificateCount(
        address student
    ) external view returns (uint256);
}