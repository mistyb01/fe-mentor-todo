import React from 'react';
import './App.css';
import {ReactComponent as IconSun} from './images/icon-sun.svg';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';
import FilterTodo from './components/FilterTodo';

function App() {
  let mockTodos = [
    {
      id: 1,
      title: 'Buy a sketchbook',
      completed: false
    },
    {
      id: 2,
      title: 'Sign up for figure drawing',
      completed: false
    },
    {
      id: 3,
      title: 'Go to the gym',
      completed: true
    }
  ];

  return (
    <>

    <header>
      <h1>Todo</h1>
      <IconSun/>
    </header>
  
  <main>
    <InputTodo/>
    <TodoList todos={mockTodos}/>
    <FilterTodo/> 
  </main>

    <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Your Name Here</a>.
    </div>
  </>
  );
}

export default App;
