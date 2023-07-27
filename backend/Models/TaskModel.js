import mongoose from "mongoose";

const TaskModel = mongoose.Schema({
    name : {
        type : String, 
        required : true,
    },
    description : {
        type : String, 
        default : ' ',
    },
    dueDate : {
        type : Date,
        default : null
    },
    priority : {
        type : String, 
        enum : ['low', 'medium', 'high'],
        default: 'medium'
    
    },
    status: {
        type: String,
        enum: ['to-do', 'in progress', 'completed'],
        default: 'to-do'
      }
    

});

const Task = mongoose.model("Task",TaskModel);
export default Task;