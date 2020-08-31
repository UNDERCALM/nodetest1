import helmet from "helmet";
import cors from "cors";
import express from "express";
import basicAuth from "express-basic-auth";
export default server => {
    // Apply CORS
    server.use(cors());
    // Apply HTTP Security Headers
    server.use(helmet());
    // Apply basic authentication
    server.use(basicAuth({
        users: {
            admin: "superSecret"
        },
        challenge: true
    }));
    // Handle request Json boddy
    server.use(express.json());
};