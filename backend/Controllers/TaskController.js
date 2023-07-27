
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
export const deleteTask = async (req, res) => {
    const name = req.params.name; 
    const { userId } = req.body;
  
    try {
      
      const Task = await Task.findBy({ name: name });
  
      if (Task.userId == userId) {
        await Task.deleteOne();
        res.status(200).json({ message: "Task deleted Successfully" });
      } else {
        res.status(403).json("Action forbidden");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
// const update = async(req,res) => {

// } 

// const getTask = async(req,res) =>{

// }