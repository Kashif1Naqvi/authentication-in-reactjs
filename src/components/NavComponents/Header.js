import React,{ Component } from "react";
import {Link} from 'react-router-dom'
class Header extends Component{
    render(){
        return(
            <div className="nav">
                <Link className="nav-itme nav-link " to="/" >Home</Link>
                <Link className="nav-itme nav-link " to="/signin" >Sign in</Link>
                <Link className="nav-itme nav-link " to="/signup" >Sign up</Link>
            </div>
        )
    }
}
export default Header