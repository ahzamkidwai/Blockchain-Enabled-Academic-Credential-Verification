// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Script} from "forge-std/Script.sol";
import {console} from "forge-std/console.sol";
import {AcademicCredential} from "../src/AcademicCredential.sol";

/// @title Deployment Script for AcademicCredential
contract Deploy is Script {
    function run() external {
        vm.startBroadcast();

        AcademicCredential credential = new AcademicCredential();

        console.log("AcademicCredential deployed at:", address(credential));

        vm.stopBroadcast();
    }
}