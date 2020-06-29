import React from 'react';
import ReactDOM from 'react-dom';
// import TodoList from './unstated-next';
import Hooks from './hooks';
import { Deps } from './hooks/deps';

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <TodoList /> */}
//     <Hooks />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

export function reRender() {
  Deps.point = 0;
  ReactDOM.render(<Hooks />, document.getElementById('root'));
}

reRender();