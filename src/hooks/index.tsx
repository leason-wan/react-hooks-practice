import React from 'react';
import { useState, useEffect } from './use';

export default function Hooks() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log('component did mount');
  });

  return <>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>
      +1
    </button>
  </>;
}