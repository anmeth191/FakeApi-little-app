import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';



class DisplayPost extends React.Component{
   state = {posts:[]  , user:null}

    postsUser = async ()=>{

        
        const requestPost = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        return requestPost;
    }

componentWillMount(){
  
    this.postsUser().then(response => { return this.setState({posts:response.data})}).catch(err =>{ return `You have error: ${err}`})
    const { post } = this.props.match.params; 
    this.setState({user:post} , ()=> {
     return this.state.user;
    });
    
    
  
}

render(){

   
    return(
        <div>{console.log(this.state.user)}
            {this.state.posts.map( post => {
              if(post.userId == this.state.user) {
                   return(
                       <div>
                       <h3>{post.title}</h3>
                       <h5>{post.body}</h5>
                       </div>
                       
                   )

              }//end of the if
        
        })}</div>
    )
}


}


export default withRouter(DisplayPost);