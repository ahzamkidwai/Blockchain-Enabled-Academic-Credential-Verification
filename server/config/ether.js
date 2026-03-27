import { ethers } from "ethers";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const abi = JSON.parse(
    fs.readFileSync(
        new URL("../../smart-contracts/out/AcademicCredential.sol/AcademicCredential.json", import.meta.url)
    )
);

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

export const contract = new ethers.Contract(
    process.env.CONTRACT_ADDRESS,
    abi?.abi,
    wallet
);