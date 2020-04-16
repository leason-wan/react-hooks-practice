import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
import { Provider } from './Store';

const Index: React.FC = () => {
  const [content, setContent] = useState<string>('');

  return <Provider>
       <TodoAdd content={content} onContentChange={setContent} />
       <TodoList />
     </Provider>;
}

export default Index;
