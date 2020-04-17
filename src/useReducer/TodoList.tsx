import React from 'react';
import Store from './Store';

const TodoList: React.FC = () => {
  const store: any = Store.useStore();
  
  const handleTodoRemove = (key: string) => {
    store.dispatch('remove', key);
  }

  return <>
    {
      store.state.map((todo: any) => {
        return <div key={todo.key}>
          <p>{todo.content}</p>
          <button onClick={() => handleTodoRemove(todo.key)}>remove</button>
        </div>
      })
    }
  </>
}

export default TodoList;