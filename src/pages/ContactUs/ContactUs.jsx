// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import HeaderNav from "../../components/Shared/HeaderNav/HeaderNav";
// import {
//   Card,
//   Col,
//   Container,
//   FloatingLabel,
//   Form,
//   Row,
//   Button, // Make sure Button is imported if you're using react-bootstrap's Button component
// } from "react-bootstrap";
// import Swal from "sweetalert2";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPhoneAlt,
//   faEnvelope,
//   faMapMarkerAlt,
// } from "@fortawesome/free-solid-svg-icons"; // Import necessary icons

// // Import your CSS file
// import "./ContactUs.css";

// const ContactUs = () => {
//   const [formStatus, setFormStatus] = useState(null);

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     formData.append("access_key", "dd9029fb-6415-463a-8c6f-435bcebf0930");

//     const json = JSON.stringify(Object.fromEntries(formData));

//     try {
//       const res = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: json,
//       });
//       const data = await res.json();

//       if (data.success) {
//         Swal.fire({
//           title: "Submitted!",
//           text: "Thank you for your message. We'll get back to you soon.",
//           icon: "success",
//           confirmButtonText: "Got It!",
//           customClass: {
//             confirmButton: "primaryBtn",
//           },
//         });
//         // Clear form after successful submission
//         event.target.reset();
//       } else {
//         setFormStatus("Failed to send the message. Please try again.");
//       }
//     } catch (error) {
//       setFormStatus("An error occurred. Please try again later.");
//     }
//   };

//   return (
//     <>
//       <div className="container-fluid mt-5 bg-light bg-gradient shadow">
//         <div
//           className="p-4 p-md-5 mb-4 text-white rounded featured"
//           style={{ backgroundColor: "#29a469" }}
//         >
//           <div className="col-md-12 px-0">
//             <h1 className="pt-5 display-4 font-italic text-center">
//               Contact US
//             </h1>
//           </div>
//         </div>
//       </div>

//       {/* Main Content Area: Contact Info on Left, Form on Right */}
//       <Container className="contact-content-container my-5">
//         <Row className="justify-content-center">
//           <Col lg={12} xl={8}>
//             {" "}
//             {/* Adjust column sizes for overall content width */}
//             <div className="contact-card-container shadow-sm p-4 p-md-5">
//               <Row>
//                 <Col md={8} className="contact-info-column pr-md-4">
//                   <h3 className="mb-4 contact-info-heading">
//                     Contact Information
//                   </h3>

//                   <div className="contact-item mb-3">
//                     <FontAwesomeIcon
//                       icon={faPhoneAlt}
//                       className="contact-icon text-success"
//                     />
//                     <div>
//                       <p className="mb-1 text-muted">
//                         Do you need help? Just Call Us
//                       </p>
//                       <p className="mb-0">
//                         <li>
//                           UK OFFICE:
//                           <a
//                             href="tel:+442036338971"
//                             className="contact-link text-black"
//                           >
//                             +442036338971
//                           </a>
//                         </li>
//                         <li>
//                           BANGLADESH OFFICE:
//                           <a
//                             href="tel:+8801918388086"
//                             className="contact-link text-black"
//                           >
//                             +8801918388086
//                           </a>{" "}
//                         </li>
//                         {/* IMPORTANT: Add Bangladesh number and make it clickable */}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="contact-item mb-4">
//                     <FontAwesomeIcon
//                       icon={faEnvelope}
//                       className="contact-icon text-success"
//                     />
//                     <div>
//                       <p className="mb-1 text-muted">
//                         Do you need help? Just Email Us
//                       </p>
//                       <p className="mb-0">
//                         <li className="font-bold">
//                           For Admission:{" "}
//                           <a
//                             href="mailto:admission@lyt-global.com"
//                             className="contact-link text-black"
//                           >
//                             admission@lyt-global.com
//                           </a>
//                         </li>
//                         <li className="font-bold">
//                           For general Inquiry:
//                           <a
//                             href="mailto:info@lyt-global.com"
//                             className="contact-link text-black"
//                           >
//                             info@lyt-global.com
//                           </a>
//                         </li>
//                         <li className="font-bold">
//                           Business Inquiry:
//                           <a
//                             href="mailto: business@lyt-global.com"
//                             className="contact-link text-black"
//                           >
//                             business@lyt-global.com
//                           </a>
//                         </li>
//                         <li className="font-bold">
//                           For partnership:
//                           <a
//                             href="mailto:sales@lyt-global.com"
//                             className="contact-link text-black"
//                           >
//                             sales@lyt-global.com
//                           </a>
//                         </li>
//                         <br />
//                       </p>
//                     </div>
//                   </div>

