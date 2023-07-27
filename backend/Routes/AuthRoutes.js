import express from "express";
import { RegisterUser, login } from "../Controllers/AuthController.js";


const router = express.Router();

router.post("/Register", RegisterUser);
router.post("/Login", login);

export default router;