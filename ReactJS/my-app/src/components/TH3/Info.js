import React from "react";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { Value } from "../DataProvider";
function Info() {
  const { check, setCheck } = useContext(Value);
  console.log("check: ", check);
  let url = "http://localhost:8000/users";
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = () => {
    navigate(`/add`);
  };
  const getUsers = async () => {
    await axios
      .get(url)
      .then((data) => setUsers(data.data))
      .catch((e) => console.log("bi loi r:", e));
  };
  useEffect(() => {
    getUsers();
  }, [check]);

  const handleDelete = async (user) => {
    await axios
      .delete(`http://localhost:8000/users/${user.id}`)
      .then((res) => setCheck(!check));
  };
  return (
    <div className="App container w-50 mt-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th colSpan={2} scope="col">
              name
            </th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td colSpan="2">
                <button
                  onClick={() => navigate("/update", { state: { user: user } })}
                  className="btn btn-warning mx-5"
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(user)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleClick} className="btn btn-primary">
        add
      </button>
    </div>
  );
}

export default Info;
