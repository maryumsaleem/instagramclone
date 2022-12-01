import React from "react";
//import PropTypes from 'prop-types'
import "../LoginPage/LoginPage.css";
import {Link} from 'react-router-dom';

function SignIn() {
  return (
    <>
      <input
        className="loginpage_text"
        type="text"
        placeholder="Phone number, username or email"
        required
      />
      <input
        className="loginpage_text"
        type="password"
        placeholder="Password"
        required
      />

     <Link to="/home"><button className="login_button" >Log in</button></Link> 
    </>
  );
}

// SignIn.propTypes = {

// }

export default SignIn;
