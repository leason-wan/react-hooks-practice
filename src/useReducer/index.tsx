import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
import Store from './Store';

const Index: React.FC = () => {
  const [content, setContent] = useState<string>('');

  return <Store.Provider>
       <TodoAdd content={content} onContentChange={setContent} />
       <TodoList />
     </Store.Provider>;
}

export default Index;
