const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  // task schema 
  title:{
    type: String,
    required: true
  },
  description:{
    type: String,
  },

  completed:{
    type: Boolean,
    default: false,

  },
  createdAt:{
    type: Date,
    default:Date.now(),
  }
});

const Task = mongoose.model('Todos', taskSchema);

module.exports = Task;