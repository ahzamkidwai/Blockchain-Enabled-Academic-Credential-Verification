// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

library Errors {
    error AlreadyAuthorized();
    error NotAuthorized();
    error NotAuthorizedInstitution();
    error TokenDoesNotExist();
    error SoulboundToken();
    error CredentialAlreadyIssued();
}