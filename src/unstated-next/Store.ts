import { useState } from "react";
import { createContainer } from "unstated-next";

interface TodoRemove {
  (key: string): void
}

export interface TodoAdd {
  (todo: Todo): void
}

export interface Todo {
  key: string
  content: string
}

interface UseTodo {
  todoList: Todo[]
  remove: TodoRemove
  add: TodoAdd
}

const TODOLISTINITAL: Todo[] = []

const useTodoList = (inital: Todo[] = TODOLISTINITAL): UseTodo => {
  const [todoList, setTodoList] = useState<Todo[]>(inital);
  const remove = (key: string) => {
    const result = todoList.filter(todo => todo.key !== key)
    setTodoList(result);
  }
  const add = (todo: Todo) => {
    setTodoList([
      ...todoList,
      todo,
    ])
  }
  return { todoList, remove, add };
};

export const TodoListStore = createContainer(useTodoList);