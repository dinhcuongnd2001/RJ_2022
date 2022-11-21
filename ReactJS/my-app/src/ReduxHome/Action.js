export const AddTodo = (data) => ({
  type: "TodoList/add",
  payload: data,
});

export const SearchText = (data) => ({
  type: "Filter/searchSelector",
  payload: data,
});

export const statusFilterChange = (status) => {
  return {
    type: "Filter/statusFilterChange",
    payload: status,
  };
};

export const priorityChange = (priority) => {
  return {
    type: "Filter/priorityChange",
    payload: priority,
  };
};
