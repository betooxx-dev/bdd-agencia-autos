import express from "express";
import cors from "cors";
import morgan from "morgan";
import { config } from "dotenv";

const app = express();

config();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

export default app;