import React,{Component} from 'react'
import {withRouter , Link} from 'react-router-dom'

class SignIn extends Component{
    constructor(props){
        super(props)
        this.state = {
            email:"",
            password:"", 
            error : null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange (evt) { 
      this.setState({ [evt.target.name]: evt.target.value });
    }
    
     handleSubmit = async (event) =>  {
        event.preventDefault()
        
        let formData = {
          email: this.state.email,
          password: this.state.password
        } 

        let res = await  fetch('https://reqres.in/api/login',{
            method:'POST',
            headers:{
                "Accept": "application/json",
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        })

        let data = await res.json() 
        console.log(data.token)
        if( res.status === 200 ){ 
          localStorage.setItem('token', JSON.stringify(data.token))
          this.props.history.push('/dashboard')
        }else{
            this.setState({
                error : data.error
            })
        }
    }

    render(){ 
        return(

            <form onSubmit={this.handleSubmit} className="form form-horizontal " >
                <h1 className="text-muted" >Sign In</h1>
                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input type="text"  onChange={this.handleChange}  name="email"  className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input type="text"  name="password" onChange={this.handleChange}  className="form-control"/>
                </div>
                {this.state.error?<p className="alert alert-danger" >{this.state.error}</p>:""}
                <input type="submit" value="Login" className="btn btn-success" />
                <div>Don't have a account? <Link  to="/signup" >SignUp now</Link> </div>
            </form>
        )
    }
}
export default withRouter(SignIn);