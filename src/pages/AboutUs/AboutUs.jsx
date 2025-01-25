import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import ourMission from "../../assets/images/ourMission.jpg";
import ourStory from "../../assets/images/ourStory.jpg";
import { FaLightbulb } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import { PiMedalFill } from "react-icons/pi";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container-fluid mt-5 bg-light bg-gradient shadow ">
        <div
          className="p-4 p-md-5 mb-4 text-white rounded featured"
          style={{
            // backgroundImage: `url(${bg})`,
            backgroundColor: "#29a469",
          }}
        >
          <div className="col-md-12 px-0">
            <h1 className="pt-5 display-4 font-italic text-center">
              About <span className="text-success"></span> Us
            </h1>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="our-mission py-5 text-black">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="mb-4 text-uppercase font-bold">Our Mission</h2>
              <p className="text-black">
                At Lyt, we aim to empower individuals and organizations by
                providing innovative solutions, trusted expertise, and
                world-class support. Whether you're a student chasing dreams or
                a business striving for excellence, we help you shine brighter.
              </p>
            </Col>
            <Col md={6}>
              <Image src={ourMission} alt="Mission Image" fluid />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Story Section */}
      <section className="our-story bg-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <Image src={ourStory} alt="Our Story Image" fluid />
            </Col>
            <Col md={6}>
              <h2 className="mb-4 text-uppercase font-bold">Our Story</h2>
              <p className="text-black">
                Lyt was born from a simple idea: to make a difference by guiding
                people toward their goals with clarity and confidence. What
                began as a small team with big dreams has grown into a global
                company, trusted by thousands to illuminate the path to success.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Core Values Section */}
      <section className="our-values py-5">
        <Container>
          <h2 className="text-center mb-5 text-uppercase font-bold">
            Our Core Values
          </h2>
          <Row>
            <Col md={4} className="text-center mb-4">
              <FaLightbulb />
              <h4 className="mt-3 font-semibold">Innovation</h4>
              <p className="text-black">
                At Lyt, we stay ahead of the curve, constantly pushing
                boundaries to create impactful solutions.
              </p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <SiTrustpilot />
              <h4 className="mt-3 font-semibold">Trust</h4>
              <p className="text-black">
                We are committed to building long-lasting relationships grounded
                in reliability and integrity.
              </p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <PiMedalFill />
              <h4 className="mt-3 font-semibold">Excellence</h4>
              <p className="text-black">
                Delivering the highest quality service is not just a goal—it's
                our standard.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section
        className="team text-white py-5"
        style={{ background: "#29a469" }}
      >
        <Container>
          <h2 className="text-center mb-5">Meet the Team</h2>
          <Row>
            <Col md={4} className="text-center mb-4">
              <Image
                src="https://via.placeholder.com/150"
                alt="Team Member 1"
                roundedCircle
              />
              <h5 className="mt-3">MD Aminul Islam</h5>
              <p>Founder & CEO</p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <Image
                src="https://via.placeholder.com/150"
                alt="Team Member 2"
                roundedCircle
              />
              <h5 className="mt-3">Sophia Lee</h5>
              <p>Chief Innovation Officer</p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <Image
                src="https://via.placeholder.com/150"
                alt="Team Member 3"
                roundedCircle
              />
              <h5 className="mt-3">Ryan Carter</h5>
              <p>Head of Client Success</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta py-5">
        <Container className="text-center">
          <h2 className="mb-4">Let’s Shine Together</h2>
          <p>
            Whether you're a student, a professional, or a business, Lyt is here
            to help you succeed. Reach out today and discover how we can light
            your way.
          </p>
          <a
            href="/contact"
            style={{ background: "#29a469", color: "white" }}
            className="btn mt-3"
          >
            Get in Touch
          </a>
        </Container>
      </section>
    </div>
  );
};

export default AboutUs;
