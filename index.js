import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import HeaderComponent from './Header';




class MainComponent extends React.Component{

    state={users: [], message: null}

 usersRequest = async () =>{

    const userRequest = await  axios.get('https://jsonplaceholder.typicode.com/users');
    return this.setState({users:userRequest.data});

 }

 callServerMessage(){
   const callServer = async ()=>{

        const responseServer =  await axios.get('/post');
        return responseServer.data;
        
    }  

    callServer().then(response => {this.setState({message:response})})
 }//end of the request to the server

 componentWillMount(){
  // this.usersRequest();
   this.callServerMessage();

 }



   
render(){    
 
 //this.componentWillMount();
    return(  
            <div className="mainContainer">
                {<HeaderComponent />}
           {   
              this.state.users.map(user => {
                  return <h5>{`Name: ${user.name}`}</h5>
              })//end of the map
           } {
               console.log(this.state.message)
           }
       </div>//end of the main container
  )//end of the return
}//end of the render method
}//end of the class component


ReactDOM.render(
<MainComponent />,
document.querySelector('#root')
)



