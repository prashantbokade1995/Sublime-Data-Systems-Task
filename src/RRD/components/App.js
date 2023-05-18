

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import RegisterForm from '../../RegisterForm/RegisterForm'
import RegisterFormNew from '../../RegisterForm/RegisterFormNew'
import Todo from '../../todo/Todo';
import TodoApp from '../../todo/TodoApp';
import AppRedux from '../../simpleRedux/AppRedux';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/RegisterForm" element={<RegisterForm/>} />
          <Route path="/RegisterFormNew" element={<RegisterFormNew/>} />
          <Route path="/TodoApp" element={<TodoApp/>} />
          <Route path="/Todo" element={<Todo/>} />
          <Route path="/AppRedux" element={<AppRedux/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;

