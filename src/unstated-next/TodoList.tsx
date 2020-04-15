import React from 'react';
import { TodoListStore } from './Store';

const TodoList: React.FC = () => {
  const { todoList, remove } = TodoListStore.useContainer();
  
  const handleTodoRemove = (key: string) => {
    remove(key);
  }

  return <>
    {
      todoList.map(todo => {
        return <div key={todo.key}>
          <p>{todo.content}</p>
          <button onClick={() => handleTodoRemove(todo.key)}>remove</button>
        </div>
      })
    }
  </>
}

export default TodoList;