import React from 'react';
import { TodoListStore, Todo } from './Store';
import { v4 as uuidv4 } from 'uuid';

interface TodoAddProps {
  content: string
  onContentChange: (content: string) => void
}

const TodoAdd: React.FC<TodoAddProps> = ({ content, onContentChange }) => {
  const { dispatch } = TodoListStore.useContainer();

  const handleTodoAdd = () => {
    const todo: Todo = {
      key: uuidv4(),
      content: content,
    }
    dispatch({ type: 'add', todo });
    onContentChange('');
  }

  return <>
      <input type="text" value={content} onChange={e => onContentChange(e.target.value)}/>
      <button onClick={handleTodoAdd}>add</button>
    </>;
}

export default TodoAdd;