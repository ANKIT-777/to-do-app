import express from "express";
import dotenv from 'dotenv';
import DBconnect from "./database/db.js";
import authRoutes from "./Routes/AuthRoutes.js"
import bodyParser from "body-parser";
import cors from "cors";
import taskRoutes from "./Routes/TaskRoutes.js";

const app = express();
dotenv.config();
app.use(express.json());


const PORT = process.env.PORT || 2024;

DBconnect();
app.use(cors());

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/auth",authRoutes);
app.use("/Task" ,taskRoutes);


app.listen(PORT, () => console.log(`Server Started at: ${PORT}`));