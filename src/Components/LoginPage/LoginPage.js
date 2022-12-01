import React, { Component } from "react";
//import PropTypes from "prop-types";
//using material ui
import Grid from "@mui/material/Grid";
//import image_login from "./image_login.gif";
import instagram_logo from "./Instagram_logo.png";
import "./LoginPage.css";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

export default class LoginPage extends Component {
    constructor(props){
super(props)
this.state={
    //isLogin: defines whether the login page is true or not,so i set it to true by default
    isLogin:true,
}
    }
    //function for signin and sign up onClick listener event
    //if the state propert of is true change it to false otherwise true
    changeLogin=()=>{

        if(this.state.isLogin)
        this.setState({isLogin:false});
        else
        this.setState({isLogin:true});

    }

  render() {
    return (
      <div>
        <Grid container>
          {/* xs=extra small that is a break point. */}
          {/* grid child 1 */}
          
          <Grid item xs={3}>
            <div className="loginpage_main">
             
              <div>
                <div className="loginpage_rightcomponent">
                  <img
                    className="loginpage_logo"
                    src={instagram_logo}
                    alt="instagram logo"
                  />
                  <div className="loginPage_signin">

                    {/* rendering logic below if islogin property is true it will put sign in otherwise signupcomponent*/}
                    {
                        this.state.isLogin?<SignIn/>:<SignUp/>
                    }

        
                    <div className="login_ordiv">
                        <div className="login_dividor"></div>
                        <div className="login_or">OR</div>
                        <div className="login_dividor"></div>
                        
                    </div>

                  </div>
                </div>
                
                  
                <div className="loginpage_signupoption">
                    {/* if the state property of isLogin is true then login panel is open and we have to give signup option */}
                    {
this.state.isLogin?<div className=".loginpage_signup">
Don't have an account?<span onClick={this.changeLogin} style={{"fontWeight":"bold","color":"#0395F6"}}> Sign up</span>
</div>:<div className="loginpage_signin">
                    have an account?<span onClick={this.changeLogin} style={{"fontWeight":"bold","color":"#0395F6"}}>Sign in</span>
                    </div>
                    }
                
                
              </div>

              </div>
              
            </div>
          </Grid>
          
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    );
  }
}
