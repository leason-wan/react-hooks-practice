import React from 'react';
import { useStore } from './Store';

const TodoList: React.FC = () => {
  const { state, dispatch } = useStore();
  
  const handleTodoRemove = (key: string) => {
    dispatch('remove', key);
  }

  return <>
    {
      state.map((todo: any) => {
        return <div key={todo.key}>
          <p>{todo.content}</p>
          <button onClick={() => handleTodoRemove(todo.key)}>remove</button>
        </div>
      })
    }
  </>
}

export default TodoList;