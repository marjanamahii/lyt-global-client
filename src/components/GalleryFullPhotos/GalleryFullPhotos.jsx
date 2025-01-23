/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
// import bg from "../../assets/blogBg.jpg";
import Footer from "../Shared/Footer/Footer";
import HeaderNav from "../Shared/HeaderNav/HeaderNav";

import img1 from "../../assets/images/lyt-logo.jpg";
import img2 from "../../assets/images/lyt-logo.jpg";
import img3 from "../../assets/images/lyt-logo.jpg";
import img4 from "../../assets/images/lyt-logo.jpg";
import img5 from "../../assets/images/lyt-logo.jpg";
import img6 from "../../assets/images/lyt-logo.jpg";
import img7 from "../../assets/images/lyt-logo.jpg";
import img8 from "../../assets/images/lyt-logo.jpg";
// openday university Bedfordshire
import img9 from "../../assets/images/lyt-logo.jpg";
import img10 from "../../assets/images/lyt-logo.jpg";
import img11 from "../../assets/images/lyt-logo.jpg";
// university of birmiongham
import img12 from "../../assets/images/lyt-logo.jpg";
import img13 from "../../assets/images/lyt-logo.jpg";
import img14 from "../../assets/images/lyt-logo.jpg";
import img15 from "../../assets/images/lyt-logo.jpg";
// university of Dundee
import img16 from "../../assets/images/lyt-logo.jpg";
import img17 from "../../assets/images/lyt-logo.jpg";
import img18 from "../../assets/images/lyt-logo.jpg";
import img19 from "../../assets/images/lyt-logo.jpg";
// university of Queen uni belfast
import img20 from "../../assets/images/lyt-logo.jpg";
import img21 from "../../assets/images/lyt-logo.jpg";
import img22 from "../../assets/images/lyt-logo.jpg";
import img23 from "../../assets/images/lyt-logo.jpg";