//                   {/* Office Locations */}
//                   <h4 className="mt-4 mb-3 contact-office-heading">
//                     Our Offices:
//                   </h4>
//                   <div className="contact-item mb-3">
//                     <FontAwesomeIcon
//                       icon={faMapMarkerAlt}
//                       className="contact-icon text-success"
//                     />
//                     <div>
//                       <p className="mb-1">
//                         <strong>UK Office:</strong>
//                       </p>
//                       <p className="mb-0">
//                         Unit 2, 569 Green St, London E13 9BF
//                       </p>
//                     </div>
//                   </div>

//                   <div className="contact-item mb-3">
//                     <FontAwesomeIcon
//                       icon={faMapMarkerAlt}
//                       className="contact-icon text-success"
//                     />
//                     <div>
//                       <p className="mb-1">
//                         <strong>Bangladesh Office:</strong>
//                       </p>
//                       <p className="mb-0">
//                         Manru Tower Chowhatta, Sylhet, Bangladesh
//                       </p>
//                     </div>
//                   </div>
//                 </Col>

//                 {/* Right Column: Talk To Our Expert Form - Adapted to current form fields */}
//                 <Col md={4} className="contact-form-column pl-md-4">
//                   <h3 className="mb-4 contact-form-heading">
//                     Talk To Our Expert!
//                   </h3>
//                   <Form onSubmit={onSubmit}>
//                     <Form.Group controlId="name" className="mb-3">
//                       <Form.Control
//                         type="text"
//                         name="name"
//                         placeholder="Your Full Name *"
//                         required
//                       />
//                     </Form.Group>
//                     <Form.Group controlId="phone" className="mb-3">
//                       <Form.Control
//                         type="tel"
//                         name="phone"
//                         placeholder="Your Mobile No *"
//                         required
//                       />
//                     </Form.Group>
//                     <Form.Group controlId="email" className="mb-3">
//                       <Form.Control
//                         type="email"
//                         name="email"
//                         placeholder="Your Email Id *"
//                         required
//                       />
//                     </Form.Group>
//                     {/* Adding a select dropdown for "Preferred Study Level" similar to the example */}
//                     <Form.Group
//                       controlId="preferredStudyLevel"
//                       className="mb-3"
//                     >
//                       <Form.Select name="preferredStudyLevel">
//                         <option value="">Preferred Study Level *</option>
//                         <option value="Undergraduate">Undergraduate</option>
//                         <option value="Postgraduate">Postgraduate</option>
//                         <option value="PhD">PhD</option>
//                         <option value="Other">Other</option>
//                       </Form.Select>
//                     </Form.Group>
//                     {/* Checkboxes for terms and SMS */}
//                     <Form.Group controlId="agreeTerms" className="mb-2">
//                       <Form.Check
//                         type="checkbox"
//                         name="agreeTerms" // Add name for web3forms
//                         label={
//                           <>
//                             I agree to LYT Global{" "}
//                             <a
//                               href="/terms-and-conditions"
//                               target="_blank"
//                               className="text-success"
//                             >
//                               Terms and Privacy Policy
//                             </a>
//                           </>
//                         }
//                         required // Typically terms agreement is required
//                       />
//                     </Form.Group>
//                     <Form.Group controlId="agreeSms" className="mb-4">
//                       <Form.Check
//                         type="checkbox"
//                         name="agreeSms" // Add name for web3forms
//                         label="Please contact me by phone, email or SMS to assist with my enquiry"
//                       />
//                     </Form.Group>
//                     <Button
//                       variant="success"
//                       type="submit"
//                       className="submit-button"
//                     >
//                       Submit
//                     </Button>
//                     {formStatus && (
//                       <p className="mt-3 text-center">{formStatus}</p>
//                     )}{" "}
//                     {/* Center status message */}
//                   </Form>
//                 </Col>
//               </Row>
//             </div>
//           </Col>
//         </Row>
//       </Container>

