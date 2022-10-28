import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
const ContractForm = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    number: "",
  });
  const REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("this field is required"),
    email: Yup.string()
      .required("this field is required")
      .matches(REGEX, "this field must be Email"),
    phone: Yup.string().required("this field is required"),
    message: Yup.string().required("this field is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  console.log(form);
  return (
    <Formik
      initialValues={form}
      enableReinitialize="true"
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => {
        return (
          <Form className="container">
            <label htmlFor="username">User Name</label>
            <Field
              onChange={handleChange}
              id="username"
              name="username"
              value={form.username}
            />
            {errors.username && touched.username ? (
              <div>{errors.username}</div>
            ) : null}
            <br />
            <label htmlFor="email">Email</label>
            <Field
              onChange={handleChange}
              id="email"
              name="email"
              value={form.email}
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <br />
            <label htmlFor="phone">Phone</label>
            <Field
              onChange={handleChange}
              id="phone"
              name="phone"
              value={form.phone}
            />
            {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
            <br />
            <label htmlFor="message">Message</label>
            <Field
              onChange={handleChange}
              id="message"
              name="message"
              value={form.message}
            />
            {errors.message && touched.message ? (
              <div>{errors.message}</div>
            ) : null}
            <br />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContractForm;
