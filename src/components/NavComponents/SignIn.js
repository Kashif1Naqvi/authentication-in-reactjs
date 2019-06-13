import React,{Component} from 'react'
import {withRouter,Redirect} from 'react-router-dom'
class SignIn extends Component{
    constructor(props){
        super(props)
        let token = localStorage.getItem('token')
        let loggedin = true
        
        if(token == null){
            loggedin = false
        }

        this.state = {
            email:"",
            password:"",
            loggedin,
            error : null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange=(e)=>{
        const value = e.target.value
        const name = e.target.name
        this.setState({
            [name] : value,
        })
    }

     handleSubmit = async (event) =>  {
        event.preventDefault()
        const email = this.state.email
        const password = this.state.password
        let res = await  fetch('https://reqres.in/api/login',{
            method:'POST',
            headers:{
                "Accept": "application/json",
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email,
                password
            })
        })
        let data = await res.json()
        if( res.status === 200 ){
         let token = data.token
          localStorage.setItem('token',JSON.stringify(token))
          this.props.history.push('/dashboard')
        }else{
            this.setState({
                error : data.error
            })
        }
    }

    render(){
        if(this.state.loggedin){
            return <Redirect to="/dashboard" />
        }
        return(

            <form onSubmit={this.handleSubmit} className="form form-horizontal " >
                <h1>Sign In</h1>
                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input type="text"  onChange={this.handleChange}  name="email"  className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input type="text"  name="password" onChange={this.handleChange}  className="form-control"/>
                </div>
                <p className="alert-danger" >{this.state.error}</p>
                <input type="submit" value="Login" className="btn btn-primary" />
            </form>
        )
    }
}
export default withRouter(SignIn);