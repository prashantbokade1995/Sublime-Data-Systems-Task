import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './TodoList';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo List</h1>
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
