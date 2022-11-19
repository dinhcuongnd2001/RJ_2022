const todoState = [];

function todoReducer(state = todoState, action) {
  switch (action.type) {
    case "TodoList/add":
      return [...state, action.payload];
    case "TodoList/update":
      const newState = state.map((element) => {
        if (element.id === action.payload.id) {
          element.complete = action.payload.complete;
        }
        return element;
      });
      return newState;
    default:
      return state;
  }
}

export default todoReducer;
