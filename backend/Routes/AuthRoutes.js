import express from "express";
import { RegisterUser } from "../Controllers/AuthController.js";

const router = express.Router();

router.post("/Register", RegisterUser);

export default router;