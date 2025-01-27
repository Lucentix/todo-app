import React, { useState, useEffect } from 'react';
import './index.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Fetch todos from the backend on load
  useEffect(() => {
    fetch('http://localhost:5000/todos')
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error('Error fetching todos:', err));
  }, []);

  // Add a new todo
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim() !== '') {
      const newTask = { id: Date.now(), text: newTodo };

      fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      })
        .then((res) => res.json())
        .then((data) => {
          setTodos(data); // Update state with new todo list
          setNewTodo('');
        });
    }
  };

  // Delete a todo
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/todos/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => setTodos(data)) // Update state with new todo list
      .catch((err) => console.error('Error deleting todo:', err));
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
          placeholder="Add a new task..."
        />
        <button type="submit">Add</button>
      </form>
      <div>
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <p>{todo.text}</p>
            <button
              onClick={() => handleDelete(todo.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
