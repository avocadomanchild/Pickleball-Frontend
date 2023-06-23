import React,{createContext, useContext, useState,useEffect} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import CodeEvolutionForm from './components/pages/CodeEvolutionForm'; 
import UserProfilePage from './components/pages/UserProfile';
import InlineFormExample from './components/pages/Inlineform';


export const LoginContext = createContext(); 
function App() {
  // const[loggedIn,setLoggedin] = useState(false)
  const[loggedIn,setLoggedin] = useState(localStorage.access ? true : false )
  useEffect(() => {
    console.log(localStorage.access);
    console.log(loggedIn); 
  }, []);
 
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
          {/* <Route path= '/profile' component={UserProfilePage} /> */}
          <Route path = '/inline' component={InlineFormExample} />
        </Switch>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
