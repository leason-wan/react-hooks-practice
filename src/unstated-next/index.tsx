import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
import { TodoListStore } from './Store';

const Index: React.FC = () => {
  const [content, setContent] = useState<string>('');

  return  <TodoListStore.Provider>
       <TodoAdd content={content} onContentChange={setContent} />
       <TodoList />
     </TodoListStore.Provider>;
}

export default Index;
