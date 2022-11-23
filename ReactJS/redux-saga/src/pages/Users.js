import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
function User() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const check = useSelector((state) => state.check);
  const deleteUser = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  useEffect(() => {
    console.log("re-call");
  }, [check]);
  console.log("re-render");
  // useEffect(, )
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td>
                <button onClick={() => deleteUser(user.id)}>DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default User;
