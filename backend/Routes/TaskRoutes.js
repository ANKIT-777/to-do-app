import express from "express";
import { ceateTask } from "../Controllers/TaskController.js";

const route = express.Router();

route.post("/create",ceateTask);

export default route;