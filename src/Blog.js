import React from 'react';
import Cookies from 'js-cookie';

import Nav from './Nav';
import Explore from './Explore';
import Profile from './Profile';
import SideBar from './SideBar';

const url = "http://localhost:8080";

class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            token: Cookies.get("washu-token"),
            uid: Cookies.get("washu-uid"),
            uinfo: null,
            error: null,
            message: null,
            content: "explore"
        }
        console.log(this.state);

        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignout = this.handleSignout.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleNav = this.handleNav.bind(this);
        this.handleUpdateProfile = this.handleUpdateProfile.bind(this);
    }

    componentDidMount() {
        this.getUserInfo();
    }

    handleLogin(username, password) {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        };
        fetch(url + "/authenticate", requestOptions)
        .then(response => {
            if (response.status === 200) {
                this.setState({
                    error: null,
                    message: null
                });
                return response.json();
            } else {
                this.setState({error: "Login failed, check your username and password"});
                console.log(this.state);
            }
        }).then(data => {
            Cookies.set("washu-token", "Bearer " + data.token);
            Cookies.set("washu-uid", data.uid);
            this.setState({
                token: "Bearer " + data.token,
                uid: data.uid
            });
            console.log(this.state);
            this.getUserInfo();
        });
    }

    handleSignout() {
        Cookies.remove("washu-token");
        Cookies.remove("washu-uid");
        this.setState({
            uinfo: null,
            token: null,
            uid: null,
            content: "explore"
        });
    }

    handleRegister(username, email, password) {
        const requestOptions = {
            method: "POST",
            headers: { 
                "Content-Type": "application/json"
             },
            body: JSON.stringify({
                user: {
                    username: username,
                    email: email
                },
                password: password
            })
        };
        fetch(url + "/user", requestOptions)
        .then(response => {
            if (response.status === 201) {
                return response.json();
            } else {
                this.setState({error: "Register failed, username already taken"});
                console.log(this.state);
            }
        }).then(data => {
            Cookies.set("washu-uid", data.uid);
            this.setState({
                error: null,
                message: "Welcom, " + data.username + "! Please login with your credentials"
            });
            console.log(data);
            console.log(this.state);
            this.handleLogin(username, password);
        });
    }

    handleNav(nav) {
        this.setState({content: nav});
    }

    renderContent() {
        if (this.state.content === "explore") {
            return <Explore content="all"/>;
        } else if (this.state.content === "friends") {
            return <Explore content="friends"/>;
        } else {
            return <Profile uinfo={this.state.uinfo} handleUpdate={this.handleUpdateProfile}/>;
        }
    }

    async handleUpdateProfile(userData) {
        let image = null;
        if (this.valid(userData.files) && userData.files.length > 0) {
            image = await this.uploadFile(userData.files[0]);
        }
        console.log(image)
        const requestOptions = {
            method: "PUT",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": this.state.token
             },
            body: JSON.stringify({
                user: {
                    username: userData.username,
                    email: userData.email,
                    avatar: image
                },
                password: userData.newPasswd
            })
        };
        fetch(url + "/user/" + this.state.uid, requestOptions)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                this.setState({error: "Update failed"});
                console.log(this.state);
            }
        }).then(data => {
            if (data.avatar != null) {
                data.avatar = url + "/image/" + data.avatar;
            }
            this.setState({
                error: null,
                uinfo: data,
                message: "User profile updated!"
            });
            console.log(data);
            console.log(this.state);
        });
    }

    async uploadFile(file) {
        const formData = new FormData();
        formData.append('image', file);

        const requestOptions = {
            method: "POST",
            headers: { 
                "Authorization": this.state.token
             },
            body: formData
        };

        const image = await fetch(url + "/image", requestOptions)
        .then(response => {
            if (response.status === 200) {
                console.log(response.body);
                return response.text();
            } else {
                this.setState({error: "Update failed"});
                console.log(this.state);
            }
        }).then(data => {
            this.setState({
                error: null,
                message: "Image uploaded!"
            });
            console.log(data);
            console.log(this.state);
            return data;
        });

        return image;
    }

    getUserInfo() {
        if (this.valid(this.state.token) && this.valid(this.state.uid)) {
            const requestOptions = {
                method: "GET",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": this.state.token
                 }
            };
            fetch(url + "/user/" + this.state.uid, requestOptions)
            .then(res => res.json())
            .then(data => {
                if (data.avatar != null) {
                    data.avatar = url + "/image/" + data.avatar;
                }
                this.setState({
                    uinfo: data
                })
                console.log(data);
                console.log(this.state);
            })
        }
    }

    valid(obj) {
        return obj !== undefined && obj != null;
    }

    render() {
        return (
            <div>
                <Nav handleNav={this.handleNav} uid={this.state.uid}/>
                <div className="container mt-3">
                    <div className="row justify-content-md-center">
                        <div className="col-md-3">
                            <SideBar uinfo={this.state.uinfo} handleLogin={this.handleLogin} handleSignout={this.handleSignout} handleRegister={this.handleRegister}/>
                        </div>
                        <div className="col-md-9">
                            {this.renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;
