import React from 'react';
import Store from './Store';
import { v4 as uuidv4 } from 'uuid';

interface TodoAddProps {
  content: string
  onContentChange: (content: string) => void
}

const TodoAdd: React.FC<TodoAddProps> = ({ content, onContentChange }) => {
  const store: any = Store.useStore();

  const handleTodoAdd = () => {
    const todo = {
      key: uuidv4(),
      content: content,
    }
    store.dispatch('add', todo);
    onContentChange('');
  }

  return <>
      <input type="text" value={content} onChange={e => onContentChange(e.target.value)}/>
      <button onClick={handleTodoAdd}>add</button>
    </>;
}

export default TodoAdd;