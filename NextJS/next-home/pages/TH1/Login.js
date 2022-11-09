import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";
function Login() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div className="container mt-5 w-25">
      <form>
        {/* <!-- Email input --> */}
        <div className="form-outline mb-4">
          <input type="email" id="form2Example1" className="form-control" />
          <label className="form-label" for="form2Example1">
            Email address
          </label>
        </div>

        {/* <!-- Password input --> */}
        <div className="form-outline mb-4">
          <input type="password" id="form2Example2" className="form-control" />
          <label className="form-label" for="form2Example2">
            Password
          </label>
        </div>

        <button
          onClick={() => handleClick()}
          type="button"
          className="btn btn-primary btn-block mb-4"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Login;
