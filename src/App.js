import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import register from './utlis/register2'
import CodeEvolutionForm from './components/pages/CodeEvolutionForm';
// import register from './components/Pages2/register2';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
