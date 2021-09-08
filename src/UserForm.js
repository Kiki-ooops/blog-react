import React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

class UserForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            userForm: "login",
            loginTab: "nav-link active",
            registerTab: "nav-link"
        }

        this.switchLogin = this.switchLogin.bind(this);
        this.switchRegister = this.switchRegister.bind(this);
    }

    switchLogin() {
        this.setState({
            userForm: "login",
            loginTab: "nav-link active",
            registerTab: "nav-link"
        });
        console.log(this.state);
    }

    switchRegister() {
        this.setState({
            userForm: "register",
            loginTab: "nav-link",
            registerTab: "nav-link active"
        });
        console.log(this.state);
    }

    renderUserForm(option) {
        if (option === "login") {
            return (<LoginForm handleLogin={this.props.handleLogin}/>);
        } else {
            return (<RegisterForm handleRegister={this.props.handleRegister}/>);
        }
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <ul className="nav nav-tabs nav-fill">
                        <li className="nav-item">
                            <span className={this.state.loginTab} onClick={this.switchLogin}>Login</span>
                        </li>
                        <li className="nav-item">
                            <span className={this.state.registerTab} onClick={this.switchRegister}>Register</span>
                        </li>
                    </ul>
                    {this.renderUserForm(this.state.userForm)}
                </div>
            </div>
        );
    }
}

export default UserForm;