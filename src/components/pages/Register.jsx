// import React, { useState } from "react";

// export const Register = (props) => {
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');
//     const [name, setName] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email);
//     }

//     return (
//         <div className="auth-form-container">
//             <h2>Register</h2>
//         <form className="register-form" onSubmit={handleSubmit}>
//             <label htmlFor="name">Full name</label>
//             <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
//             <label htmlFor="email">email</label>
//             <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
//             <label htmlFor="password">password</label>
//             <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
//             <button type="submit">Log In</button>
//         </form>
//         <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
//     </div>
//     )
// }
import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

export const Register = (props) => {
  const handleSubmit = (values) => {
    axios
      .post("http://localhost:8080/register", values)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="auth-form-container">
    <h2>Register</h2>
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      {({ submitForm }) => (
        <Form className="register-form">
          <label htmlFor="name">Full name</label>
          <Field name="name" id="name" placeholder="full Name" />
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" id="email" placeholder="youremail@gmail.com" />
          <label htmlFor="password">Password</label>
          <Field type="password" name="password" id="password" placeholder="********" />
          <button type="button" onClick={submitForm}>
            Register
          </button>
        </Form>
      )}
    </Formik>
    <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
      Already have an account? Login here.
    </button>
  </div>
);
};



