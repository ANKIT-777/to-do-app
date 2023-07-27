import express from "express";
import dotenv from 'dotenv';
import DBconnect from "./Routing/AuthRoutes.js";

const app = express();
dotenv.config();
app.use(express.json());


const PORT = process.env.PORT || 2023;

DBconnect();




app.listen(PORT, () => console.log(`Server Started at: ${PORT}`));