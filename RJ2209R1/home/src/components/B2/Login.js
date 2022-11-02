import React, { useState } from "react";

import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .trim()
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "email is false"
      ),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = ({ email, password }) => {
    if (email === "admin@gmail.com" && password === "letmein") {
      navigate("../employees", {
        state: { username: email, password: password },
      });
    } else {
      alert("the Email or Password is incorrect");
    }
    setForm({ email: "", password: "" });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <Formik
        initialValues={form}
        enableReinitialize={true}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => {
          return (
            <div className="container d-flex justify-content-center">
              <Form className="w-50">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <Field
                  className="form-control"
                  name="email"
                  onChange={handleChange}
                  value={form.email}
                />
                {errors.email && touched.email ? (
                  <div className="alert alert-warning">{errors.email}</div>
                ) : null}
                <br></br>
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <Field
                  className="form-control"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={form.password}
                />
                {errors.password && touched.password ? (
                  <div className="alert alert-warning">{errors.password}</div>
                ) : null}
                <button
                  //   onClick={handleSubmit}
                  className="btn btn-primary mt-5"
                  type="submit"
                >
                  Login
                </button>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}

export default Login;
