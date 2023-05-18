import React from 'react';
import { Provider } from 'react-redux';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import store from './store';


const AppRedux = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo List redux</h1>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
};

export default AppRedux;

