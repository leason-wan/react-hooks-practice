import React from 'react';

type ProviderProps = React.FC<{
  initalState?: any
}>

type Dispatch = (type: string, args: any) => void

type UseStore = () => void

export interface Store {
  Provider: React.FC
  dispatch: Dispatch
  useStore: UseStore
}

export const createStore = (store: any): Store => {
  const [state, setState] = React.useState(store.state);

  const dispatch = (type: string, args: any): void => {
    const actionKeys = Object.keys(store.actions);
    const hasType = actionKeys.includes(type);
    if (!hasType) {
      throw Error('dispatch actions is invalided')
    }
    const action = store.actions[type];
    setState(action(state, args));
  }

  const Context = React.createContext({state, dispatch});

  const Provider: ProviderProps = ({initalState, children}) => {

    return <Context.Provider value={{state: initalState, dispatch}} >{children}</Context.Provider>;
  }

  const useStore = () => {
    const context = React.useContext(Context);
    return context;
  }

  return {
    Provider,
    dispatch,
    useStore
  }
}
