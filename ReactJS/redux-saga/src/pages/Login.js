import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const Login = () => {
  const [account, setAccount] = useState({ username: "", password: "" });
  const userlogined = useSelector((state) => state.userlogined);
  console.log(userlogined);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = () => {
    dispatch({ type: "LOGIN", payload: account });
  };

  useEffect(() => {
    if (userlogined.username) {
      navigate("/users");
    }
  }, [userlogined, navigate]);
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          name="username"
          value={account.username}
          onChange={(e) =>
            setAccount({ ...account, [e.target.name]: e.target.value })
          }
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="UserName"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          onChange={(e) =>
            setAccount({ ...account, [e.target.name]: e.target.value })
          }
          name="password"
          value={account.password}
          placeholder="password"
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          login();
        }}
        type="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
};
export default Login;
