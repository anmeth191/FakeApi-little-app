import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import axios from 'axios';
import HeaderComponent from './Header';
import UsersApi from './components/Users';
import DisplayUser from './components/DisplayUser';
import DisplayPost from './components/DisplayPost';




class MainComponent extends React.Component{

    render(){

       
        return(
            <Router>
            <div>
                <HeaderComponent />

               
             
                <Route exact path="/users" component={UsersApi}/>
                <Route path="/users/name/:id"><DisplayUser /></Route>
                <Route path="/users/name/posts/:post"> <DisplayPost /> </Route>
          
            </div>
            </Router>
        )
    }

}

ReactDOM.render(
<MainComponent />,
document.querySelector('#root')
)



