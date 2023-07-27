
import Task from "../Models/TaskModel.js";

export const ceateTask = async(req,res) => {
    const {name , description , dueDate, priority , status } = req.body; 

    const newTask = new Task({
        name , 
        description, 
        dueDate, 
        priority, 
        status
    })

    try{
        await newTask.save();
        res.status(200).json(newTask);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }

}

// const deleteTask  = async (req,res) => {

// }

// const update = async(req,res) => {

// } 

// const getTask = async(req,res) =>{

// }