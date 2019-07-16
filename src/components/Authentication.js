import React,{Component} from 'react'
import {BrowserRouter as Router ,Route , Redirect } from 'react-router-dom'
import SignIn from './NavComponents/SignIn';
import Dashboard from './NavComponents/Dashboard';
import Home from './NavComponents/Home';
import SignUp from './NavComponents/SignUp';
class Authentication extends Component{
    render(){
        return(
            <Router>
              <div className="container-fluid" >
                <Route exact path="/" component={Home} />
                <Route path="/dashboard" component={() => localStorage.token == null ? <Redirect to="/" /> : <Dashboard /> } />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
              </div>
            </Router>
        )
    }
}
export default Authentication