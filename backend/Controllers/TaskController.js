import Task from "../Models/TaskModel.js";

// Controller to create a new task
export const createTask = async (req, res) => {
  const { name, description, dueDate, priority, status } = req.body;

  const newTask = new Task({
    name,
    description,
    dueDate,
    priority,
    status,
  });

  try {
    // Save the new task to the database
    await newTask.save();
    res.status(200).json(newTask);
  } catch (err) {
    // Handle errors if the task creation fails
    res.status(500).json({ message: err.message });
  }
};

// Controller to delete a task by its ID
export const deleteTask = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;

  try {
    // Find the task by ID
    const task = await Task.findById(id);
    if (task.userId == userId) {
      // Check if the user is authorized to delete the task
      await task.deleteOne();
      res.status(200).json({ message: "Task deleted Successfully" });
    } else {
      // If user is not authorized, respond with forbidden status
      res.status(403).json("Action forbidden");
    }
  } catch (err) {
    // Handle errors if task deletion fails
    res.status(500).json(err);
  }
};

// Controller to update a task by its ID
export const updateTask = async (req, res) => {
  const taskId = req.params.id;
  const { userId } = req.body;

  try {
    // Find the task by ID
    const task = await Task.findById(taskId);
    if (task.userId === userId) {
      // Check if the user is authorized to update the task
      await task.updateOne({ $set: req.body });
      res.status(200).json("Task Updated");
    } else {
      // If user is not authorized, respond with forbidden status
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    // Handle errors if task update fails
    res.status(500).json(error);
  }
};

// Controller to get a task by its ID
export const getTask = async (req, res) => {
  const id = req.params.id;
  try {
    // Find the task by ID
    const task = await Task.findById(id);
    res.status(200).json(task);
  } catch (error) {
    // Handle errors if task retrieval fails
    res.status(500).json(error);
  }
};
