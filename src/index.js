import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import HeaderComponent from './Header';

class MainComponent extends React.Component{

    state={users: []}

usersRequest(){

 axios.get('https://jsonplaceholder.typicode.com/users').then(response => 
 {this.setState({users:response.data})}).catch((error) =>{console.log(error)})
    
}

   
render(){    
 this.usersRequest();
    return(  
            <div className="mainContainer">
                {<HeaderComponent />}
           {   
               this.state.users.map((user) => {return <div className="mainContainer-user">
               <ul className="mainContainer-user--ul"><li className="mainContainer-user--ul-li">{user.name}</li></ul></div>})
           } 
       </div>//end of the main container
  )//end of the return
}//end of the render method
}//end of the class component


ReactDOM.render(
<MainComponent />,
document.querySelector('#root')
)



