import express, { Express } from "express";
import { apiHelmetConfig } from "./config/helmetConfig";
import resourceRouter from "./api/v1/router/resourceRouter";
import setupSwagger from "./config/swagger";
import dotenv from "dotenv";
import { getCorsOptions } from "./config/corsConfig";
import cors from "cors";

dotenv.config();

// Initialize Express application
const app: Express = express();

// Define a route
app.get("/", (req, res) => {
    res.send("It's Online!!");
});



app.use(express.json());

app.get("/api/v1/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    });
});



app.use("/api/v1", resourceRouter);
app.use(cors(getCorsOptions()));
app.use(apiHelmetConfig);
setupSwagger(app);
export default app;