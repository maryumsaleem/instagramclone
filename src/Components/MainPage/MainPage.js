import React, { Component } from 'react';
import "./MainPage.css";
import Post from '../Post/Post';
import upload1 from "../NavBar/images/upload1.png";

export default class MainPage extends Component {
  constructor(props){
    super(props);
    this.state={ postArray:[]}
    
        }
        componentDidMount(){
          this.getPost();
        }

        getPost=()=>{ //API
          //const thisContext=this;
          let data=[
              {
                  "postId":"123456",
                  "userName":"anindya",
                  "postImageURL":"https://irixlens.com/new/wp-content/uploads/2018/11/IRX_5473.jpg",
                  "timeStamp":"12345",
                  "likes":"1234"
              }

            ];
            this.setState({postArray:data});
          }
  render() {
    return (
      <div >
        <div style={{"textAlign":"center","margin":"10px"}}>
          <img  className='main_upload' alt="upload-icon" src={upload1}/>
        </div>
        {
          this.state.postArray.map((item,index)=>(
            <Post key={index} id={item.postId} userName={item.userName} postImage={item.postImageURL} likes={item.likes}/>
          ))
        }
        
      </div>
    )
  }
}
