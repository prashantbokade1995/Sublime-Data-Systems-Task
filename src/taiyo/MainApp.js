import React from 'react'
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
const MainApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default MainApp
