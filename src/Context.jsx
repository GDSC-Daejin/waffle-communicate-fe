import React, { createContext, useContext } from "react";

export const TodoStateContext = createContext(null);
export const TodoDispatchContext = createContext(null);
export const TodoNextIdContext = createContext(null);

export function useTodoState() {
  return useContext(TodoStateContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

export function useTodoNextId() {
  return useContext(TodoNextIdContext);
}
