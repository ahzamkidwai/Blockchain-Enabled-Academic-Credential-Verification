import fs from "fs";
import Credential from "../models/Credential.js";
import { uploadToIPFS } from "../config/ipfs.js";
import { generateFileHash } from "../utils/hash.js";
import {
    getContractOwner,
    isInstitutionOnChain,
    issueCredentialOnChain,
    revokeCredentialOnChain,
} from "../services/blockchain.services.js";

export const issueCredential = async (req, res) => {
    try {
        const { student } = req.body;
        const file = req.file;

        /// 1. Upload to IPFS
        const ipfsHash = await uploadToIPFS(file.path);

        /// 2. Generate hash
        const buffer = fs.readFileSync(file.path);
        const fileHash = generateFileHash(buffer);

        /// 3. Blockchain call
        const { tokenId } = await issueCredentialOnChain(
            student,
            ipfsHash,
            fileHash
        );

        /// 4. Store in DB
        const credential = await Credential.create({
            student,
            issuer: process.env.WALLET_ADDRESS,
            ipfsHash,
            fileHash,
            tokenId,
        });

        fs.unlinkSync(file.path);

        res.json({ success: true, credential });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getStudentCertificates = async (req, res) => {
    try {
        const { address } = req.params;

        const data = await Credential.find({ student: address });

        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


export const verifyCertificate = async (req, res) => {
    try {
        const file = req.file;

        const buffer = fs.readFileSync(file.path);
        const fileHash = generateFileHash(buffer);

        const credential = await Credential.findOne({ fileHash });

        if (!credential) {
            return res.json({ valid: false });
        }

        res.json({
            valid: !credential.revoked,
            credential,
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


/// REVOKE
export const revokeCredential = async (req, res) => {
    try {
        const { tokenId } = req.body;

        await revokeCredentialOnChain(tokenId);

        await Credential.updateOne({ tokenId }, { revoked: true });

        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


/// GET CONTRACT OWNER
export const getOwner = async (req, res) => {
    try {
        const owner = await getContractOwner();

        res.json({
            success: true,
            owner,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
        });
    }
};

/// CHECK IF ADDRESS IS INSTITUTION
export const checkInstitution = async (req, res) => {
    try {
        const { address } = req.params;

        /// Basic validation
        if (!address) {
            return res.status(400).json({
                success: false,
                error: "Address is required",
            });
        }

        const isInstitution = await isInstitutionOnChain(address);

        res.json({
            success: true,
            address,
            isInstitution,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
        });
    }
};