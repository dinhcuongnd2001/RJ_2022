import React, { useContext, useState } from "react";
import { Value } from "../DataProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AddComponent() {
  const navigate = useNavigate();
  const { check, setCheck } = useContext(Value);
  const [form, setForm] = useState({ name: "", birthday: "" });
  const handleClick = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/users", form)
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));
    setCheck(!check);
    navigate(-1);
  };
  return (
    <div className="container w-50">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            name:
          </label>
          <input
            onChange={(e) => {
              console.log(form);
              setForm({ ...form, [e.target.name]: e.target.value });
            }}
            name="name"
            value={form.name}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Birth Day
          </label>
          <input
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
            name="birthday"
            value={form.birthday}
            type="date"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button
          type="submit"
          onClick={(e) => handleClick(e)}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddComponent;
