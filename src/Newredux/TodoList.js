import React from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo, deleteTodo, updateTodo } from './actions';


const TodoList = ({ todos, addTodo, completeTodo, deleteTodo, updateTodo }) => {
  const handleAddTodo = (e) => {
    e.preventDefault();
    const text = e.target.elements.todoText.value;
    addTodo(text);
    e.target.reset();
  };

  const handleUpdateTodo = (id, text) => {
    updateTodo(id, text);
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input type="text" name="todoText" placeholder="Add a todo" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.completed ? (
              <del>{todo.text}</del>
            ) : (
              <input
                type="text"
                defaultValue={todo.text}
                onBlur={(e) => handleUpdateTodo(todo.id, e.target.value)}
              />
            )}
            {!todo.completed && (
              <>
                <button onClick={() => completeTodo(todo.id)}>Complete</button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};


const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
  completeTodo,
  deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
