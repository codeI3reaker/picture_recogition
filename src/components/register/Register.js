import React, {Component} from "react";
import "./register.css";

class Register extends Component { 
    constructor(props) { 
        super(props)
            this.state = {
                id: null,
                name: "",
                email: "",
                password:""
            }
    }

    onNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    onEmailChange = (event) => {
        this.setState({
            email : event.target.value
        })
    }

    onPasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    onRegisterClick = async(signIn) => {
        const url = "http://localhost:3000/register";
        const payload = {
            password: this.state.password,
            name: this.state.name,
            email: this.state.email,
        }
        const post = await fetch(url, {
            method: 'post',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        })

        const response = await post.json();

        console.log(response);
        
        signIn(response);
    }

    render() {
        
        const { signIn } = this.props;

        return (
            <div className="form-container">
                <div className = "sign-in-form">
                    <h2 className="form-title"> Register </h2>

                    <div className = "form-section">
                        <h4 className = "form-header">Your Name</h4>
                        <input
                            onChange = {this.onNameChange}
                            placeholder="John Doe"
                            type="input"
                            className="form-input" />
                    </div>

                    <div className = "form-section">
                        <h4 className = "form-header">Your Email</h4>
                        <input
                            onChange= {this.onEmailChange}
                            placeholder="JDoe@gmail.com"
                            htmlFor="email-address"
                            className="form-input" />
                    </div>

                    <div className = "form-section">
                        <h4 className = "form-header">Password</h4>
                        <input
                            onChange = {this.onPasswordChange}
                            type="password"
                            htmlFor="password"
                            className="form-input" />
                    </div>

                    <div className="form-button-container">
                        <button
                            onClick={()=>this.onRegisterClick(signIn)}
                            className="form-button">
                            Register
                        </button>
                    </div>

                </div>
            </div>
        )
    }

}

export default Register