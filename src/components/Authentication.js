import React,{Component} from 'react'
import {BrowserRouter as Router ,Route } from 'react-router-dom'
import SignIn from './NavComponents/SignIn';
import Dashboard from './NavComponents/Dashboard';
import Home from './NavComponents/Home';
import SignUp from './NavComponents/SignUp';
import Logout from './NavComponents/Logout';

class Authentication extends Component{
    render(){
        return(
            <Router>
                <div className="container" >
                        <Route exact path="/" component={render=><Home /> } />
                        <Route path="/dashboard" component={ render=><Dashboard />} />
                        <Route path="/signin" component={ render => <SignIn />} />
                        <Route path="/signup" component={ render=> <SignUp /> } />
                        <Route path="/logout" component={render=><Logout  />} />
                        
                </div>
            </Router>
        )
    }
}
export default Authentication