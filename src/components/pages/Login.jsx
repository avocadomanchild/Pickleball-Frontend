// import React, { useState } from "react";
// import logo from './logo.svg';
// import './App.css';

// export const Login = (props) => {
//     const [email, setEmail] = useState('');



// import { withRouter } from 'react-router-dom';
// import React, { Component,useContext,useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import { LoginContext } from '../context_state/login_state';



// /// added for the state of the login 
// // const {loggedIn,setLoggedIn} = useContext(LoginContext)

// const initialValues = {

//   username: '',
//   password: ''
// };

// const validationSchema = Yup.object({
//   username: Yup.string().required('Required'),
//   password: Yup.string().required('Required')
//   ,
// });
// // const { loggedIn, setLoggedIn } = useContext(LoginContext);

// class Login extends Component {
//     onSubmit = async (values, { setFieldError }) => {
//         console.log('Form data', values);
//         try {

//             const response = await axios.post('http://localhost:8080/auth', values);
//             console.log(response)
//             // setLoggedIn(true);
//             // console.log(loggedIn)
//             this.props.history.push('/');

            
//             // Do something with the response
//             } catch (error) {
//               console.log(error.response.data)

//               if (error.response.data.includes("Invalid Password")) {
//                 setFieldError("password", "Invalid password.");
//               }

//               else if (error.response.data.includes("Invalid Password")) {
//                 setFieldError("password", "Invalid password.");
//               }

//               else{
//                 setFieldError("password", "Invalid Password or Username.");
//               }
//             }
//         };
//     render() {
//         return (
//           <div className="auth-form-container">
//             <h2>Login</h2>
//             <Formik 
//             initialValues={initialValues}
//             validationSchema={validationSchema}

//             onSubmit={this.onSubmit}

//             className="formik-form"
//             >
//             <Form >
//               <div className="form-control">
//                 <label htmlFor="username">Username</label>
//                 <Field type="username" id="username" name="username"  placeholder="Username"/>
//                 <ErrorMessage name="username" component="div" className="error"/>
//               </div>
//               <div className="form-control">
//                 <label htmlFor="password">Password</label>
//                 <Field type="password" id="password" name="password" placeholder="********" />
//                 <ErrorMessage name="password" component="div" className="error-password"/>
//               </div>
//               <button  type="submit">Submit</button>
//             </Form>
//           </Formik>
//           <button className="link-btn" onClick={() => this.props.onFormSwitch('register')}>Don't have an account? Register here.</button>
//           </div>
//         );
//       }
//     } 
// export default withRouter(Login)


// import React, { useContext } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import { LoginContext } from '../context_state/login_state';
// import { useHistory } from 'react-router-dom';

// const initialValues = {
//   username: '',
//   password: ''
// };

// const validationSchema = Yup.object({
//   username: Yup.string().required('Required'),
//   password: Yup.string().required('Required')
// });

// const Login = ({ onFormSwitch }) => {
//   const history = useHistory();
//   const { loggedIn, setLoggedIn } = useContext(LoginContext);
//   const onSubmit = async (values, { setFieldError }) => {
//     console.log('Form data', values);
//     try {
//       const response = await axios.post('http://localhost:8080/auth', values);
//       setLoggedIn(true);
//       history.push('/');
//       // console.log(response);
//       // setLoggedIn(true);
//       // console.log(loggedIn);
//       // history.push('/');
//     } catch (error) {
//       // console.log(error.response.data);
//       console.log(error)
//       if (error.response.data.includes('Invalid Password')) {
//         setFieldError('password', 'Invalid password.');
//       } else {
//         setFieldError('password', 'Invalid Password or Username.');
//       }
//     }
//   };

//   const handleFormSwitch = () => {
//     onFormSwitch('CodeEvolutionForm');
//   };

//   return (
//     <div className="auth-form-container">
//       <h2>Login</h2>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={onSubmit}
//         className="formik-form"
//       >
//         <Form>
//           <div className="form-control">
//             <label htmlFor="username">Username</label>
//             <Field type="username" id="username" name="username" placeholder="Username" />
//             <ErrorMessage name="username" component="div" className="error" />
//           </div>
//           <div className="form-control">
//             <label htmlFor="password">Password</label>
//             <Field type="password" id="password" name="password" placeholder="********" />
//             <ErrorMessage name="password" component="div" className="error-password" />
//           </div>
//           <button type="submit">Submit</button>
//         </Form>
//       </Formik>
//       <button className="link-btn" onClick={handleFormSwitch}>
//         Don't have an account? Register here.
//       </button>
//     </div>
//   );
// };

// export default Login;

// useEffect (() => {
//   console.log(loggedIn); I
//   });


import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { LoginContext } from '../../App';
import { useHistory } from 'react-router-dom';



const initialValues = {
  username: '',
  password: ''
};

const validationSchema = Yup.object({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required')
});

const Login = ({ onFormSwitch }) => {
  const history = useHistory();
  // const {loggedIn, setLoggedIn} = useContext(LoginContext);
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const onSubmit = async (values, { setFieldError }) => {
    console.log('Form data', values);
    try {
      const response = await axios.post('http://localhost:8080/auth', values);
      setLoggedIn(true);
      // console.log(loggedIn)
      history.push('/');
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.includes('Invalid Password')) {
        setFieldError('password', 'Invalid password.');
      } else {
        setFieldError('password', 'Invalid Password or Username.');
      }
    }
  };

  // useEffect(() => {
  //   console.log(loggedIn); // Access the updated loggedIn value here
  // }, [loggedIn]);

  const handleFormSwitch = () => {
    onFormSwitch('CodeEvolutionForm');
  };
  

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        className="formik-form"
      >
        <Form>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <Field type="text" id="username" name="username" placeholder="Username" />
            <ErrorMessage name="username" component="div" className="error" />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" placeholder="********" />
            <ErrorMessage name="password" component="div" className="error-password" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <button className="link-btn" onClick={handleFormSwitch}>
        Don't have an account? Register here.
      </button>
    </div>
  );
};

export default Login;