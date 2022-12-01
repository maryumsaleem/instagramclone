import React, { Component } from 'react';
//import PropTypes from 'prop-types'
import './Post.css';
//import post from '../NavBar/images/post.jpg';
import love from '../NavBar/images/love.svg';
import comment from '../NavBar/images/comment.svg';
import share from '../NavBar/images/share.svg';
import { Avatar } from '@mui/material';

export default class Post extends Component {
    constructor(props){
    super(props);
    this.state={ }
        }

  render() {
    return (
      <div className='post_Container'>
        {/* header */}
        <div className="post_header">
<Avatar className="post_image" src={this.state.post_}/>
    <div className="post _username">{this.state.userName&& this.state.userName}</div>
        </div>
        {/* image */}
        <div>
            <img src="https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg" alt="insta-post" style={{"width":"500px","height":"500px"}}/>
        </div>
        {/* analytics */}
        <br/>
        <div>
            <div style={{"marginLeft":"10px"}}>
            <img src={love} className="post_reactimage"alt="insta-post"/>
            <img src={comment} className="post_reactimage" alt="insta-post"/>
            <img src={share} className="post_reactimage"alt="insta-post"/>
            </div>
        </div>
<div style={{"fontWeight":"bold","marginLeft":"20px"}}>{this.state.likes} likes</div>


        <div >
<div className='post_comment'></div>
<div className='post_comment'></div>
<div className='post_comment'></div>
<input text="text"className='post_commentbox' placeholder="Add a comment.."></input>

</div>
        
      </div>
    )
  }
}
