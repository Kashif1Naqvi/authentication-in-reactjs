import React,{Component} from 'react'
import { withRouter,Link  } from 'react-router-dom'

class SignUp extends Component{
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:"",
            error:""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChnage =this.handleChnage.bind(this)
    }
    
    handleChnage = (e) => {
        const name  =e.target.name
        const value = e.target.value
        this.setState({
            [name]:value
        })
    }
    
    handleSubmit = async (e) => {
        e.preventDefault()
        const email = this.state.email
        const password = this.state.password
        let res = await fetch('https://reqres.in/api/register',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email,
                password
            })
        })
        const data = await res.json()
        if(res.status === 200){
            this.props.history.push('/dashboard')
        }else{
            this.setState({
                error: data.error
            })
        }

    }
    render(){
        return(
            <form onSubmit={this.handleSubmit} className="form form-horizontal " >
                <h1 className="text-muted" >Sign Up</h1>
                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input type="text" name="email" onChange={this.handleChnage} className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input type="text" name="password" onChange={this.handleChnage} className="form-control"/>
                </div>
                {!this.state.error ? "": <p className="alert alert-danger">{this.state.error}</p>}
                <input type="submit" value="Sign up" className="btn btn-success" />
                <div><p>You have already Account ? <Link to="/signin" >SignIn now</Link> </p> </div>
            </form>
        )
    }
}
export default withRouter(SignUp)