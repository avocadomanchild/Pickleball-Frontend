import React, { useState } from "react";
// import logo from './logo.svg';
// import './App.css';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}




// import { withRouter } from 'react-router-dom';
// import React, { Component } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';

// const initialValues = {

//   username: '',
//   email:'',
//   password: ''
// };

// const validationSchema = Yup.object({
//   username: Yup.string().required('Required'),
//   email: Yup.string().email('Invalid email format').required('Required'),
//   password: Yup.string().required('Required').matches(
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
//     'Please choose a stronger password.'
//   ),
// });

// class CodeEvolutionForm extends Component {
//   onSubmit = async (values, { setFieldError }) => {
//     console.log('Form data', values);
//     try {
//       const response = await axios.post('http://localhost:8080/register', values);
//       this.props.history.push('/');
//       // Do something with the response
//     } catch (error) {
//       if (error.response && error.response.data && error.response.data.error) {
//         const errorMessage = error.response.data.error;
//         if (errorMessage.includes("Duplicate entry") && errorMessage.includes("for key 'users_info.username'")) {
//           setFieldError("username", "Username has already been taken.");
//           console.log("Username has already been taken.");
//         }
//         else if (errorMessage.includes("Duplicate entry") && errorMessage.includes("for key 'users_info.email'")) {
//           setFieldError("email", "Email has already been taken.");
//           console.log("Email has already been taken.");
//         }
//         else {
//           console.log(errorMessage);
//         }
//       } 
//       else {
//         console.log(error);
//       }
//     }
//   };
  


//   render() {
//     return (
//       <div className="auth-form-container">
//         <h2>Register</h2>
//         <Formik 
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={this.onSubmit}
//         className="formik-form"
//         >
//         <Form >
//           <div className="form-control">
//             <label htmlFor="username">Username</label>
//             <Field type="username" id="username" name="username"  placeholder="Username"/>
//             <ErrorMessage name="username" component="div" className="error"/>
//           </div>
//           <div className="form-control">
//             <label htmlFor="email">E-mail</label>
//             <Field type="email" id="email" name="email" placeholder="youremail@gmail.com" />
//             <ErrorMessage name="email" component="div" className="error"/>
//           </div>
//           <div className="form-control">
//             <label htmlFor="password">Password</label>
//             <Field type="password" id="password" name="password" placeholder="********" />
//             <ErrorMessage name="password" component="div" className="error-password"/>
//           </div>
//           <button  type="submit">Submit</button>
//         </Form>
//       </Formik>
//       <button  className="link-btn" onClick={() => this.props.onFormSwitch('login')}>Already have an account? Login here.</button>
//       </div>
//     );
//   }
// } 
// export default withRouter(CodeEvolutionForm);