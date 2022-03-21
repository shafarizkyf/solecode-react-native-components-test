import React, { createContext, useReducer, useContext } from 'react';

const Context = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

const useApp = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}

export { Provider, useApp };