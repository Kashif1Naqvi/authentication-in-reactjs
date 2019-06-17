import React,{Component} from 'react'
import {Redirect,withRouter } from 'react-router-dom'
import UserList from '../Users/UserList'
class Dashboard extends Component{
    constructor(props){
        super(props)
        let loggedIn = true
        let token = localStorage.getItem('token')
        if(token == null){
            loggedIn = false
        }
        this.state = { 
                        users:[],
                        loggedIn 
                }
        this.logout = this.logout.bind(this)
    }
    logout = () => {
        localStorage.removeItem('token')
        this.props.history.push('/signin')
        
    }
    async componentDidMount(){
            let res = await fetch('https://reqres.in/api/users')
            const data = await res.json()
            this.setState({
                users : data.data
            })
    }
    render(){
        if(this.state.loggedIn === false){
            return <Redirect to="/signin" />
        }
        const userList = this.state.users.map((user)=>{return <UserList user={user}  key={user.id} />})
        return(
            <div className="container" >
                <div className="section">
                    <button className="btn btn-success float-right mt-3 pt-2 " onClick={this.logout}  >Logout</button>
                    <h1 className=" text-muted " >Users</h1> <br />
                    <div className="row">{userList}</div> <br />
                </div>
            </div>
        )

    }
}
export default withRouter(Dashboard)