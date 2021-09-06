import Nav from './Nav';
import Friends from './Friends';
import Explore from './Explore';
import React from 'react';

class Blog extends React.Component {

    render() {
        return (
            <div>
                <Nav />
                <div class="container mt-3">
                    <div class="row justify-content-md-center">
                        <div class="col-md-3">
                            <Friends />
                        </div>
                        <div class="col-md-9">
                            <Explore />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;
