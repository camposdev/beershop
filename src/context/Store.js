import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';
import { getLocalCart } from '../services/shoppingCart';

const initialState = {
  cart: getLocalCart() || []
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  console.log(state);
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