//       {/* Embedded Map Section - placed below the main contact card as per the example */}
//       <Container className="my-5">
//         <h3 className="text-center mb-4 map-heading">Find Us on the Map</h3>
//         <Row className="justify-content-center">
//           <Col lg={10} xl={8}>
//             <div className="map-container shadow-sm rounded">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.042037442841!2d0.0379896!3d51.530788799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7c8d52bc857%3A0xcc9a286b76d48673!2s2%2C%20569%20Green%20St%2C%20London%20E13%209BF!5e0!3m2!1sen!2suk!4v1752366804998!5m2!1sen!2suk"
//                 width="750"
//                 height="450"
//                 style={{ border: 0 }}
//                 allowfullscreen
//                 loading="lazy"
//                 referrerpolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>
//           </Col>
//         </Row>
//       </Container>

//       {/* Note: The footer is assumed to be a separate component rendered outside this page component */}
//     </>
//   );
// };

// export default ContactUs;
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  const [formStatus, setFormStatus] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "dd9029fb-6415-463a-8c6f-435bcebf0930");

    const json = JSON.stringify(Object.fromEntries(formData));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: json,
      });
      const data = await res.json();

      if (data.success) {
        Swal.fire({
          title: "Submitted!",
          text: "Thank you for your message. We'll get back to you soon.",
          icon: "success",
          confirmButtonText: "Got It!",
        });
        event.target.reset();
      } else {
        setFormStatus("Failed to send the message. Please try again.");
      }
    } catch (error) {
      setFormStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="py-5 bg-white">
      <div className="container-fluid mt-5 bg-light bg-gradient shadow">
        <div
          className="p-4 p-md-5 mb-4 text-white rounded featured"
          style={{ backgroundColor: "#29a469" }}
        >
          <div className="col-md-12 px-0">
            {" "}
            <h1 className="pt-5 display-4 font-italic text-center">
              Contact US
            </h1>
          </div>
        </div>
      </div>
      <Container className="py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2
            className="fw-bold mb-3"
            style={{ color: "#1a5d40", fontSize: "28px" }}
          >
            Start Your{" "}
            <span style={{ borderBottom: "3px solid #29a469" }}>
              Journey Today
            </span>
          </h2>
          <p
            className="text-muted mx-auto"
            style={{ maxWidth: "600px", fontSize: "14px" }}
          >
            Contact us for a free consultation and let us help you achieve your
            global education or business goals.
          </p>
        </div>

        <Row className="g-5 align-items-start">
          {/* Left Side: Contact Form (5 Columns) */}
          <Col lg={5} className="order-2 order-lg-1">
            <div
              className="p-4 rounded-4 shadow-sm"
              style={{ backgroundColor: "#f0f7f3" }}
            >
              <h4
                className="fw-bold mb-4"
                style={{ color: "#1a5d40", fontSize: "18px" }}
              >
                Send us a Message
              </h4>
              <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold small mb-1">
                    Full Name *
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    className="border-0 p-2 shadow-sm"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold small mb-1">
                    Email Address *
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="border-0 p-2 shadow-sm"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold small mb-1">
                    Service Interested In *
                  </Form.Label>
                  <Form.Select
                    name="preferredStudyLevel"
                    className="border-0 p-2 shadow-sm"
                  >
                    <option value="">Select a service</option>
                    <option value="Undergraduate">
                      Undergraduate Admission
                    </option>
                    <option value="Postgraduate">Postgraduate Admission</option>
                    <option value="Business">Business Consultancy</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold small mb-1">
                    Your Message *
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    placeholder="Tell us about your goals and requirements"
                    className="border-0 p-2 shadow-sm"
                    required
                  />
                </Form.Group>

                <Button
                  type="submit"
                  className="w-100 border-0 fw-bold py-2 rounded-3 shadow-sm"
                  style={{ backgroundColor: "#29a469" }}
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="me-2" /> Send
                  Message
                </Button>
                {formStatus && (
                  <p className="mt-3 text-center small text-danger">
                    {formStatus}
                  </p>
                )}
              </Form>
            </div>
          </Col>

          {/* Right Side: Contact Details (7 Columns) */}
          <Col lg={7} className="ps-lg-5 order-1 order-lg-2">
            {/* Phone Support */}
            <div className="mb-5">
              <h5 className="fw-bold mb-4" style={{ color: "#1a5d40" }}>
                Do you need help? Just Call Us
              </h5>
              <div className="d-flex align-items-center mb-4">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#29a469",
                    color: "white",
                  }}
                >
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </div>
                <div>
                  <div
                    className="small fw-bold text-muted text-uppercase"
                    style={{ fontSize: "10px" }}
                  >
                    UK Office
                  </div>
                  <div
                    className="fw-bold"
                    style={{ color: "#29a469", fontSize: "18px" }}
                  >
                    +44 2036 338971
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#29a469",
                    color: "white",
                  }}
                >
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </div>
                <div>
                  <div
                    className="small fw-bold text-muted text-uppercase"
                    style={{ fontSize: "10px" }}
                  >
                    Bangladesh Office
                  </div>
                  <div
                    className="fw-bold"
                    style={{ color: "#29a469", fontSize: "18px" }}
                  >
                    +880 1918 388086
                  </div>
                </div>
              </div>
            </div>

            {/* Email Support */}
            <div className="mb-5">
              <h5 className="fw-bold mb-4" style={{ color: "#1a5d40" }}>
                Do you need help? Just Email Us
              </h5>
              <Row className="g-3">
                <Col md={6} className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="me-3"
                    style={{ color: "#29a469", fontSize: "1.2rem" }}
                  />
                  <div>
                    <div
                      className="small fw-bold text-muted text-uppercase"
                      style={{ fontSize: "10px" }}
                    >
                      For Admission
                    </div>
                    <span className="small fw-bold">
                      admission@lyt-global.com
                    </span>
                  </div>
                </Col>
                <Col md={6} className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="me-3"
                    style={{ color: "#29a469", fontSize: "1.2rem" }}
                  />
                  <div>
                    <div
                      className="small fw-bold text-muted text-uppercase"
                      style={{ fontSize: "10px" }}
                    >
                      For General Inquiry
                    </div>
                    <span className="small fw-bold">info@lyt-global.com</span>
                  </div>
                </Col>
                <Col md={6} className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="me-3"
                    style={{ color: "#29a469", fontSize: "1.2rem" }}
                  />
                  <div>
                    <div
                      className="small fw-bold text-muted text-uppercase"
                      style={{ fontSize: "10px" }}
                    >
                      Business Inquiry
                    </div>
                    <span className="small fw-bold">
                      business@lyt-global.com
                    </span>
                  </div>
                </Col>
                <Col md={6} className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="me-3"
                    style={{ color: "#29a469", fontSize: "1.2rem" }}
                  />
                  <div>
                    <div
                      className="small fw-bold text-muted text-uppercase"
                      style={{ fontSize: "10px" }}
                    >
                      For Partnership
                    </div>
                    <span className="small fw-bold">sales@lyt-global.com</span>
                  </div>
                </Col>
              </Row>
            </div>

            {/* Address Box */}
            <div
              className="p-4 rounded-4 shadow-sm border-0"
              style={{ backgroundColor: "#f0f7f3" }}
            >
              <h5
                className="fw-bold mb-3 d-flex align-items-center"
                style={{ color: "#1a5d40" }}
              >
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="me-2"
                  style={{ color: "#29a469" }}
                />{" "}
                Our Offices
              </h5>
              <Row>
                <Col md={6} className="mb-3 mb-md-0">
                  <div
                    className="small fw-bold text-uppercase mb-1"
                    style={{ fontSize: "10px", color: "#29a469" }}
                  >
                    UK Office:
                  </div>
                  <p className="small mb-0 opacity-75 fw-semibold text-black">
                    Unit 2, 569 Green St, London E13 9BF
                  </p>
                </Col>
                <Col md={6}>
                  <div
                    className="small fw-bold text-uppercase mb-1"
                    style={{ fontSize: "10px", color: "#29a469" }}
                  >
                    Bangladesh Office:
                  </div>
                  <p className="small mb-0 opacity-75 fw-semibold text-black">
                    Manru Tower Chowhatta, Sylhet, Bangladesh
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
