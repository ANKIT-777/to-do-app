import express from "express";
import { ceateTask ,deleteTask  } from "../Controllers/TaskController.js";

const route = express.Router();

route.post("/create",ceateTask);
route.post('/delete/:name', deleteTask);



export default route;