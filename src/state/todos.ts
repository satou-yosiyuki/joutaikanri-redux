import { Reducer } from "react";
import { Todo } from "src/types";

const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

export const addTodo = (text: Todo["text"]) => {
  // type アクションを識別
  // payload 情報を渡したい時
  return {
    type: ADD_TODO,
    payload: { text },
  } as const;
};
// as const でワイドニングを防ぐ

export const toggleTodo = (id: Todo["id"]) => {
  // type アクションを識別
  // payload 情報を渡したい時
  return {
    type: TOGGLE_TODO,
    payload: { id },
  } as const;
};

type Action = ReturnType<typeof addTodo | typeof toggleTodo>;

const TODOS: Todo[] = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

export const todosReducer: Reducer<Todo[], Action> = (
  state = TODOS,
  action
) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: state.length + 1,
        text: action.payload.text,
        isDone: false,
      };
      return [...state, newTodo];

    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });

    default: {
      return state;
    }
  }
};
