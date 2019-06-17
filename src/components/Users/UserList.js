import React, { Component } from 'react'

class UserList extends Component {
    render() {
        const {email,first_name,last_name,avatar} = this.props.user
        console.log(this.props.user)
        return (
            <div className="col col-sm-4 col-lg-4 col-md-4">
                 <figure className="image" >
                    <img src={avatar} alt={`Hello i'm ${first_name} ${` `}${last_name}`}  />
                </figure>
                <b className="text-muted">Email</b><p className="text-muted">{email}</p>
                <b className="text-muted">Name</b><p className="text-muted">{first_name}{` `}{last_name}</p>
            </div>
        )
    }
}
export default UserList