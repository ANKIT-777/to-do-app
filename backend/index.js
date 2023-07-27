import express from "express";
import dotenv from 'dotenv';
import DBconnect from "./database/db.js";
import authRoutes from "./Routes/AuthRoutes.js"

const app = express();
dotenv.config();
app.use(express.json());


const PORT = process.env.PORT || 2024;

DBconnect();

app.use("/auth",authRoutes);


app.listen(PORT, () => console.log(`Server Started at: ${PORT}`));