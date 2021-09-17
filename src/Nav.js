import React from 'react';
import './Nav.css'

class Nav extends React.Component {

    constructor(props) {
        super(props);
        
        this.handleExploreClick = this.handleExploreClick.bind(this);
        this.handleFriendsClick = this.handleFriendsClick.bind(this);
        this.handleProfileClick = this.handleProfileClick.bind(this);
    }

    handleExploreClick(event) {
        this.props.handleNav("explore");
    }

    handleFriendsClick(event) {
        this.props.handleNav("friends");
    }

    handleProfileClick(event) {
        this.props.handleNav("profile");
    }

    showProfileNav() {
        if (this.props.uid != null && this.props.uid !== undefined) {
            return (
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <label type="button" className="btn btn-light nav-link" onClick={this.handleExploreClick}>Explore</label>
                    </li>
                    <li className="nav-item">
                        <label type="button" className="btn btn-light nav-link" onClick={this.handleFriendsClick}>Friends</label>
                    </li>
                    <li className="nav-item">
                        <label type="button" className="btn btn-light nav-link" onClick={this.handleProfileClick}>Profile</label>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <label type="button" className="btn btn-light nav-link" onClick={this.handleExploreClick}>Explore</label>
                    </li>
                </ul>
            );
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-c">
                    <span className="navbar-brand">
                        <img src="/shield.svg" alt="" width="30" height="24" className="d-inline-block align-text-top"></img>
                        &nbsp;WashU Live
                    </span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">                       
                        {this.showProfileNav()}
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
    
}

export default Nav;