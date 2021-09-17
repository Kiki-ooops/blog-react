import React from "react";

class Profile extends React.Component {

    constructor(props) {
        super(props);

        console.log(this.props.uinfo);

        this.state = {
            username: this.props.uinfo.username,
            email: this.props.uinfo.email,
            password: "",
            newPasswd: "",
            files: null
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleNewPasswdChange = this.handleNewPasswdChange.bind(this);
        this.handleFileSelect = this.handleFileSelect.bind(this);
        this.handleUpdateProfile = this.handleUpdateProfile.bind(this);
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleNewPasswdChange(event) {
        this.setState({newPasswd: event.target.value});
    }

    handleFileSelect(event) {
        this.setState({files: event.target.files});
        console.log(event);
        console.log(this.state);
    }

    handleUpdateProfile(event) {
        this.props.handleUpdate(this.state);
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form className="row justify-content-md-between g-3">
                            <div className="col-md-6">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="username" value={this.state.username} onChange={this.handleUsernameChange}/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" value={this.state.email} onChange={this.handleEmailChange}/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="newPasswd" className="form-label">New Password</label>
                                <input type="password" className="form-control" id="newPasswd" value={this.state.newPasswd} onChange={this.handleNewPasswdChange}/>
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="avatar" className="form-label">Avatar</label>
                                <input className="form-control" type="file" id="avatar" files={this.state.files} onChange={this.handleFileSelect}/>
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="status" className="form-label">Status</label>
                                <textarea className="form-control" id="status" rows="3"></textarea>
                            </div>
                            <div className="col-md-12">
                                <button type="button" className="btn btn-outline-secondary mt-5" onClick={this.handleUpdateProfile}>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;