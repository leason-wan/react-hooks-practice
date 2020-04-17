import { createStore, Store} from './createStore';

interface Todo {
  key: string
  content: string
}

type TodoList = Todo[];

interface TodoRemove {
  (todoList: TodoList, key: string): TodoList
}

export interface TodoAdd {
  (todoList: TodoList, todo: Todo): TodoList
}

interface TodoListStore {
  state: TodoList
  actions: {
    add: TodoAdd
    remove: TodoRemove
  }
}

const TodoListStore: TodoListStore = {
  state: [],
  actions: {
    add(state: TodoList ,todo: Todo) {
      return [
        ...state,
        todo
      ]
    },
    remove(state: TodoList, key: string) {
      const todoList = state.filter(todo => todo.key !== key);
      return todoList;
    }
  }
}

const store = createStore(TodoListStore);

export default store as Store;
