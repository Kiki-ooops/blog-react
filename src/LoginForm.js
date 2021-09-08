import React from "react";

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleLoginSubmit(event) {
        event.preventDefault();
        this.props.handleLogin(this.state.username, this.state.password);
    }

    render() {
        return (
            <form className="pt-3">
                <div className="mb-2">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" value={this.state.username} onChange={this.handleUsernameChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                </div>
                <button type="submit" className="btn btn-outline-secondary" onClick={this.handleLoginSubmit}>Login</button>
            </form>
        );
    }
}

export default LoginForm;