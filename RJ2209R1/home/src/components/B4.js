import { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
const ContractForm = () => {
  const [form, setForm] = useState({
    name: "",
    idCard: "",
    dob: "",
    gender: "",
    citizenship: "",
    company: "",
    position: "",
    BHYT: "",
    province: "",
    district: "",
    street: "",
    tel: "",
    email: "",
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
        {({ touched, errors }) => {
          return (
            <Form>
              <div className="item">
                <label htmlFor="name">name</label>
                <Field
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                ></Field>
                {errors.name && touched.name ? (
                  <div className="alert alert-warning" role="alert">
                    {errors.name}
                  </div>
                ) : null}
              </div>

              <div className="item">
                <label htmlFor="idCard">idCard</label>
                <Field
                  id="idCard"
                  name="idCard"
                  value={form.idCard}
                  onChange={handleChange}
                ></Field>
                {errors.idCard && touched.idCard ? (
                  <div className="alert alert-warning" role="alert">
                    {errors.idCard}
                  </div>
                ) : null}
              </div>

              <div className="item">
                <label htmlFor="dob">dob</label>
                <Field
                  id="dob"
                  name="dob"
                  value={form.dob}
                  onChange={handleChange}
                ></Field>
                {errors.dob && touched.dob ? (
                  <div className="alert alert-warning" role="alert">
                    {errors.dob}
                  </div>
                ) : null}
              </div>

              <div className="item">
                <label htmlFor="dob">dob</label>
                <Field
                  id="dob"
                  name="dob"
                  value={form.dob}
                  onChange={handleChange}
                ></Field>
                {errors.dob && touched.dob ? (
                  <div className="alert alert-warning" role="alert">
                    {errors.dob}
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
