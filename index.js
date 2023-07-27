import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import connectDB from "./database/db.js";
import DBconnect from "./Routing/AuthRoutes.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors({origin: true}));
const PORT = process.env.PORT || 2023;

DBconnect();


app.use("/auth",authRoutes);

app.listen(PORT, () => console.log(`Server Started at: ${PORT}`));