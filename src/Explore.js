import React from "react";

import "./Explore.css";
import "bootstrap-icons/font/bootstrap-icons.css";

class Explore extends React.Component {

    renderCarousel() {
        const image1 = {"background-image": "url(/679478.jpg)"};
        const image2 = {"background-image": "url(/861304.jpg)"};
        const image3 = {"background-image": "url(/morty.png)"};
        return(
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner item-sm">
              <div class="carousel-item active" style={image1}>
                <img src="/679478.jpg" class="invisible" alt="..."/>
              </div>
              <div class="carousel-item" style={image2}>
                <img src="/861304.jpg" class="invisible" alt="..."/>
              </div>
              <div class="carousel-item" style={image3}>
                <img src="/morty.png" class="invisible" alt="..."/>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        );
    }

    renderCarousel2() {
        const image1 = {"background-image": "url(/679478.jpg)"};
        const image2 = {"background-image": "url(/861304.jpg)"};
        const image3 = {"background-image": "url(/morty.png)"};
        return(
            <div id="carouselExampleIndicators2" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner item-lg">
              <div class="carousel-item active" style={image1}>
                <img src="/679478.jpg" class="invisible" alt="..."/>
              </div>
              <div class="carousel-item" style={image2}>
                <img src="/861304.jpg" class="invisible" alt="..."/>
              </div>
              <div class="carousel-item" style={image3}>
                <img src="/morty.png" class="invisible" alt="..."/>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        );
    }

    renderPost() {
        const iconStyle = {
            width: "50px",
            height: "50px"
        };
        return (
            <div class="card">
                {this.renderCarousel()}
                <div class="card-body mb-auto">
                    <div className="row row-cols-auto">
                        <div className="col-2 pe-1">
                            <img className="rounded" style={iconStyle} src="morty.png" alt="user"/>
                        </div>
                        <div className="col-10 ps-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <div className="row row-cols-auto">
                                <div className="col pe-1 fw-bold">Seayoung</div>
                                <div className="col ps-1">10/09/2021</div>
                            </div>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-4 d-flex justify-content-center">
                            <i class="bi-heart"/>
                            &nbsp;100
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                            <i className="bi-box-arrow-up-right"/>
                            &nbsp;5
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                            <i className="bi-chat-dots"/>
                            &nbsp;20
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-xl">
                        <div class="modal-content">
                            <div className="row px-2">
                                <div className="col-8 p-0">
                                    {this.renderCarousel2()}
                                </div>
                                <div className="col-4 p-0">
                                    <div className="row pt-3 px-3">
                                        <div className="col-2 pe-1">
                                            <img className="rounded" style={iconStyle} src="morty.png" alt="user"/>
                                        </div>
                                        <div className="col-10 ps-2">
                                            <div className="row row-cols-auto">
                                                <div className="col pe-1 fw-bold">Seayoung</div>
                                                <div className="col ps-1">10/09/2021</div>
                                            </div>
                                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                    <div className="row pt-2">
                                        <div className="col-4 d-flex justify-content-center">
                                            <i class="bi-heart"/>
                                            &nbsp;100
                                        </div>
                                        <div className="col-4 d-flex justify-content-center">
                                            <i className="bi-box-arrow-up-right"/>
                                            &nbsp;5
                                        </div>
                                        <div className="col-4 d-flex justify-content-center">
                                            <i className="bi-chat-dots"/>
                                            &nbsp;20
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        {this.renderPost()}
                    </div>
                    {/* <div className="col-md-6">
                        {this.renderPost()}
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Explore;