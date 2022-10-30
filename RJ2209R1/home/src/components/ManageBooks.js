import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
const ManageBooks = () => {
  const [form, setForm] = useState({ title: "", count: "" });
  const [books, setBooks] = useState([{ title: "abc", count: "123" }]);
  const [action, setAction] = useState({ action: "add", ind: -1 });
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("this field is required"),
    count: Yup.string().required("this field is required"),
  });
  const handleSubmit = (values) => {
    console.log(values);
    // if (value.title !== "" && value.count !== "") {
    //   alert("Insert Data Success");
    // } else {
    //   alert("The Fields must be filled");
    // }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (action.action === "add") {
      setBooks([...books, form]);
    } else {
      const newBooks = books.map((book, index) => {
        if (index === action.ind) return form;
        else return book;
      });
      setBooks(newBooks);
      setAction({ action: "add", ind: -1 });
    }
    setForm({ title: "", count: "" });
  };

  const handleDel = (ind) => {
    const newBooks = books.filter((book, index) => index != ind);
    setBooks(newBooks);
  };

  const handleUpdate = (ind) => {
    const book = books.reduce((result, curr, index) => {
      if (index === ind) return curr;
      return result;
    });
    setForm(book);
    setAction({ action: "edit", ind: ind });
  };

  return (
    <div>
      <h1>Library</h1>
      <Formik
        initialValues={form}
        validationSchema={validationSchema}
        enableReinitialize="true"
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => {
          //   console.log(obje);
          return (
            <Form onSubmit={handleSubmit}>
              <div className="pt-1">
                <label htmlFor="title">Title :</label>
                <Field
                  id="title"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                />
                {errors.title && touched.title ? (
                  <div>{errors.title}</div>
                ) : null}
              </div>
              <br />
              <div className="pt-1">
                <label htmlFor="count">Count :</label>
                <Field
                  id="count"
                  name="count"
                  value={form.count}
                  onChange={handleChange}
                />
                {errors.count && touched.count ? (
                  <div>{errors.count}</div>
                ) : null}
              </div>
              <button onClick={handleClick} className="btn btn-primary mt-5">
                {action.action}
              </button>
            </Form>
          );
        }}
      </Formik>

      <div>
        <ul>
          {books.map((each, index) => (
            <li className="mt-5" key={index}>
              <div className="d-flex bd-highlight mb-3 justify-content-between w-50">
                <div>{each.title}</div>
                <div>{each.count}</div>
                <button
                  onClick={() => handleDel(index)}
                  className="btn btn-primary"
                >
                  delete
                </button>
                <button
                  onClick={() => handleUpdate(index)}
                  className="btn btn-primary"
                >
                  edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageBooks;
