import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import { addTodo } from "../redux/action";
function TodoList() {
  const [todo, setTodo] = useState({ id: uuidv4(), name: "" });
  const dispacth = useDispatch();
  const toList = useSelector((state) => state.todoList);

  console.log(toList);

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(todo);
    dispacth(addTodo(todo));
    setTodo({ id: uuidv4(), name: "" });
  };
  return (
    <div>
      <h3>Todo List</h3>
      <form>
        <div className="mb-3">
          <input
            onChange={(e) => setTodo({ ...todo, name: e.target.value })}
            type="text"
            value={todo.name}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button
          type="submit"
          onClick={(e) => handleClick(e)}
          className="btn btn-success"
        >
          Submit
        </button>
      </form>
      {toList.map((each) => (
        <Todo key={each.id} todo={each} />
      ))}
    </div>
  );
}

export default TodoList;
