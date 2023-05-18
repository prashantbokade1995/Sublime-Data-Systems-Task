import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);
  const [updatedTodo, setUpdatedTodo] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    axios.get('http://localhost:8000/api/todos')
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch TODO items', error);
      });
  };

  const createTodo = () => {
    axios.post('http://localhost:8000/api/todos', { title: newTodo, completed: false })
      .then((response) => {
        setTodos([...todos, response.data]);
        setNewTodo('');
      })
      .catch((error) => {
        console.error('Failed to create TODO item', error);
      });
  };

  const editTodo = (id, title) => {
    setEditingTodo(id);
    setUpdatedTodo(title);
  };

  const updateTodo = (id) => {
    axios.put(`http://localhost:8000/api/todos/${id}`, { title: updatedTodo })
      .then((response) => {
        const updatedTodos = todos.map((todo) => {
          if (todo._id === id) {
            return response.data;
          }
          return todo;
        });
        setTodos(updatedTodos);
        setEditingTodo(null);
      })
      .catch((error) => {
        console.error('Failed to update TODO item', error);
      });
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:8000/api/todos/${id}`)
      .then(() => {
        setTodos(todos.filter((todo) => todo._id !== id));
      })
      .catch((error) => {
        console.error('Failed to delete TODO item', error);
      });
  };

  return (
    <div>
      <h1>TODO List new</h1>
      <input
        type="text"
        value={ newTodo }
        onChange={ (e) => setNewTodo(e.target.value) }
        placeholder="Enter a new TODO item"
      />
      <button onClick={ createTodo }>Add TODO</button>
      <ul>
        { todos.map((todo) => (
          <li key={ todo._id }>
            { editingTodo === todo._id ? (
              <input
                type="text"
                value={ updatedTodo }
                onChange={ (e) => setUpdatedTodo(e.target.value) }
              />
            ) : (
              todo.title
            ) }
            { editingTodo === todo._id ? (
              <button onClick={ () => updateTodo(todo._id) }>Save</button>
            ) : (
              <>
                <button onClick={ () => editTodo(todo._id, todo.title) }>Edit</button>
                <button onClick={ () => deleteTodo(todo._id) }>Delete</button>
              </>
            ) }
          </li>
        )) }
      </ul>
    </div>
  );
};

export default TodoApp;
