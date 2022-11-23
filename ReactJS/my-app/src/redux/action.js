const addTodo = (data) => ({
  type: "addTodo",
  payload: data,
});

const removeTodo = (data) => ({
  type: "removeTodo",
  payload: data,
});

export { addTodo, removeTodo };
