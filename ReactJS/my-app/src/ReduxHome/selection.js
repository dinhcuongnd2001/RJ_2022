// export const todoListSelector = (state) => {
//   const filterTodo = state.todolist.filter((todo) =>
//     todo.name.includes(state.filter.search)
//   );
//   return filterTodo;
// };

import { createSelector } from "reselect";

export const todoList = (state) => state.todolist;
export const getSearchText = (state) => state.filter.search;
export const getStatus = (state) => state.filter.status;

export const getToDoBySelect = createSelector(
  todoList,
  getStatus,
  getSearchText,
  (todos, status, text) => {
    const filterTodo = todos.filter((todo) => {
      if (status === "All") {
        return todo.name.includes(text);
      }
      return (
        todo.name.includes(text) &&
        (status === "Completed" ? todo.complete : !todo.complete)
      );
    });

    return filterTodo;
  }
);
