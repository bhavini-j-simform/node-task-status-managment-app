// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const {getTasksByUserId, addTask ,updateTask,deleteTask} = require('../controllers/taskController');

router.get('/user/:userId', getTasksByUserId); 
router.post('/add', addTask);
router.put('/update', updateTask);
router.delete('/delete/:taskId', deleteTask);

module.exports = router;