import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Info() {
  let url = "http://localhost:8000/users";
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    await axios
      .get(url)
      .then((data) => setUsers(data.data))
      .catch((e) => console.log("bi loi r:", e));
  };
  useEffect(() => {
    getUsers();
  }, []);
  console.log(users);
  return (
    <div className="App">
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Info;
