import React from "react";
import Marquee from "react-fast-marquee";

import { Col, Container, Row } from "react-bootstrap";
import "./Partners.css";
import logo from "../../assets/images/logo.png";
import unilink from "../../assets/images/unilink.png";
import i1 from "../../assets/unilist/uni1.png";
import i2 from "../../assets/unilist/birmingham.png";
import i3 from "../../assets/unilist/cantebury.png";
import i4 from "../../assets/unilist/cardiff.png";
import i5 from "../../assets/unilist/cityuni.png";
import i6 from "../../assets/unilist/coventry.png";
import i7 from "../../assets/unilist/demont.png";
import i8 from "../../assets/unilist/law.png";
import i9 from "../../assets/unilist/ua.png";
import i10 from "../../assets/unilist/uni1.png";
import i11 from "../../assets/unilist/uni1.png";
import i13 from "../../assets/unilist/uni1.png";
import i14 from "../../assets/unilist/uni1.png";
import i15 from "../../assets/unilist/uni1.png";
import i16 from "../../assets/unilist/uni1.png";
// import i17 from '../../assets/Uni Logo update/17.png'
import i18 from "../../assets/unilist/uni1.png";

import i19 from "../../assets/unilist/uni1.png";
import i20 from "../../assets/unilist/uni1.png";
import i21 from "../../assets/unilist/uni1.png";
import i22 from "../../assets/unilist/uni1.png";
import i23 from "../../assets/unilist/uni1.png";
import i24 from "../../assets/unilist/uni1.png";
import i25 from "../../assets/unilist/uni1.png";
import i26 from "../../assets/unilist/uni1.png";
import i27 from "../../assets/unilist/uni1.png";
import i28 from "../../assets/unilist/uni1.png";
import i29 from "../../assets/unilist/uni1.png";
import i30 from "../../assets/unilist/uni1.png";
import i31 from "../../assets/unilist/uni1.png";
import i32 from "../../assets/unilist/uni1.png";
// import i33 from '../../assets/Uni Logo update/33.png'
import i34 from "../../assets/unilist/uni1.png";
import i35 from "../../assets/unilist/uni1.png";
import i36 from "../../assets/unilist/uni1.png";
import i37 from "../../assets/unilist/uni1.png";
import i38 from "../../assets/unilist/uni1.png";
import i39 from "../../assets/unilist/uni1.png";
import i40 from "../../assets/unilist/uni1.png";
import i41 from "../../assets/unilist/uni1.png";
import i42 from "../../assets/unilist/uni1.png";
import i43 from "../../assets/unilist/uni1.png";
import i44 from "../../assets/unilist/uni1.png";
import i45 from "../../assets/unilist/uni1.png";
import i46 from "../../assets/unilist/uni1.png";
import i47 from "../../assets/unilist/uni1.png";
import i48 from "../../assets/unilist/uni1.png";
import i49 from "../../assets/unilist/uni1.png";
import i50 from "../../assets/unilist/uni1.png";
import i51 from "../../assets/unilist/uni1.png";
import i52 from "../../assets/unilist/uni1.png";
import i53 from "../../assets/unilist/uni1.png";
import { Link } from "react-router-dom";

const mainPartners = [
  {
    image: logo,
    name: "SK Uni Guide",
    description: `We are proud to partner with SK Uni Guide for our India and Nepal operations. SK Uni Guide is a trusted name in educational consultancy, sharing our commitment to providing students with the best guidance for their international study aspirations.`,
    link: "https://skuniguide.com/",
  },
  {
    image: unilink,
    name: "Unilink Global Solution",
    description: `LYT Global is proud to collaborate with Unilink Global Solution, enhancing our reach and capabilities in providing comprehensive educational and business consultancy services worldwide. Unilink Global Solution shares our vision for connecting students with top educational opportunities and fostering international business growth.`,
    link: "https://www.unilinkgs.com/",
  },
];

const Partners = () => {
  return (
    <Container fluid className="py-5 partner-section-bg">
      {/* <Link to="https://skuniguide.com/" className="no-underline-link"> */}
      <div className="">
        <h1 className="text-center pt-2 pb-2 uniHeading">Our Partners</h1>
        <Container className="my-5">
          {" "}
          {/* Use a non-fluid container to center cards */}
          <Row className="justify-content-center g-4">
            {" "}
            {/* g-4 for gutter spacing */}
            {mainPartners.map((partner, index) => (
              <Col key={index} md={6}>
                {" "}
                {/* Each card takes half width on medium screens and up */}
                <div className="partner-card text-center h-100">
                  {" "}
                  {partner.image && (
                    <img
                      src={partner.image}
                      alt={`${partner.name} Logo`}
                      className="partner-logo-main mb-3"
                    />
                  )}
                  <p className="lead text-black flex-grow-1">
                    {" "}
                    {/* flex-grow-1 allows description to take available space */}
                    We are proud to partner with{" "}
                    <strong className="font-bold">{partner.name}</strong>{" "}
                    {partner.name === "SK Uni Guide"
                      ? "for our India and Nepal operations. SK Uni Guide is a trusted name in educational consultancy, sharing our commitment to providing students with the best guidance for their international study aspirations."
                      : "enhancing our reach and capabilities in providing comprehensive educational and business consultancy services worldwide. Unilink Global Solution shares our vision for connecting students with top educational opportunities and fostering international business growth."}
                  </p>
                  <p className="text-black font-bold mt-auto">
                    {" "}
                    {`Visit ${partner.name} here: `}
                    <a
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {partner.link}
                    </a>
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        {/* <Marquee className="sliderNoScroll" pauseOnHover={true} speed={100}>
          <div className="mx-1">
            <img src={i1} alt="img" />
          </div>
          <div className="mx-1">
            <img src={i48} alt="img" />
          </div>
        </Marquee> */}
      </div>
      {/* </Link> */}
    </Container>
  );
};

export default Partners;
