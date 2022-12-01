import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import './NavBar.css';
import { Grid } from '@mui/material';
import instagram_logo from "../LoginPage/Instagram_logo.png";
import home from "./images/home.svg";
import message from "./images/message.svg";
import find from "./images/find.svg";
import love from "./images/love.svg";

import pp1 from "./images/pp1.png";
import {Avatar} from '@mui/material';
export default class NavBar extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
            }

  render() {
    return (
      <div>
        <div className='navbar_barContent'>
            <Grid container>
                <Grid item xs={2}>
                    
                </Grid>
                <Grid item xs={3}>
                    <img
                    className="navbar_logo"
                    src={instagram_logo}
                    alt="instagram logo"
                  />
                </Grid>
                <Grid item xs={3}>
                    <input className="navbar_searchBar"type="text" placeholder='Search'/>

                </Grid>
                <Grid item xs={3} style={{"display":"flex"}}>
                    <img className="navbar_img" src={home} alt="home-icon" width="25px"/>
                    <img className="navbar_img" src={message} alt="message-icon" width="25px"/>
                    <img className="navbar_img" src={find} alt="search-icon" width="25px"/>
                    <img className="navbar_img" src={love} alt="like-icon" width="25px"/>
                    <Avatar alt="p" src={pp1} style={{"maxWidth":"25px","maxHeight":"25px", "margin":"15px 10px"}}/>
                </Grid>
                {/* <Grid item xs={1}></Grid> */}
            </Grid>
        </div>
      </div>
    )
  }
}
