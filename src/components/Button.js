// import React from 'react';
// import './Button.css';
// import { Link } from 'react-router-dom';

// export function Button() {
//   return (
//     <Link to='sign-up'>
//       <button className='btn'>Sign Up</button>
//     </Link>
//   );
// }
// import React, { useContext } from 'react';
// import './Button.css';
// import { Link } from 'react-router-dom';
// import { LoginContext } from '../App';

// const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

// const SIZES = ['btn--medium', 'btn--large'];

// const [loggedIn, setLoggedIn] = useContext(LoginContext);

// export const Button = ({
//   children,
//   type,
//   onClick,
//   buttonStyle,
//   buttonSize
// }) => {
//   const checkButtonStyle = STYLES.includes(buttonStyle)
//     ? buttonStyle
//     : STYLES[0];

//   const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
//   // const destination = children === 'LOGOUT' ? '/' : '/sign-up';

//   return ( 
//     // <Link to={destination} className='btn-mobile'>
//     loggedIn ?
//     <Link 
//       to='/logout' className='btn-mobile'>
//       <button
//         className={`btn ${checkButtonStyle} ${checkButtonSize}`}
//         onClick={onClick}
//         type={type}
//       >
//         {children}
//       </button>
//     </Link>
//     :
//     <Link 
//     to='/sign-up' className='btn-mobile'>
//     <button
//       className={`btn ${checkButtonStyle} ${checkButtonSize}`}
//       onClick={onClick}
//       type={type}
//     >
//       {children}
//     </button>
//   </Link>
//   );
// };

// import React, { useContext,useEffect } from 'react';
// import './Button.css';
// import { Link } from 'react-router-dom';
// import { LoginContext } from '../App';

// const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

// const SIZES = ['btn--medium', 'btn--large'];

// export const Button = ({
//   children,
//   type,
//   onClick,
//   buttonStyle,
//   buttonSize
// }) => {
//   const checkButtonStyle = STYLES.includes(buttonStyle)
//     ? buttonStyle
//     : STYLES[0];

//   const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

//   const [loggedIn, setLoggedIn] = useContext(LoginContext);

//   const handleLogout = () => {
//     // Clear local storage here
//     localStorage.clear();
//     // Update the loggedIn state
//     setLoggedIn(false);
//   };
  
//   useEffect (() => {
//     console.log(loggedIn); 
//     });

//   const destination = loggedIn ? '/' : '/sign-up';

//   return (
//     <Link to={destination} className='btn-mobile'>
//       <button
//         className={`btn ${checkButtonStyle} ${checkButtonSize}`}
//         onClick={onClick === 'LOGOUT' ? handleLogout : onClick}
//         type={type}
//       >
//         {children}
//       </button>
//     </Link>
//   );
// };

import React, { useContext, useState } from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import { LoginContext } from '../App';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  const handleLogout = () => {
    // Clear local storage here
    localStorage.clear();
    // Update the loggedIn state
    setLoggedIn(false);
  };

  const destination = loggedIn ? '/' : '/sign-up';

  return ( 
    <Link to={destination} className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={loggedIn ? handleLogout : onClick}
        // onClick={onClick === 'LOGOUT' ? handleLogout : onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
