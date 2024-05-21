import {Component} from "react"

import {Link} from "react-router-dom"

import { BiErrorCircle } from "react-icons/bi";

import "./index.css"

class LoginForm extends Component{

    state = {username: '', password: "", userErroShow : false, passwordErroShow:false, userErro:'', passwordErro:'', showContent:false}


    onSubmitForm = event => {
        event.preventDefault()
        const {username,password} = this.state

        if (username === "kishore" && password === "kishorkittu"){
            this.setState({userErroShow:false, passwordErroShow:false,showContent:true})
        }
        else if (username === "" && password === ""){
            this.setState({userErroShow:true,passwordErroShow:true, userErro:"Enter Username", passwordErro:"Enter Password"})
        }
        else if ((username !== "kishore" || username === "") && password === "kishorkittu"){
           this.setState({userErroShow:true, passwordErro:false, userErro:"Invalid Username"})
        }else if ((password !== "kishorkittu" || password === "") && username === "kishore"){
            this.setState({userErroShow:false, passwordErroShow:true, passwordErro:"Invalid Password"})
        }
    }

    onChangeUserInput = event => {
        this.setState({username:event.target.value})
        
    }

    onChangePasswordInput = event => {
        this.setState({password:event.target.value})
        
    }

    render(){
        const {username,password,userErroShow,passwordErroShow,userErro,passwordErro,showContent} = this.state
        const userInputErro = userErroShow ? "userInputErro" : "userInput"
        const passwordErroText = passwordErroShow ? "PasswordInputErro" : "userInput"
        return(
            <div className="BgContainer">
                <div className="BgCardContainer">
                <div className="TopBodyContainer">
                    {showContent ? (
                        <>
                        <h1 className="TopBodyHeadings">Hello!</h1>
                        <p className="TopBodyPara">Signup to get Started</p>
                        </>
                    ) :(
                        <>
                    <h1 className="TopBodyHeading">Hello <br/> <span className="TopBodySpan">Again!</span></h1>
                    <p className="TopBodyPara">Welcome back you've been missed</p>
                    </>
                )}
                </div>
                <form className="formContainer" onSubmit={this.onSubmitForm}>
                    <div className="inputContainer">
                        <label className="inputLabel">Username<span className="userSapn">*</span></label>
                        <input type="search" className={userInputErro} placeholder="Enter UserName" onChange={this.onChangeUserInput} value={username}/>
                        {userErroShow ? (<p className="errorMsg"><BiErrorCircle fontSize={20}/> {userErro}</p>) : null}
                    </div>
                    <div className="inputContainer">
                        <label className="inputLabel">Password<span className="userSapn">*</span></label>
                        <input type="password" className={passwordErroText} placeholder="Enter Password" value={password} onChange={this.onChangePasswordInput}/>
                        {passwordErroShow ? (<p className="errorMsg"><BiErrorCircle  fontSize={20} /> {passwordErro}</p>) : null}
                    </div>
                    <div className="forgetPasswordCOnainte">
                        <div className="labeAndInput">
                            <input type="checkbox" className="checkbox" id="CheckBox"/>
                            <label className="checkboxLabel" htmlFor="CheckBox">Remember me</label>
                        </div>
                        {showContent ? (<Link to="/" className="Link"><button type="button" className="Home">Redirect Home</button></Link>) :(<p className="forgetPara">Forgot the password?</p>)}
                    </div>
                    <button type="submit" className="loginBtn">Login</button>
                    <p className="FormPara">or continue with</p>
                    <div className="componeyLogo">
                    <div className="componeyBtn">
                            <img src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-0.png" className="companyLogoImage" alt="facebookLogo"/>
                            <span className="companeyName">Facebook</span>
                        </div>   
                        <div className="componeyBtn">
                            <img src="http://pluspng.com/img-png/google-logo-png-open-2000.png" className="companyLogoImage" alt="googleLogo"/>
                            <span className="companeyName">Google</span>
                        </div>
                    </div>
                    <p className="FormPara">Already have an account ? <a href="kishore" className="loginPara">Login</a></p>
                </form>
            </div>
            </div>
        )
    }
}

export default LoginForm