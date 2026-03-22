// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

import {IAcademicCredential} from "./interfaces/IAcademicCredential.sol";
import {Errors} from "./libraries/Errors.sol";


contract AcademicCredential is ERC721, Ownable, IAcademicCredential {
    uint256 private _tokenIdCounter;

    constructor() ERC721("AcademicCredential", "ACRED") {}

    mapping(address => bool) private _authorizedInstitutions;

    struct Credential {
        string ipfsHash;
        bool revoked;
        address issuer;
    }

    mapping(uint256 => Credential) private _credentials;

    // authorize an institution
    function authorizeInstitution(address institution) external onlyOwner {
        if (_authorizedInstitutions[institution]) {
            revert Errors.AlreadyAuthorized();
        }

        _authorizedInstitutions[institution] = true;
    }

    // remove institution authorization
    function removeInstitution(address institution) external onlyOwner {
        if (!_authorizedInstitutions[institution]) {
            revert Errors.NotAuthorized();
        }

        _authorizedInstitutions[institution] = false;
    }

    // check if institution is authorized
    function isAuthorizedInstitution(
        address institution
    ) external view returns (bool) {
        return _authorizedInstitutions[institution];
    }

    // issue credential NFT to student
    function issueCredential(
        address student,
        string calldata ipfsHash
    ) external returns (uint256 tokenId) {
        if (!_authorizedInstitutions[msg.sender]) {
            revert Errors.NotAuthorizedInstitution();
        }

        unchecked {
            _tokenIdCounter++;
            tokenId = _tokenIdCounter;
        }

        _safeMint(student, tokenId);

        _credentials[tokenId] = Credential({
            ipfsHash: ipfsHash,
            revoked: false,
            issuer: msg.sender
        });

        emit CredentialIssued(tokenId, student, msg.sender, ipfsHash);
    }

    // revoke credential
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

    // get credential data
    function getCredential(
        uint256 tokenId
    ) external view returns (string memory ipfsHash, bool revoked) {
        if (_ownerOf(tokenId) == address(0)) {
            revert Errors.TokenDoesNotExist();
        }

        Credential memory cred = _credentials[tokenId];
        return (cred.ipfsHash, cred.revoked);
    }

    // prevent token transfer (soulbound)
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

    // disable approve
    function approve(address /*to*/, uint256 /*tokenId*/) public virtual override {
        revert Errors.SoulboundToken();
    }

    // disable operator approval
    function setApprovalForAll(
        address /*operator*/,
        bool /*approved*/
    ) public virtual override {
        revert Errors.SoulboundToken();
    }
}
