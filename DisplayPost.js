import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import HeaderComponent from '../Header';



class DisplayPost extends React.Component{
 state = {posts:[] , post:''}





componentDidMount(){
    const idPost = this.props.match.params.post;
    this.setState({post:idPost} , ()=>{return this.state.post})
//set the post request reqeut to state posts
    this.postRequest().then(response => { this.setState({posts:response.data} ,()=>{return this.state.posts})}).catch(err => {
        return <h1>{err}</h1>
    })
}

postRequest = async ()=>{

    const postRequest = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return postRequest;

}


render(){
    console.log(this.props.match.params.post)
    return(  
        
        <div> <HeaderComponent /> 
        {  
            this.state.posts.map( element => {
               
             if(element.userId == this.props.match.params.post){  
              return ([<div className="postContainer">
                  <div className="postContainer-card">
                  <div className="postContainer-card-title"><h1 className="postContainer-card-title-header">{element.title} </h1></div>
                  <div className="postContainer-card-body"><span className="postContainer-card-body-span">{element.body}</span></div> 
                 </div>
                 </div> 
              ])//end of the return
            }//end of the if
            })//end of the map
            }
            </div>
    )//end of the return
}//end of the render 

}


export default withRouter(DisplayPost);