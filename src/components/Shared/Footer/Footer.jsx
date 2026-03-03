// import React from "react";
// import { Container, Row, Col, Nav } from "react-bootstrap";

// const Footer = () => {
//   return (
//     <footer className=" text-white pt-5" style={{ background: "#29a469" }}>
//       <Container fluid>
//         {/* Links */}
//         <Row className="justify-content-center">
//           {/* Useful Links */}
//           <Col xs={6} sm={4} md={3} className="mb-4">
//             <Nav className="flex-column">
//               <Nav.Link className="text-uppercase text-white">
//                 Useful Links
//               </Nav.Link>
//               <Nav.Link href="/universities" className="text-white">
//                 Find a University
//               </Nav.Link>
//               {/* <Nav.Link href="/compare-universities" className="text-white">
//                 Compare Universities
//               </Nav.Link> */}
//               {/* <Nav.Link href="/courses" className="text-white">
//                 Find a Course
//               </Nav.Link> */}
//               {/* <Nav.Link href="/scholarships" className="text-white">
//                 Find a Scholarship
//               </Nav.Link> */}
//               <Nav.Link href="/contact" className="text-white">
//                 Contact Us
//               </Nav.Link>
//             </Nav>
//           </Col>

//           {/* About LYT */}
//           <Col xs={6} sm={4} md={3} className="mb-4">
//             <Nav className="flex-column">
//               <Nav.Link className="text-uppercase text-white">
//                 All About LYT
//               </Nav.Link>
//               <Nav.Link href="/about" className="text-white">
//                 About Us
//               </Nav.Link>
//               {/* <Nav.Link href="/about-lyt" className="text-white">
//                 About LYT
//               </Nav.Link> */}
//               {/* <Nav.Link href="/what-we-do" className="text-white">
//                 What We Do
//               </Nav.Link> */}
//               {/* <Nav.Link href="/why-choose-lyt" className="text-white">
//                 Why Choose LYT
//               </Nav.Link> */}
//               {/* <Nav.Link href="/success-stories" className="text-white">
//                 Success Stories
//               </Nav.Link> */}
//             </Nav>
//           </Col>

//           {/* Community */}
//           <Col xs={6} sm={4} md={3} className="mb-4">
//             <Nav className="flex-column">
//               <Nav.Link className="text-uppercase text-white">
//                 Community
//               </Nav.Link>
//               {/* <Nav.Link href="/news" className="text-white">
//                 LYT News
//               </Nav.Link> */}
//               {/* <Nav.Link href="/blogs" className="text-white">
//                 Latest Blogs
//               </Nav.Link> */}
//               <Nav.Link href="/events" className="text-white">
//                 Upcoming Events
//               </Nav.Link>
//               {/* <Nav.Link href="/refer-a-friend" className="text-white">
//                 Refer a Friend
//               </Nav.Link> */}
//               <Nav.Link href="/career" className="text-white">
//                 LYT Careers
//               </Nav.Link>
//             </Nav>
//           </Col>

//           {/* Services */}
//           <Col xs={6} sm={4} md={3} className="mb-4">
//             <Nav className="flex-column">
//               <Nav.Link className="text-uppercase text-white">
//                 Services
//               </Nav.Link>
//               <Nav.Link
//                 // href="/Services/uk-university-application"
//                 href="/contact"
//                 className="text-white"
//               >
//                 Free Application Support
//               </Nav.Link>
//               <Nav.Link
//                 // href="/Services/student-visa-application-for-uk"
//                 href="/contact"
//                 className="text-white"
//               >
//                 Student Visa Applications
//               </Nav.Link>
//               {/* <Nav.Link href="/Services/financing-study" className="text-white">
//                 Student Finance Advice
//               </Nav.Link> */}
//               {/* <Nav.Link
//                 href="/Services/advice-for-parents"
//                 className="text-white"
//               >
//                 Advice for Parents
//               </Nav.Link> */}
//               {/* <Nav.Link href="/Services/travel-support" className="text-white">
//                 Travel Support
//               </Nav.Link> */}
//             </Nav>
//           </Col>
//         </Row>

//         {/* Global Branches */}
//         <Row className="text-center border-top border-gray-500 pt-3">
//           <Col>
//             <p className="text-white mb-2">
//               Our Global Branches:
//               <a
//                 href="/global-offices/united-kingdom"
//                 className="text-white mx-2"
//                 style={{ textDecoration: "none" }}
//               >
//                 UK Head Office
//               </a>{" "}
//               |
//               <a
//                 href="/global-offices/bangladesh"
//                 className="text-white mx-2"
//                 style={{ textDecoration: "none" }}
//               >
//                 Bangladesh
//               </a>{" "}
//               |{/* Add other branches as needed */}
//             </p>
//           </Col>
//         </Row>

