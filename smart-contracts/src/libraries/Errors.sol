// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title Custom Errors for Academic Credential System
library Errors {
    error AlreadyAuthorized();
    error NotAuthorized();
    error NotAuthorizedInstitution();
    error TokenDoesNotExist();
    error SoulboundToken();
    error CredentialAlreadyIssued();
}
