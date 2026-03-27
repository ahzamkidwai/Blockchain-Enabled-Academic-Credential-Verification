import { keccak256 } from "ethers";

export const generateFileHash = (buffer) => {
    return keccak256(buffer);
};