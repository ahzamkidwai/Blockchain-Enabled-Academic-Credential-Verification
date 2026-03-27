import express from "express";
import multer from "multer";
import {
    issueCredential,
    getStudentCertificates,
    verifyCertificate,
    revokeCredential,
    getOwner,
    checkInstitution,
} from "../controllers/credential.controller.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/issue", upload.single("file"), issueCredential);

router.get("/student/:address", getStudentCertificates);

router.post("/verify", upload.single("file"), verifyCertificate);

router.post("/revoke", revokeCredential);

router.get("/owner", getOwner);

router.get("/institution/:address", checkInstitution);

export default router;