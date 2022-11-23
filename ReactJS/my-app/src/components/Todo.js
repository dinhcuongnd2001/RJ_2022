import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/action";
function Todo({ todo }) {
  const dispatch = useDispatch();
  const handClick = () => {
    dispatch(removeTodo(todo));
  };
  return (
    <div>
      <p>{todo.name}</p>
      <button onClick={() => handClick()}>remove</button>
    </div>
  );
}

export default Todo;
