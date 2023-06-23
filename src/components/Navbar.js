import React, { useState, useEffect, useContext } from 'react';
import { Button } from './Button';
import { Link,useHistory } from 'react-router-dom';
import './Navbar.css';
import { LoginContext } from '../App';


function Navbar() {
  // const loggedIn = useContext(LoginContext)
  const [loggedIn] = useContext(LoginContext);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const history = useHistory();
  // const [loggedIn, setLoggedIn] = useState(false); 

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  useEffect (() => {
  console.log(loggedIn); 
  });

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            PICKLE
            <span class="material-symbols-outlined">sports_tennis</span>
            {/* <FontAwesomeIcon icon={ } ></FontAwesomeIcon> */}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/inline' className='nav-links' onClick={closeMobileMenu}>
                Profile 
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Ladder
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Leagues
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Tournaments
              </Link>
            </li>   
          </ul>  
   
          {button && <Button buttonStyle='btn--outline'>{loggedIn ? 'LOGOUT' : 'SIGN UP'}</Button>}
          {/* {button && <Button buttonStyle='btn--outline'>{loggedIn ? 'SIGN UP' : 'LOGOUT'}</Button>} */}
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
