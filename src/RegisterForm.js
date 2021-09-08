import React from "react";

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: ""
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleRegisterSubmit(event) {
        event.preventDefault();
        this.props.handleRegister(this.state.username, this.state.email, this.state.password);
    }

    render() {
        return (
            <form className="pt-3">
                <div className="mb-2">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" value={this.state.username} onChange={this.handleUsernameChange}/>
                </div>
                <div className="mb-2">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input type="text" className="form-control" id="email" value={this.state.email} onChange={this.handleEmailChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                </div>
                <button className="btn btn-outline-secondary" onClick={this.handleRegisterSubmit}>Register</button>
            </form>
        );
    }
}

export default RegisterForm;