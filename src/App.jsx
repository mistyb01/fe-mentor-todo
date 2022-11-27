import React from 'react';
import './App.css';
import {ReactComponent as IconSun} from './images/icon-sun.svg';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';
import FilterTodo from './components/FilterTodo';

function App() {
  return (
    <>

    <header>
      <h1>Todo</h1>
      <IconSun/>
    </header>
  
  <main>
    <InputTodo/>
    <TodoList/>
    <FilterTodo/> 
  </main>

    <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Your Name Here</a>.
    </div>
  </>
  );
}

export default App;
