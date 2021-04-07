import React from 'react';
import {Link} from 'react-router-dom';


class HeaderComponent extends React.Component{



    
    render(){

     return(

        <div className="headerMain">
            <nav className="navbarHeader">
              <div className="navbarHeader-logo"> 
              <span className="navbarHeader-logo--content"> FAKE API APP</span>
              </div>

              <ul className="navbarHeader-listU">
                  <li className="navbarHeader-listU--item"><Link to="Post" className="navbarHeader-listU--item-link">Post</Link></li>
                  <li className="navbarHeader-listU--item"><Link to="Comments" className="navbarHeader-listU--item-link">Comments</Link></li>
                  <li className="navbarHeader-listU--item"><Link to="Albums" className="navbarHeader-listU--item-link">Albums</Link></li>
                  <li className="navbarHeader-listU--item"><Link to="Photos" className="navbarHeader-listU--item-link">Photos</Link></li>
                  <li className="navbarHeader-listU--item"><Link to="/Todos" className="navbarHeader-listU--item-link">Todos</Link></li>
                  <li className="navbarHeader-listU--item"><Link to="/users" className="navbarHeader-listU--item-link">Users</Link></li>


              </ul>
            </nav>
        </div>

     )//end of the return
    }//end of the render method
}//end of class component 


export default HeaderComponent;