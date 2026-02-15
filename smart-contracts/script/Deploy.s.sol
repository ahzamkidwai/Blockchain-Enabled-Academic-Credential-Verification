// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../src/AcademicCredential.sol";

/// @title Deployment Script for AcademicCredential
contract Deploy is Script {
    function run() external {
        vm.startBroadcast();

        AcademicCredential credential = new AcademicCredential();

        vm.stopBroadcast();
    }
}
