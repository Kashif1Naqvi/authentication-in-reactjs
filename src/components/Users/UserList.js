import React, {Component } from 'react'

class UserList extends Component {
    render() {
        const {gender,name,location,email,phone,cell,dob,nat,picture} = this.props.user
        return (
            <div className="col col-sm-2 col-lg-3 col-xg-4 col-md-2">
                <div className="card">
                    <img className="card-img-top img-thumbnail rounded " src={picture.large} alt={picture.thumbnail}/>
                    <div className="card-body">
                        <div className="card-title">
                            <p className="card-text text-center text-muted p-2 m-2" >Name:<b>{name.title} {`  `} {name.first} {`  `} {name.last} </b></p>
                        </div>
                        <p className="text-muted text-center" >street: <b>{location.street}</b> </p>
                        <p className="text-muted text-center" >city: <b>{location.city}</b> </p>
                        <p className="text-muted text-center" >state: <b>{location.state}</b> </p>
                        <p className="text-muted text-center" >cell: <b>{cell}</b> </p>
                        <p className="text-muted text-center" >phone: <b>{phone}</b> </p>
                        <p className="text-muted text-center" >latitude: <b>{location.coordinates.latitude}</b> </p>
                        <p className="text-muted text-center" >longitude: <b>{location.coordinates.longitude}</b> </p>
                        <p className="text-muted text-center" >Gender:<b>{gender}</b></p>
                        <p className="text-muted text-center">Date of Birth: <b> {dob.date}</b></p>
                        <p className="text-muted text-center" >Age:<b>{dob.age}</b></p>
                        <p className="text-muted text-center" >Nationality:<b>{nat}</b></p>
                        <p className="text-muted text-center" >Email:<b>{email}</b></p>
                    </div>
                </div>
            </div>
        )
    }
}
export default UserList