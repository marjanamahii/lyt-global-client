/* eslint-disable no-unused-vars */
import React from "react";
import "./Gallery.css";

import img1 from "../../assets/images/lyt-logo.jpg";
import img2 from "../../assets/images/lyt-logo.jpg";
import img3 from "../../assets/images/lyt-logo.jpg";
// import img4 from '../../assets/PhotoEvent/dhaka23/DSC06448.jpg'
import img4 from "../../assets/images/lyt-logo.jpg";
import img5 from "../../assets/images/lyt-logo.jpg";
import img6 from "../../assets/images/lyt-logo.jpg";
import img7 from "../../assets/images/lyt-logo.jpg";
import img8 from "../../assets/images/lyt-logo.jpg";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div>
      <section className="container">
        <h1 className="my-4 text-center text-lg-left galleryHeading">
          Events Image Collection
        </h1>

        <div className="row gallery">
          <div
            className="col-lg-3 col-md-4 col-xs-6 thumb"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
          >
            <figure>
              <img
                className="img-fluid img-thumbnail"
                src={img1}
                alt="Random Image"
              />
            </figure>
          </div>
          <div
            className="modal fade"
            id="exampleModal1"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="text-center fs-5 " id="exampleModalLabel"></h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <p className="text-center"></p>
                <div className="modal-body text-center w-100">
                  <img className="w-100" src={img1} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-4 col-xs-6 thumb"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal2"
          >
            <figure>
              <img
                className="img-fluid img-thumbnail"
                src={img2}
                alt="Random Image"
              />
            </figure>
          </div>
          <div
            className="modal fade"
            id="exampleModal2"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="text-center fs-5 " id="exampleModalLabel"></h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <p className="text-center"></p>
                <div className="modal-body text-center w-100">
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                      />
                      <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                      />

                      <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-4 col-xs-6 thumb"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal3"
          >
            <figure>
              <img
                className="img-fluid img-thumbnail"
                src={img3}
                alt="Random Image"
              />
            </figure>
          </div>
          <div
            className="modal fade"
            id="exampleModal3"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="text-center fs-5 " id="exampleModalLabel"></h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <p className="text-center"></p>
                <div className="modal-body text-center w-100">
                  <img className="w-100" src={img3} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-4 col-xs-6 thumb"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal4"
          >
            <figure>
              <img
                className="img-fluid img-thumbnail"
                src={img4}
                alt="Random Image"
              />
            </figure>
          </div>
          <div
            className="modal fade"
            id="exampleModal4"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="text-center fs-5 " id="exampleModalLabel"></h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <p className="text-center"></p>
                <div className="modal-body text-center w-100">
                  <img className="w-100" src={img4} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-4 col-xs-6 thumb"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal5"
          >
            <figure>
              <img
                className="img-fluid img-thumbnail"
                src={img5}
                alt="Random Image"
              />
            </figure>
          </div>
          <div
            className="modal fade"
            id="exampleModal5"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="text-center fs-5 " id="exampleModalLabel"></h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <p className="text-center"></p>
                <div className="modal-body text-center w-100">
                  <img className="w-100" src={img5} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-4 col-xs-6 thumb"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal6"
          >
            <figure>
              <img
                className="img-fluid img-thumbnail"
                src={img6}
                alt="Random Image"
              />
            </figure>
          </div>
          <div
            className="modal fade"
            id="exampleModal6"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="text-center fs-5 " id="exampleModalLabel"></h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <p className="text-center"></p>
                <div className="modal-body text-center w-100">
                  <img className="w-100" src={img6} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-4 col-xs-6 thumb"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal7"
          >
            <figure>
              <img
                className="img-fluid img-thumbnail"
                src={img7}
                alt="Random Image"
              />
            </figure>
          </div>
          <div
            className="modal fade"
            id="exampleModal7"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="text-center fs-5 " id="exampleModalLabel"></h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <p className="text-center"></p>
                <div className="modal-body text-center w-100">
                  <img className="w-100" src={img7} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-4 col-xs-6 thumb"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal8"
          >
            <figure>
              <img
                className="img-fluid img-thumbnail"
                src={img8}
                alt="Random Image"
              />
            </figure>
          </div>
          <div
            className="modal fade"
            id="exampleModal8"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="text-center fs-5 " id="exampleModalLabel"></h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <p className="text-center"></p>
                <div className="modal-body text-center w-100">
                  <img className="w-100" src={img8} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="photos">
              <button className="glow-on-hover mb-2" type="button">
                SEE ALL
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
