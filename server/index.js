import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import credentialRoutes from "./routes/credential.routes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

console.log("CONTRACT ADDRESS : ", process.env.CONTRACT_ADDRESS);

// DB Connection
connectDB();

// Routes
app.use("/api/credentials", credentialRoutes);

// Start server
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});