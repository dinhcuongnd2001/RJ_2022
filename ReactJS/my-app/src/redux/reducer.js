import initialState from "./initialState";
import { addTodo, removeTodo } from "./action";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addTodo":
      console.log("co vao day");
      // console.log(action.payload);
      state.todoList.push(action.payload);
      return { ...state, todolist: [...state.todoList] };
    case "removeTodo":
      const newState = state.todoList.filter(
        (each) => each.id !== action.payload.id
      );
      return { ...state, todoList: newState };
    default:
      return state;
  }
};

export { rootReducer };
