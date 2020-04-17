import { useReducer } from "react";
import { createContainer } from "unstated-next";

export interface Todo {
  key: string
  content: string
}

type TodoList = Todo[]

interface Action {
  type: string
  key?: string
  todo?: Todo
}

interface UseTodo {
  todoList: Todo[]
  dispatch: React.Dispatch<Action>
}

const TODOLISTINITAL: Todo[] = []

const todosReducer = (state: TodoList, action: Action): TodoList => {
  switch(action.type) {
    case 'remove':
      const result = state.filter(todo => todo.key !== action.key)
      return result;
    case 'add':
      return [...state, (action.todo as Todo)];
    default:
      throw new Error('invalide action type');
  }
}

const useTodoList = (inital: TodoList = TODOLISTINITAL): UseTodo => {
  const [todoList, dispatch ] = useReducer(todosReducer, inital);
  return { todoList, dispatch };
};

export const TodoListStore = createContainer(useTodoList);
