// controllers/taskController.js
const Task = require('../models/task');

const getTasksByUserId = async (req, res) => {
  const { userId } = req.params; // Extract userId from URL params

  try {
    const tasks = await Task.find({ userId }); // Find tasks by userId

    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const addTask = async (req, res) => {
  const { userId, taskName, description, status } = req.body;

  try {
    const newTask = new Task({
      userId,
      taskName,
      description,
      status,
    });

    await newTask.save();
    res.status(201).json({ message: 'Task added successfully.' ,newTask});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
    const { taskId, taskName, description, status } = req.body;
  
    try {
      const updatedTask = await Task.findByIdAndUpdate(taskId, {
        taskName,
        description,
        status,
      }, { new: true });
  
      if (!updatedTask) {
        return res.status(404).json({ message: 'Task not found.' });
      }
  
      res.status(200).json({ message: 'Task updated successfully.', updatedTask });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const deleteTask = async (req, res) => {
    const { taskId } = req.params;
  
    try {
      const deletedTask = await Task.findByIdAndDelete(taskId);
  
      if (!deletedTask) {
        return res.status(404).json({ message: 'Task not found.' });
      }
  
      res.status(200).json({ message: 'Task deleted successfully.', deletedTask });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = {
  getTasksByUserId,
  addTask,
  updateTask,
  deleteTask
};
