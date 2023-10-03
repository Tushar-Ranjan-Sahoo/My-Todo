const express = require('express');
const router = express.Router();
const {createTask, getAllTasks, getTaskById, updateTask, deleteTask} = require('./controllers/taskController');

// Define your API routes here
router.get('/', (req, res) => {
  res.send('Welcome to the Todo API');
});

router.get('/tasks', getAllTasks);
router.post('/tasks', createTask);
router.get('/tasks/:id', getTaskById);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

module.exports = router;

