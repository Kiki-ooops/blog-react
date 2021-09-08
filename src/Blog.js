import Nav from './Nav';
import Explore from './Explore';
import React from 'react';
import Cookies from 'js-cookie';
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
            message: null
        }
        this.getUserInfo();
        console.log(this.state);

        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignout = this.handleSignout.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
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
            uid: null
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

    render() {
        return (
            <div>
                <Nav />
                <div className="container mt-3">
                    <div className="row justify-content-md-center">
                        <div className="col-md-3">
                            <SideBar uinfo={this.state.uinfo} handleLogin={this.handleLogin} handleSignout={this.handleSignout} handleRegister={this.handleRegister}/>
                        </div>
                        <div className="col-md-9">
                            <Explore />
                        </div>
                    </div>
                </div>
            </div>
        );
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
}

export default Blog;
