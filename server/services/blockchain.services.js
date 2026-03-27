import { contract } from "../config/ether.js";

/// ISSUE
export const issueCredentialOnChain = async (
    student,
    ipfsHash,
    fileHash
) => {
    const tx = await contract.issueCredential(student, ipfsHash, fileHash);

    const receipt = await tx.wait();

    /// Parse event logs safely
    const parsedLogs = receipt.logs
        .map((log) => {
            try {
                return contract.interface.parseLog(log);
            } catch {
                return null;
            }
        })
        .filter(Boolean);

    const event = parsedLogs.find(
        (e) => e.name === "CredentialIssued"
    );

    const tokenId = event.args.tokenId;

    return {
        receipt,
        tokenId: Number(tokenId), // convert BigInt → number
    };
};


/// REVOKE
export const revokeCredentialOnChain = async (tokenId) => {
    const tx = await contract.revokeCredential(tokenId);
    await tx.wait();
};

/// Get contract owner
export const getContractOwner = async () => {
    const owner = await contract.owner(); // ethers v6 call
    return owner;
};

/// Check if address is authorized institution
export const isInstitutionOnChain = async (address) => {
    const isAuthorized = await contract.isAuthorizedInstitution(address);
    return isAuthorized;
};

/// Authorize Institution 
export const authorizeInstitution = async (req, res) => {
    try {
        const { address } = req.body;

        const tx = await contract.authorizeInstitution(address);
        await tx.wait();

        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/// Remove Authorized Instituion
export const removeInstitution = async (req, res) => {
    try {
        const { address } = req.body;

        const tx = await contract.removeInstitution(address);
        await tx.wait();

        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/// Check if address is owner
export const isOwner = async (req, res) => {
    const owner = await contract.owner();
    const { address } = req.params;

    res.json({
        isOwner: owner.toLowerCase() === address.toLowerCase(),
    });
};

/// Get Credential By Token ID
export const getCredentialByTokenId = async (req, res) => {
    try {
        const { tokenId } = req.params;

        const result = await contract.getCredential(tokenId);

        res.json({
            ipfsHash: result[0],
            revoked: result[1],
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};