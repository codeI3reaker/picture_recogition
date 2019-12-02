import React, { Component } from "react";

import "./signIn.css";

class SignIn extends Component { 
    constructor(props) { 
        super(props) 

        this.state = {
            email:"",
            password: "",
            signInMessage:""
        }

    }

    userNameOnChange = (event) => {
        this.setState({
            email:event.target.value
        })
    }
    
    passwordOnChange = (event) => { 
        this.setState({
            password:event.target.value
        })
    }

    onUserSignIn = async (signIn) => { 
       const url = "http://localhost:3000/sign-in";
        const payload = {
            email:this.state.email,
            password:this.state.password,
        }
        const response = await fetch(url, {
            method: 'post',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        })
        const user = await response.json();
        console.log(user);
        
        user
            ? signIn(user)
            : signIn(false) && this.setState({signInMessage:"Incorrect Credentials"},()=> console.log(this.state))
    }


    render() { 

        const { signIn, register } = this.props;

        return (
                    <div className="form-container">
            <div className = "sign-in-form">
                <h2 className="form-title"> Sign-In </h2>
                    <div className = "message">
                     <h1>{this.state.signInMessage}</h1>   
                    </div>
                <div className = "form-section">
                    <h4 className = "form-header">E-mail</h4>
                        <input
                            onChange = {this.userNameOnChange}
                            placeholder="John Doe"
                            type="input"
                            className="form-input" />
                </div>

                <div className = "form-section">
                    <h4 className = "form-header">Password</h4>
                        <input
                            onChange = {this.passwordOnChange}
                            type="password"
                            className="form-input" />
                </div>

                <div className="form-button-container">
                    <button
                        onClick={()=>this.onUserSignIn(signIn)}
                        className="form-button">
                        Sign-In 
                    </button>
                </div>

                <div
                    onClick = {()=>register(true)}
                    className="form-link">
                    <p>Register</p>
                </div>

            </div>
        </div>
            
        )
    }

} 
    

export default SignIn