
import React, { useState } from "react";
import { NavLink } from "react-router-dom";


function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
<div className="login-form p-1 ">
      <div className="navbar-brand mb-0 h1 bg-primary text-white ">Log in page</div>
        <div className="title">Log In</div>
        <label><p>Hint:usename:"<strong>user1</strong>" & password:"<strong>pass1</strong>" </p></label>
      

      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
        
      </div>

      
    </div>
  );

  return (
    <div className="app">
         
        
        {isSubmitted ? <NavLink to='/dashboard' className="nav-link" href="#">
                   <h1> Click here to Employee record page</h1>
                  </NavLink> : renderForm}
      
    </div>
  );
}

export default Login;
