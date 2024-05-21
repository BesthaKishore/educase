import { Component } from "react";

import {Link} from "react-router-dom"

import { FaArrowLeftLong } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";

import "./index.css"

class Profile extends Component {

render(){
return (
    <div className="ProfileContainer">
        <div className="ProfileCardContainer">
            <div className="ProfileItemsContainer">
            <div className="profileBackContainer">
             <Link to="/" className="Link">
            <FaArrowLeftLong size={28}/>
            </Link>
            <h1 className="ProfileHeading">Fill your Profile</h1>
            </div>
            <div className="profileImageContaien">
                <div className="CameraContainer">
                <FaCamera size={30}color="#2C80CB"/>
                </div>
                
            </div>
            <form className="FormContainer">
            <div className="inputContainer">
                <label className="label" htmlFor="Username">Username</label>
                <input type="text" id="UserName" className="input"/>
            </div>
            <div className="inputContainer">
                <label className="label" htmlFor="FullName">FullName</label>
                <input type="text" id="FullName" className="input"/>
            </div>
            <div className="inputContainer">
                <label className="label" htmlFor="Email">Email Address</label>
                <input type="email" id="Email" className="input"/>
            </div>
            <div className="inputContainer">
                <label className="label" htmlFor="number">Phone Number</label>
                <input type="number" id="number" className="input"/>
            </div>
            </form>
            </div>
        <button className="btn-primary">NEXT</button>
        </div>
    </div>
)
}
}

export default Profile