import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const GalleryFullPhotos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeaderNav></HeaderNav>
      <div className="container-fluid mt-5 bg-light bg-gradient shadow ">
        <div
          className="p-4 p-md-5 mb-4 text-white rounded featured"
          style={{ backgroundColor: "#29a469" }}
        >
          <div
            className="col-md-12 px-0"
            style={{ backgroundColor: "#29a469" }}
          >
            <h1 className="pt-5 display-4 font-italic text-center">
              Photo Gallery <span className="text-success"></span>
            </h1>
          </div>
        </div>
      </div>

      {/* Spot Assessment session University of Queens university belfast */}
      <section className="container">
        <h1 className="my-4 text-center text-lg-left galleryHeading">
          Spot Assessment Session Queens University Belfast
        </h1>
        <h6 className="text-center" style={{ fontWeight: "600" }}>
          Afshana Jafri, Student Recruitment Manager from Queens University
          Belfast, visited our Dhaka office and provided intensive training to
          our highly skilled counselors. She also shared valuable information
          for those interested in studying at Queens University Belfast. Visit
          our <Link to="/contact">Dhaka office</Link> to learn more about these
          opportunities.
        </h6>

        <div className="row gallery">
          <div
            className="col-lg-3 col-md-4 col-xs-6 thumb"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal211"
          >
            <figure>
              <img
                className="img-fluid img-thumbnail"
                src={img20}
                alt="Random Image"
              />
            </figure>
          </div>
          <div
            className="modal fade"
            id="exampleModal211"
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
                  <img className="w-100" src={img20} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-4 col-xs-6 thumb"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal231"
          >
            <figure>
              <img
                className="img-fluid img-thumbnail"
                src={img22}
                alt="Random Image"
              />
            </figure>
          </div>
          <div
            className="modal fade"
            id="exampleModal231"
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
                  <img className="w-100" src={img22} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-4 col-xs-6 thumb"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal241"
          >
            <figure>
              <img
                className="img-fluid img-thumbnail"
                src={img23}
                alt="Random Image"
              />
            </figure>
          </div>
          <div
            className="modal fade"
            id="exampleModal241"
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
                  <img className="w-100" src={img23} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-4 col-xs-6 thumb"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal221"
          >
            <figure>
              <img
                className="img-fluid img-thumbnail"
                src={img21}
                alt="Random Image"
              />
            </figure>
          </div>
          <div
            className="modal fade"
            id="exampleModal221"
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
                  <img className="w-100" src={img21} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Spot Assessment session University of Birmingham */}
      <section className="container">
        <h1 className="my-4 text-center text-lg-left galleryHeading">
          Spot Assessment Session University of Birmingham
        </h1>
        <h6 className="text-center" style={{ fontWeight: "600" }}>
          Niharika Gupta, the esteemed Country Officer from the University of
          Birmingham, conducted an enriching training session for our proficient
          counselors. With her expertise, she not only empowered our team but
          also shared invaluable insights for aspiring students considering the
          University of Birmingham. We invite you to explore these exciting
          opportunities further by visiting our{" "}
          <Link to="/contact">Dhaka office</Link>. Your journey towards academic
          excellence begins here!
        </h6>

        <div className="row gallery">
          <div
            className="col-lg-3 col-md-4 col-xs-6 thumb"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal21"
          >
            <figure>
              <img
                className="img-fluid img-thumbnail"
                src={img14}
                alt="Random Image"
              />
            </figure>
          </div>
          <div
            className="modal fade"
            id="exampleModal21"
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
                  <img className="w-100" src={img14} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-4 col-xs-6 thumb"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal22"
          >
            <figure>
              <img
                className="img-fluid img-thumbnail"
                src={img12}
                alt="Random Image"
              />
            </figure>
          </div>
          <div
            className="modal fade"
            id="exampleModal22"
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
                  <img className="w-100" src={img12} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-4 col-xs-6 thumb"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal23"
          >
            <figure>
              <img
                className="img-fluid img-thumbnail"
                src={img13}
                alt="Random Image"
              />
            </figure>
          </div>
          <div
            className="modal fade"
            id="exampleModal23"
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
                  <img className="w-100" src={img13} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-4 col-xs-6 thumb"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal24"
          >
            <figure>
              <img
                className="img-fluid img-thumbnail"
                src={img15}
                alt="Random Image"
              />
            </figure>
          </div>
          <div
            className="modal fade"
            id="exampleModal24"
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
                  <img className="w-100" src={img15} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spot Assessment session University of Dundee */}
      <section className="container">
        <h1 className="my-4 text-center text-lg-left galleryHeading">
          Spot Assessment Session University of Dundee
        </h1>
        <h6 className="text-center" style={{ fontWeight: "600" }}>
          In a recent enlightening session at our{" "}
          <Link to="/contact">Dhaka office</Link>, Jonathan Fortune, the
          esteemed International Officer from the University of Dundee, led a
          captivating training session for our skilled counselors. His profound
          expertise not only empowered our team but also illuminated the path
          for prospective students interested in the University of Dundee. We
          extend a warm invitation to you to delve deeper into these captivating
          prospects by visiting our <Link to="/contact">Dhaka office</Link>.
          Your academic journey towards excellence commences right here, with
          us!
        </h6>
        <div className="row gallery">
          <div
            className="col-lg-3 col-md-4 col-xs-6 thumb"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal99"
          >
            <figure>
              <img
                className="img-fluid img-thumbnail"
                src={img16}
                alt="Random Image"
              />
            </figure>
          </div>
          <div
            className="modal fade"
            id="exampleModal99"
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
                  <img className="w-100" src={img16} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-4 col-xs-6 thumb"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal98"
          >
            <figure>
              <img
                className="img-fluid img-thumbnail"
                src={img17}
                alt="Random Image"
              />
            </figure>
          </div>
          <div
            className="modal fade"
            id="exampleModal98"
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
                  <img className="w-100" src={img17} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-4 col-xs-6 thumb"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal97"
          >
            <figure>
              <img
                className="img-fluid img-thumbnail"
                src={img19}
                alt="Random Image"
              />
            </figure>
          </div>
          <div
            className="modal fade"
            id="exampleModal97"
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
                  <img className="w-100" src={img19} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-4 col-xs-6 thumb"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal96"
          >
            <figure>
              <img
                className="img-fluid img-thumbnail"
                src={img18}
                alt="Random Image"
              />
            </figure>
          </div>
          <div
            className="modal fade"
            id="exampleModal96"
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
                  <img className="w-100" src={img18} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* openday university Bedfordshire */}
      <section className="container">
        <h1 className="my-4 text-center text-lg-left galleryHeading">
          Openday university of Bedfordshire
        </h1>

        <div className="row gallery">
          <div
            className="col-lg-3 col-md-4 col-xs-6 thumb"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal9"
          >
            <figure>
              <img
                className="img-fluid img-thumbnail"
                src={img9}
                alt="Random Image"
              />
            </figure>
          </div>
          <div
            className="modal fade"
            id="exampleModal9"
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
                  <img className="w-100" src={img9} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-4 col-xs-6 thumb"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal10"
          >
            <figure>
              <img
                className="img-fluid img-thumbnail"
                src={img10}
                alt="Random Image"
              />
            </figure>
          </div>
          <div
            className="modal fade"
            id="exampleModal10"
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
                  <img className="w-100" src={img10} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-4 col-xs-6 thumb"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal11"
          >
            <figure>
              <img
                className="img-fluid img-thumbnail"
                src={img11}
                alt="Random Image"
              />
            </figure>
          </div>
          <div
            className="modal fade"
            id="exampleModal11"
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
                  <img className="w-100" src={img11} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dhaka event */}
      <section className="container">
        <h1 className="my-4 text-center text-lg-left galleryHeading">
          Dhaka Event 2023
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
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
};

export default GalleryFullPhotos;
