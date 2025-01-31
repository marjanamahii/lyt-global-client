import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className=" text-white pt-5" style={{ background: "#29a469" }}>
      <Container fluid>
        {/* Links */}
        <Row className="justify-content-center">
          {/* Useful Links */}
          <Col xs={6} sm={4} md={3} className="mb-4">
            <Nav className="flex-column">
              <Nav.Link className="text-uppercase text-white">
                Useful Links
              </Nav.Link>
              <Nav.Link href="/universities" className="text-white">
                Find a University
              </Nav.Link>
              <Nav.Link href="/compare-universities" className="text-white">
                Compare Universities
              </Nav.Link>
              <Nav.Link href="/courses" className="text-white">
                Find a Course
              </Nav.Link>
              <Nav.Link href="/scholarships" className="text-white">
                Find a Scholarship
              </Nav.Link>
              <Nav.Link href="/contact" className="text-white">
                Contact Us
              </Nav.Link>
            </Nav>
          </Col>

          {/* About LYT */}
          <Col xs={6} sm={4} md={3} className="mb-4">
            <Nav className="flex-column">
              <Nav.Link className="text-uppercase text-white">
                All About LYT
              </Nav.Link>
              <Nav.Link href="/about" className="text-white">
                About Us
              </Nav.Link>
              <Nav.Link href="/about-lyt" className="text-white">
                About LYT
              </Nav.Link>
              <Nav.Link href="/what-we-do" className="text-white">
                What We Do
              </Nav.Link>
              <Nav.Link href="/why-choose-lyt" className="text-white">
                Why Choose LYT
              </Nav.Link>
              <Nav.Link href="/success-stories" className="text-white">
                Success Stories
              </Nav.Link>
            </Nav>
          </Col>

          {/* Community */}
          <Col xs={6} sm={4} md={3} className="mb-4">
            <Nav className="flex-column">
              <Nav.Link className="text-uppercase text-white">
                Community
              </Nav.Link>
              <Nav.Link href="/news" className="text-white">
                LYT News
              </Nav.Link>
              <Nav.Link href="/blogs" className="text-white">
                Latest Blogs
              </Nav.Link>
              <Nav.Link href="/events" className="text-white">
                Upcoming Events
              </Nav.Link>
              <Nav.Link href="/refer-a-friend" className="text-white">
                Refer a Friend
              </Nav.Link>
              <Nav.Link href="/careers" className="text-white">
                LYT Careers
              </Nav.Link>
            </Nav>
          </Col>

          {/* Services */}
          <Col xs={6} sm={4} md={3} className="mb-4">
            <Nav className="flex-column">
              <Nav.Link className="text-uppercase text-white">
                Services
              </Nav.Link>
              <Nav.Link
                href="/services/uk-university-application"
                className="text-white"
              >
                Free Application Support
              </Nav.Link>
              <Nav.Link
                href="/services/student-visa-application-for-uk"
                className="text-white"
              >
                Student Visa Applications
              </Nav.Link>
              <Nav.Link href="/services/financing-study" className="text-white">
                Student Finance Advice
              </Nav.Link>
              <Nav.Link
                href="/services/advice-for-parents"
                className="text-white"
              >
                Advice for Parents
              </Nav.Link>
              <Nav.Link href="/services/travel-support" className="text-white">
                Travel Support
              </Nav.Link>
            </Nav>
          </Col>
        </Row>

        {/* Global Branches */}
        <Row className="text-center border-top border-gray-500 pt-3">
          <Col>
            <p className="text-white mb-2">
              Our Global Branches:
              <a
                href="/global-offices/united-kingdom"
                className="text-white mx-2"
                style={{ textDecoration: "none" }}
              >
                UK Head Office
              </a>{" "}
              |
              <a
                href="/global-offices/bangladesh"
                className="text-white mx-2"
                style={{ textDecoration: "none" }}
              >
                Bangladesh
              </a>{" "}
              |{/* Add other branches as needed */}
            </p>
          </Col>
        </Row>

        {/* Social Media and Policies */}
        <Row className="text-center border-top border-gray-500 pt-3">
          <Col className="mb-3">
            <span>© 2025 LYT All rights reserved.</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
