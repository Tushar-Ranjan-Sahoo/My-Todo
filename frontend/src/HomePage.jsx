import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Function to fetch all tasks
  const fetchTasks = () => {
    fetch('http://localhost:3000/api/tasks')
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error('Error fetching tasks:', error));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Function to create a new task
  const createTask = () => {
    fetch('http://localhost:3000/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: newTask, description: 'hello hi ' }),
    })
      .then((response) => response.json())
      .then(() => {
        fetchTasks();
        setNewTask('');
      })
      .catch((error) => console.error('Error creating task:', error));
  };

  // Function to delete a task by ID
  const deleteTask = (taskId) => {
    fetch(`http://localhost:3000/api/tasks/${taskId}`, {
      method: 'DELETE',
    })
      .then(() => {
        fetchTasks();
      })
      .catch((error) => console.error('Error deleting task:', error));
  };

  // Function to update a task's completion status by ID
  const updateTaskCompletion = (taskId, completed) => {
    fetch(`http://localhost:3000/api/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed }),
    })
      .then(() => {
        fetchTasks();
      })
      .catch((error) => console.error('Error updating task:', error));
  };

  return (
    <div>
      <h1>Task List</h1>
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={createTask}>Create</button>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={(e) => updateTaskCompletion(task._id, e.target.checked)}
            />
            <strong>{task.title}</strong>: {task.description}
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
