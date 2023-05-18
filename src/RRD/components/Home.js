import React, { useState } from 'react';
import Contact from './Contact';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editedTodoText, setEditedTodoText] = useState('');

  const handleInputChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (todoText.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: todoText,
      };
      setTodos([...todos, newTodo]);
      setTodoText('');
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEditTodo = (id, text) => {
    setEditingTodoId(id);
    setEditedTodoText(text);
  };

  const handleSaveTodo = (event) => {
    event.preventDefault();
    if (editedTodoText.trim() !== '') {
      const updatedTodos = todos.map((todo) =>
        todo.id === editingTodoId ? { ...todo, text: editedTodoText } : todo
      );
      setTodos(updatedTodos);
      setEditingTodoId(null);
      setEditedTodoText('');
    }
  };

  const handleCancelEdit = () => {
    setEditingTodoId(null);
    setEditedTodoText('');
  };

  return (
    <div>
    <Contact/>
      <h1>Todo App</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={todoText}
          onChange={handleInputChange}
          placeholder="Enter a todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editingTodoId === todo.id ? (
              <form onSubmit={handleSaveTodo}>
                <input
                  type="text"
                  value={editedTodoText}
                  onChange={(e) => setEditedTodoText(e.target.value)}
                />
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelEdit}>
                  Cancel
                </button>
              </form>
            ) : (
              <div>
                {todo.text}
                <button onClick={() => handleEditTodo(todo.id, todo.text)}>Edit</button>
                <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
