// models/task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Regestration' },
  taskName: String,
  description: String,
  status: String,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
