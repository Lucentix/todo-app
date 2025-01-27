const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 5000;
const FILE_PATH = './todos.json';

// Middleware
app.use(cors());
app.use(express.json());

// Load todos from the JSON file
const loadTodos = () => {
  try {
    const data = fs.readFileSync(FILE_PATH, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

// Save todos to the JSON file
const saveTodos = (todos) => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(todos, null, 2), 'utf8');
};

// Get all todos
app.get('/todos', (req, res) => {
  const todos = loadTodos();
  res.json(todos);
});

// Add a new todo
app.post('/todos', (req, res) => {
  const todos = loadTodos();
  const newTodo = req.body;
  todos.push(newTodo);
  saveTodos(todos);
  res.json(todos);
});

// Delete a todo by ID
app.delete('/todos/:id', (req, res) => {
  const todos = loadTodos();
  const updatedTodos = todos.filter((todo) => todo.id !== parseInt(req.params.id));
  saveTodos(updatedTodos);
  res.json(updatedTodos);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
