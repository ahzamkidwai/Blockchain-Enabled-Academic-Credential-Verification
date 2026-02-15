// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title Custom Errors Library
/// @notice Contains custom error definitions to save gas and improve clarity
library Errors {
    error NotOwner();
    error NotAuthorizedInstitution();
    error AlreadyAuthorized();
    error NotAuthorized();
    error TokenDoesNotExist();
    error CredentialRevoked();
    error SoulboundToken();
}
