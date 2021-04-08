import React from 'react';
import axios from 'axios';
import HeaderComponent from '../Header';

import { Link } from 'react-router-dom';

class UsersApi extends React.Component{

state={users:[]}

requestUsersApi = async ()=>{
const requestUsers = await axios.get('https://jsonplaceholder.typicode.com/users').then(response =>{return response.data});
return requestUsers;
}

componentWillMount(){
this.requestUsersApi().then(response =>{this.setState({users:response})}).catch(err =>{console.log(err)})
}//end of the component will mount

render(){

   return( 
  
        
        <div>
             <HeaderComponent />
        {this.state.users.map(user => {
               return  <ul><li><Link to={`/users/name/${user.id}`}>{user.name}</Link></li></ul>     
        })}
         </div>
  

    )
  

}//end of the render method
}//end of the class

export default UsersApi;