import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "src/state/todos";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
