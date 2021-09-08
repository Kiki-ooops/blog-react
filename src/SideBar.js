import React from "react";
import UserInfo from "./UserInfo";
import UserForm from "./UserForm";

class SideBar extends React.Component {
    render() {
        if (this.props.uinfo != null) {
            return <UserInfo uinfo={this.props.uinfo} handleSignout={this.props.handleSignout}/>
        } else {
            return <UserForm handleLogin={this.props.handleLogin} handleRegister={this.props.handleRegister}/>
        }
    }
}

export default SideBar;