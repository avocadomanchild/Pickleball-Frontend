import React,{createContext, useContext, useState} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import CodeEvolutionForm from './components/pages/CodeEvolutionForm'; 


// import { LoginContext } from './components/context_state/login_state';
// import { LoginProvider } from './components/context_state/login_state'
// import { createContext } from 'react';


export const LoginContext = createContext(); 
function App() {
  const[loggedIn,setLoggedin] = useState(false)
  // const[loggedIn,setLoggedin] = useState(false)
  return (
    <LoginContext.Provider value={[loggedIn,setLoggedin]}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/codeEvo' component={CodeEvolutionForm} />
        </Switch>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
