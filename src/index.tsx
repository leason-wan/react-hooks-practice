import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './unstated-next';
// import TodoList from './useReducer';

ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);
