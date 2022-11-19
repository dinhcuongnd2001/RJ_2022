const todoState = [];

function todoReducer(state = todoState, action) {
  switch (action.type) {
    case "TodoList/add":
      return [...state, action.payload];
    default:
      return state;
  }
}

export default todoReducer;
