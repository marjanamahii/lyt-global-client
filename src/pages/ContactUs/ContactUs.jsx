/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import HeaderNav from "../../components/Shared/HeaderNav/HeaderNav";
import {
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import Swal from "sweetalert2";

const ContactUs = () => {
  const [formStatus, setFormStatus] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // formData.append("access_key", "c9c2c922-8944-41b5-a6a7-248302ad649f");
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
          customClass: {
            confirmButton: "primaryBtn",
          },
        });
      } else {
        setFormStatus("Failed to send the message. Please try again.");
      }
    } catch (error) {
      setFormStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <HeaderNav />
      <div className="container-fluid mt-5 bg-light bg-gradient shadow">
        <div
          className="p-4 p-md-5 mb-4 text-white rounded featured"
          style={{ backgroundColor: "#29a469" }}
        >
          <div className="col-md-12 px-0">
            <h1 className="pt-5 display-4 font-italic text-center">
              Contact <span className="text-success"></span> Us
            </h1>
          </div>
        </div>
      </div>
      <section className="contact pt-5">
        <Container>
          <Row className="py-5 align-items-center">
            <Col xl="6" md="6" className="d-none d-md-block">
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.907591932802!2d-0.06224322373088795!3d51.51491131015497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760332b316a367%3A0x7e78a35e9e8f9657!2s205%20Commercial%20Rd%2C%20London%20E1%202BT!5e0!3m2!1sen!2suk!4v1737243698874!5m2!1sen!2suk"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.042037442841!2d0.0379896!3d51.530788799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7c8d52bc857%3A0xcc9a286b76d48673!2s2%2C%20569%20Green%20St%2C%20London%20E13%209BF!5e0!3m2!1sen!2suk!4v1752366804998!5m2!1sen!2suk"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
            <Col xl="6" md="6">
              <Card className="bg-light p-4 border-0 shadow-sm">
                <Form onSubmit={onSubmit}>
                  <h1>If you have any Query</h1>
                  <h1 className="h3 font-semibold mb-4">Send us a message</h1>
                  <Row>
                    <Col md="6">
                      <FloatingLabel
                        controlId="name"
                        label="Full Name"
                        className="mb-4"
                      >
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          required
                        />
                      </FloatingLabel>
                    </Col>
                    <Col md="6">
                      <FloatingLabel
                        controlId="email"
                        label="Email Address"
                        className="mb-4"
                      >
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="name@example.com"
                          required
                        />
                      </FloatingLabel>
                    </Col>
                    <Col md="12">
                      <FloatingLabel
                        controlId="phone"
                        label="Phone Number"
                        className="mb-4"
                      >
                        <Form.Control
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                        />
                      </FloatingLabel>
                    </Col>
                    <Col md="12">
                      <FloatingLabel controlId="message" label="Message">
                        <Form.Control
                          as="textarea"
                          name="message"
                          placeholder="Your Message"
                          style={{ height: "126px" }}
                          required
                        />
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <button className="primaryBtn mt-3" type="submit">
                    Send Message
                  </button>
                  {formStatus && <p className="mt-3">{formStatus}</p>}
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactUs;
