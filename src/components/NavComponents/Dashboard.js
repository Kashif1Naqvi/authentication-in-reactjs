import React,{Component} from 'react'
import {Redirect,withRouter } from 'react-router-dom'
class Dashboard extends Component{
    constructor(props){
        super(props)
        let loggedIn = true
        let token = localStorage.getItem('token')
        if(token == null){
            loggedIn = false
        }
        this.state = { loggedIn }
        this.logout = this.logout.bind(this)
    }
    logout = () => {
        localStorage.removeItem('token')
        this.props.history.push('/signin')
        
    }
    render(){
        if(this.state.loggedIn === false){
            return <Redirect to="/signin" />
        }
        return(
            <div className="content" >
                <h1>This page can be only for authenticated users</h1> <br />
                 <button className="btn btn-primary" onClick={this.logout}  >Logout</button>
            </div>
        )
    }
}
export default withRouter(Dashboard)