import mongoose from "mongoose";

const credentialSchema = new mongoose.Schema(
    {
        student: String,
        issuer: String,
        ipfsHash: String,
        fileHash: String,
        tokenId: Number,
        revoked: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export default mongoose.model("Credential", credentialSchema);