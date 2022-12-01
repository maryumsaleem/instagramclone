import React from 'react'
//import PropTypes from 'prop-types'

function SignUp(props) {
  return (
    <>
    <input
        className="loginpage_text"
        type="text"
        placeholder="Mobile Number or Email"
        required
      />
      <input
        className="loginpage_text"
        type="text"
        placeholder="Full Name"
        required
      />
      <input
        className="loginpage_text"
        type="text"
        placeholder="Username"
        required
      />
      <input
        className="loginpage_text"
        type="password"
        placeholder="Password"
        required
      />

      <button className="login_button">Log in</button>
    </>
  )
}

SignUp.propTypes = {

}

export default SignUp

