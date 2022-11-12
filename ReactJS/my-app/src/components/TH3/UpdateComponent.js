import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function UpdateComponent() {
  const {
    state: { user },
  } = useLocation();
  const [form, setForm] = useState(user);
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:8000/users/${user.id}`, form)
      .then((res) => {
        navigate(-1);
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="container w-50">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            value={form.name}
            type="text"
            name="name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            BirthDay
          </label>
          <input
            value={form.birthday}
            type="date"
            className="form-control"
            id="exampleInputPassword1"
            name="birthday"
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          />
        </div>
        <button
          onClick={(e) => handleClick(e)}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpdateComponent;
