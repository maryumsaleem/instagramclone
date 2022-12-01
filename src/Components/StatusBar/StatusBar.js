import React, { Component } from 'react';
import './StatusBar.css';
import { Avatar} from '@mui/material';

import pp1 from "../NavBar/images/pp1.png";

export default class StatusBar extends Component {
    constructor(props){
        super(props);
    this.state={
        //array
statusList:[]
    }
    }
    //calling getData function
    componentDidMount(){
        this.getData();
    }
    //dummy json data
    getData=()=>{
let data=[
    {
        "username":"Andrew_J",
        "imageURL":"../../images/pp1.png"
    },
    {
        "username":"Tom_22",
        "imageURL":"../../images/pp1.png"
    },

    {
        "username":"KLARK_J",
        "imageURL":"../../images/pp1.png"
    },
    {
        "username":"harry_76",
        "imageURL":"../../images/pp1.png"
    },
    {
        "username":"henry_76",
        "imageURL":"../../images/pp1.png"
    },
    {
        "username":"Nick_76",
        "imageURL":"../../images/pp1.png"
    },
    {
        "username":"kim_76",
        "imageURL":"../../images/pp1.png"
    },
    {
        "username":"Ben_76",
        "imageURL":"../../images/pp1.png"
    },

]
this.setState({statusList:data});
    }

  render() {
    return (
        <div>    
      <div className="statusbar_container">
        {
            this.state.statusList.map((item,index)=>(
<div className="status" key={index}>
    <Avatar  className="statusbar_status" src={pp1} alt="p"/>
    <div className="statusbar_text">{item.username}</div>
    </div>
    
            ))
        }
  
      </div>
      </div>
    );
  }
}
