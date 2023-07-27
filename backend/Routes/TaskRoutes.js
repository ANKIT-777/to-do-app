import  express  from "express";
const router = express.Router();

import {createTask  , deleteTask, updateTask, getTask} from "../Controllers/TaskController.js"


router.post('/tasks', createTask);

router.delete('/tasks/:id', deleteTask);

router.put('/tasks/:id', updateTask);

router.get('/tasks/:id', getTask);

export default router;
