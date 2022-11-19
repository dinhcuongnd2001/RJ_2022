export const AddTodo = (data) => ({
  type: "TodoList/add",
  payload: data,
});

export const SearchText = (data) => ({
  type: "Filter/search",
  payload: data,
});

export const statusFilterChange = (status) => {
  return {
    type: "Filter/statusFilterChange",
    payload: status,
  };
};
