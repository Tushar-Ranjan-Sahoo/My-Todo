const Task = require('../models/taskModel');

// Controller function to create a new task
// Error handling middleware


 exports.createTask = async(req, res, next)=> {
  // Extract task data from the request body
  const { title, description } = req.body;

  // Check if title and description are provided
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  try {
    // Create a new task instance
    const newTask = new Task({
      title,
      description,
    });

    // Save the task to the database
    const savedTask = await newTask.save();

    // Respond with the created task
    res.status(201).json(savedTask);
  } catch (error) {
    next(error);
  }
}

// Use the error handling middleware



// Controller function to get all tasks
exports.getAllTasks = async(req, res)=> {
  try {
    // Fetch all tasks from the database
    const tasks = await Task.find();

    // Respond with the list of tasks
    res.json(tasks);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: 'Internalll  server error' });
  }
}

// // Controller function to get a task by ID
exports.getTaskById = async(req, res)=> {
  try {
    const taskId = req.params.id;

    // Fetch the task by ID from the database
    const task = await Task.findById(taskId);

    // Check if the task was found
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Respond with the task
    res.json(task);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// // Controller function to update a task by ID
exports.updateTask= async (req, res) => {
  try {
    const taskId = req.params.id;

    // Extract updated task data from the request body
    const { title, description, completed } = req.body;

    // Find the task by ID and update it
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      {
        title,
        description,
        completed,
      },
      { new: true } // Return the updated task
    );

    // Check if the task was found and updated
    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Respond with the updated task
    res.json(updatedTask);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// // Controller function to delete a task by ID
exports.deleteTask=async(req, res)=> {
  try {
    const taskId = req.params.id;

    // Find the task by ID and remove it
    const deletedTask = await Task.findByIdAndRemove(taskId);

    // Check if the task was found and deleted
    if (!deletedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Respond with a success message
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


