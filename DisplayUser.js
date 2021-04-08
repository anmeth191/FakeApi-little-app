import React from 'react';
import { withRouter , Link } from 'react-router-dom';
import axios from 'axios';
import HeaderComponent from '../Header';

/*
const DisplayUsers = ()=>{
    const { id } = useParams();
    return id;
}
*/

class DisplayUser extends React.Component{

    state = {user:[]}

displayUsers = async ()=>{
const id  = this.props.match.params.id;
const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
return userResponse;
}    

componentDidMount(){
this.displayUsers().then(response =>{ this.setState({user:response.data})}).catch(err => {console.log(err)});
}

render(){

    return(
        <div>
            <HeaderComponent />
            <h5>{this.state.user.name}</h5>
            <h5>{this.state.user.username}</h5>
            <h5>{this.state.user.email}</h5>
            <h5>{this.state.user.phone}</h5>
            <Link to={`/users/name/posts/${this.state.user.id}`}>Watch Posts</Link>
        </div>
    )
}


}

export default withRouter(DisplayUser);