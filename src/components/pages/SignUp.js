import '../../App.css';
import React, { useState } from "react";
import './../SignUp.css';
import Login from './Login';
// import { Register } from "./Register";
import  CodeEvolutionForm from './CodeEvolutionForm';
import PostForm from './Postform';

function SignUp() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="SignUp">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <CodeEvolutionForm  onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default SignUp;