import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "src/types";

const initialState: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Pick<Todo, "text">>) => {
      state.push({
        id: state.length + 1,
        text: action.payload.text,
        isDone: false,
      });
      // const newTodo = {
      //   id: state.length + 1,
      //   text: action.payload.text,
      //   isDone: false,
      // };
      // const newState = [...state, newTodo];
      // return newState;
    },
    toggleTodo: (state, action: PayloadAction<Pick<Todo, "id">>) => {
      state.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      });
      // const newState = state.map((todo) => {
      //   if (todo.id === action.payload.id) {
      //     return { ...todo, isDone: !todo.isDone };
      //   }
      //   return todo;
      // });
      // return newState;
    },
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
