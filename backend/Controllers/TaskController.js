
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

export const deleteTask  = async (req,res) => {
    const id = req.params.id;
    const {userId} = req.body;

    try{
        const Task = await Task.findBy(id);
        if(Task.userId == userId){
            await Task.deleteOne();
            res.status(200).json({message:"Task deleted Succesfully"});

        }
        else{
            res.status(403).json("Action forbidden");
        }

    }
    catch(err){

        res.status(500).json(err);
    }
}

export const updateTask = async (req, res) => {
    const taskId = req.params.id;
    const { userId } = req.body;
  
    try {
      const task = await Task.findById(taskId);
      if (task.userId === userId) {
        await post.updateOne({ $set: req.body });
        res.status(200).json("Task Updated");
      } else {
        res.status(403).json("Action forbidden");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
export const getTask = async(req,res) => {
    const id = req.params.id;
    try{
        const task = await Task.findById(id);
        res.status(200).json(task);
    }
    catch( error) {
        res.status(500).json(error);
    }
}