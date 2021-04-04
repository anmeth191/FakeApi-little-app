import React from 'react';


class HeaderComponent extends React.Component{



    
    render(){

     return(

        <div className="headerMain">
            <nav className="navbarHeader">
              <div className="navbarHeader-logo"> 
              <span className="navbarHeader-logo--content"> FAKE API APP</span>
              </div>

              <ul className="navbarHeader-listU">
                  <li className="navbarHeader-listU--item"><a href="/post" className="navbarHeader-listU--item-link">Post</a></li>
                  <li className="navbarHeader-listU--item"><a href="#" className="navbarHeader-listU--item-link">Comments</a></li>
                  <li className="navbarHeader-listU--item"><a href="#" className="navbarHeader-listU--item-link">Albums</a></li>
                  <li className="navbarHeader-listU--item"><a href="#" className="navbarHeader-listU--item-link">Photos</a></li>
                  <li className="navbarHeader-listU--item"><a href="#" className="navbarHeader-listU--item-link">Todos</a></li>
                  <li className="navbarHeader-listU--item"><a href="#" className="navbarHeader-listU--item-link">Users</a></li>


              </ul>
            </nav>
        </div>

     )//end of the return
    }//end of the render method
}//end of class component 


export default HeaderComponent;