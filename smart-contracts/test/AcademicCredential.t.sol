// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import {AcademicCredential} from "../src/AcademicCredential.sol";
import {Errors} from "../src/libraries/Errors.sol";

contract AcademicCredentialTest is Test {
    AcademicCredential credential;

    address owner = address(this);
    address institution = address(1);
    address student = address(2);

    function setUp() public {
        credential = new AcademicCredential();
    }

    function testAuthorizeInstitution() public {
        credential.authorizeInstitution(institution);
        bool authorized = credential.isAuthorizedInstitution(institution);
        assertTrue(authorized);
    }

    function testIssueCredential() public {
        credential.authorizeInstitution(institution);

        vm.prank(institution);
        uint256 tokenId = credential.issueCredential(student, "ipfsHash");

        assertEq(credential.ownerOf(tokenId), student);
    }

    function testSoulboundTransferFails() public {
        credential.authorizeInstitution(institution);

        vm.prank(institution);
        uint256 tokenId = credential.issueCredential(student, "ipfsHash");

        vm.prank(student);
        vm.expectRevert(abi.encodeWithSelector(Errors.SoulboundToken.selector));
        credential.transferFrom(student, address(3), tokenId);
    }

    function testRevokeCredential() public {
        credential.authorizeInstitution(institution);

        vm.prank(institution);
        uint256 tokenId = credential.issueCredential(student, "ipfsHash");

        vm.prank(institution);
        credential.revokeCredential(tokenId);

        (, bool revoked) = credential.getCredential(tokenId);
        assertTrue(revoked);
    }

    function testUnauthorizedIssuanceFails() public {
        vm.prank(student);
        vm.expectRevert(abi.encodeWithSelector(Errors.NotAuthorizedInstitution.selector));
        credential.issueCredential(student, "ipfsHash");
    }
}