//         {/* Social Media and Policies */}
//         <Row className="text-center border-top border-gray-500 pt-3">
//           <Col className="mb-3">
//             <span>© 2025 LYT All rights reserved.</span>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronRight, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="text-white pt-5 pb-3"
      style={{ backgroundColor: "#2d3e50" }}
    >
      <Container>
        <Row className="g-4 mb-5">
          {/* Brand and Description */}
          <Col lg={4} md={12}>
            <h2
              className="fw-bold mb-4"
              style={{ fontSize: "2rem", color: "#29a469" }}
            >
              <span className="text-white">Lyt</span>Global
            </h2>
            <p
              className="text-white small opacity-75 mb-4 pe-lg-4"
              style={{ lineHeight: "1.8" }}
            >
              We take pride in our ability to help students and businesses
              achieve their global goals and succeed internationally. Build your
              career and business using a trusted partner.
            </p>
            <div className="d-flex gap-3">
              {[
                faFacebookF,
                faTwitter,
                faLinkedinIn,
                faInstagram,
                faYoutube,
              ].map((icon, idx) => (
                <div
                  key={idx}
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "36px",
                    height: "36px",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    cursor: "pointer",
                    transition: "0.3s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#29a469")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(255,255,255,0.1)")
                  }
                >
                  <FontAwesomeIcon icon={icon} size="sm" />
                </div>
              ))}
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6} xs={12}>
            <h5 className="fw-bold mb-4" style={{ color: "#29a469" }}>
              Quick Links
            </h5>
            <ul className="list-unstyled">
              {[
                "Home",
                "Our Impact",
                "Student Services",
                "Business Services",
                "Contact",
              ].map((item) => (
                <li
                  key={item}
                  className="mb-3 d-flex align-items-center small opacity-75"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-2"
                    style={{ fontSize: "10px", color: "#29a469" }}
                  />
                  <a href="#" className="text-white text-decoration-none">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Our Services */}
          <Col lg={3} md={6} xs={12}>
            <h5 className="fw-bold mb-4" style={{ color: "#29a469" }}>
              Our Services
            </h5>
            <ul className="list-unstyled">
              {[
                "University Admissions",
                "Scholarship Guidance",
                "Career Counseling",
                "Business Consultancy",
                "HR Auditing",
                "Workplace Compliance",
              ].map((service) => (
                <li
                  key={service}
                  className="mb-3 d-flex align-items-center small opacity-75"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-2"
                    style={{ fontSize: "10px", color: "#29a469" }}
                  />
                  <a href="#" className="text-white text-decoration-none">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Stay Updated Section */}
          <Col lg={3} md={12}>
            <h5 className="fw-bold mb-4" style={{ color: "#29a469" }}>
              Stay Updated
            </h5>
            <p className="text-white small opacity-75 mb-4">
              Subscribe to our newsletter for the latest updates on education
              opportunities, visa policies, and business insights.
            </p>
            <Form>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="mb-3 border-0 py-2 px-3 text-white footer-input"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                }}
              />
              <Button
                className="w-100 border-0 fw-bold py-2 shadow-sm"
                style={{
                  backgroundColor: "#29a469",
                  borderRadius: "25px",
                  color: "white",
                }}
              >
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <div className="border-top border-secondary pt-4 text-center small opacity-50">
          <p className="text-white mb-2">
            © 2023 Lyt Global. All rights reserved. | LYT Group is owned by AS
            HOPE LIMITED (Company Number: 15288330), registered in the United
            Kingdom.
          </p>
          <div className="d-flex justify-content-center flex-wrap gap-3 mt-2">
            <a
              href="https://www.lyt-global.com"
              className="text-decoration-none"
              style={{ color: "#29a469" }}
            >
              www.lyt-global.com
            </a>
            <span className="d-none d-md-inline">|</span>
            <span style={{ color: "#29a469" }}>UK: +44 2036 338971</span>
            <span className="d-none d-md-inline">|</span>
            <span style={{ color: "#29a469" }}>info@lyt-global.com</span>
          </div>
        </div>

        {/* Floating Scroll To Top Button */}
        <div
          onClick={scrollToTop}
          className="position-fixed bottom-0 end-0 m-4 rounded-circle d-flex align-items-center justify-content-center shadow-lg"
          style={{
            width: "45px",
            height: "45px",
            backgroundColor: "#29a469",
            color: "white",
            cursor: "pointer",
            zIndex: 1000,
            transition: "0.3s",
          }}
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
