import { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
const ContractForm = () => {
  const [form, setForm] = useState({
    to: "",
    title: "",
    message: "",
  });

  const validationSchema = Yup.object().shape({
    to: Yup.string().required("this fields is required"),
    title: Yup.string().required("this fields is required"),
    message: Yup.string().required("this fields is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
    if (values.to && values.title && values.message) {
      alert("Successfully");
    } else {
      alert("The Field must be filled");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1>Mail Form</h1>
      <Formik
        initialValues={form}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, values, errors }) => {
          //   console.log(values);
          return (
            <Form>
              <div className="item">
                <label htmlFor="to">To</label>
                <Field
                  id="to"
                  name="to"
                  value={form.to}
                  onChange={handleChange}
                ></Field>
                {errors.to && touched.to ? (
                  <div className="alert alert-warning" role="alert">
                    {errors.to}
                  </div>
                ) : null}
              </div>

              <div className="item">
                <label htmlFor="title">title</label>
                <Field
                  id="title"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                ></Field>
                {errors.title && touched.title ? (
                  <div className="alert alert-warning" role="alert">
                    {errors.title}
                  </div>
                ) : null}
              </div>

              <div className="item">
                <label htmlFor="message">message</label>
                <Field
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                ></Field>
                {errors.message && touched.message ? (
                  <div className="alert alert-warning" role="alert">
                    {errors.message}
                  </div>
                ) : null}
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ContractForm;
