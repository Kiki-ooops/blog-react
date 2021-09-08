import React from "react";

class UserInfo extends React.Component {

    constructor(props) {
        super(props);

        this.handleSignout = this.handleSignout.bind(this);
    }

    handleSignout(event) {
        event.preventDefault();
        this.props.handleSignout();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <img src="/morty.png" className="card-img-top avatar" alt={this.props.uinfo.username}/>
                                <h5 className="card-title pt-2">{this.props.uinfo.username}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{this.props.uinfo.email}</h6>
                                <div className="d-flex justify-content-between pt-3">
                                    <button type="button" className="btn btn-sm btn-outline-secondary mr-5" onClick={this.handleSignout}>Sign Out</button>
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">An item</li>
                                <li className="list-group-item">A second item</li>
                                <li className="list-group-item">A third item</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserInfo;