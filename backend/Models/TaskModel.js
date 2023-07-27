import mongoose from "mongoose";

const TaskModel = mongoose.Schema({
    name : {
        type : String, 
        required : true,
        unique : true
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
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

TaskModel.pre('save', function (next) {
    this.updatedAt = new Date();
    next();
});

const Task = mongoose.model("Task",TaskModel);
export default Task;
