import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    axios
      .get('http://localhost:8000/api/todos')
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch TODO items', error);
      });
  };

  const createTodo = () => {
    axios
      .post('http://localhost:8000/api/todos', { title: newTodo, completed: false })
      .then((response) => {
        setTodos([...todos, response.data]);
        setNewTodo('');
      })
      .catch((error) => {
        console.error('Failed to create TODO item', error);
      });
  };

  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:8000/api/todos/${id}`)
      .then(() => {
        setTodos(todos.filter((todo) => todo._id !== id));
      })
      .catch((error) => {
        console.error('Failed to delete TODO item', error);
      });
  };



const editTodo = (id, title) => {
    const updatedTitle = prompt('Enter the updated title:', title);
    if (updatedTitle) {
      updateTodo(id, updatedTitle);
    }
  };
  

  const updateTodo = (id, updatedTitle) => {
    axios
      .put(`http://localhost:8000/api/todos/${id}`, { title: updatedTitle })
      .then(() => {
        const updatedTodos = todos.map((todo) => {
          if (todo._id === id) {
            return { ...todo, title: updatedTitle };
          }
          return todo;
        });
        setTodos(updatedTodos);
      })
      .catch((error) => {
        console.error('Failed to update TODO item', error);
      });
  };

  return (
    <div>
      <h1>TODO List new</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button onClick={createTodo}>Add TODO</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            editTodo={editTodo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
