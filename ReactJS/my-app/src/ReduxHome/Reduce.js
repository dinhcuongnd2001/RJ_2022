import { initialState } from "./InitialState";
import { combineReducers } from "redux";
import filterReducer from "../components/Filters/FiltersReducerSlice";
import todoReducer from "../components/TodoList/TodoSlice";
// function rootReducer(state = initialState, action) {
//   switch (action.type) {
//     case "TodoList/add":
//       // return { ...state, value: state.value + 1 };
//       return { ...state, todolist: [...state.todolist, action.payload] };
//     case "Filter/search":
//       // return { ...state, value: state.value + 1 };
//       return {
//         ...state,
//         filter: { ...state.filter, search: action.payload },
//       };
//     default:
//       return state;
//   }
// }

// const rootReducer = (state = {}, action) => {
//   return {
//     filter: filterReducer(state.filter, action),
//     todolist: todoReducer(state.todolist, action),
//   };
// };

const rootReducer = combineReducers({
  filter: filterReducer,
  todolist: todoReducer,
});

export default rootReducer;
