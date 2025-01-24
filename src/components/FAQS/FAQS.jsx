import React from "react";
import { Container, Row, Col, Accordion, Image } from "react-bootstrap";
import faqImg from "../../assets/images/faq.png";
import "./FAQS.css";

const FAQS = () => {
  return (
    <section className="faqs py-5">
      <Container>
        {/* Heading */}
        <h2 className="text-center font-bold text-uppercase text-dark mb-5">
          Frequently Asked Questions{" "}
          <span className="text-success">(FAQs)</span>
        </h2>

        {/* FAQs Content */}
        <Row className="align-items-start font-semibold">
          {/* Accordion Section */}
          <Col lg={6}>
            <Accordion defaultActiveKey="0" className="faq-accordion">
              <Accordion.Item eventKey="0" className="faq-item">
                <Accordion.Header className="faq-header">
                  What services does Lyt Global provide?
                </Accordion.Header>
                <Accordion.Body className="faq-body">
                  Lyt Global offers a range of services, including:
                  <ul>
                    <li>University selection and application support</li>
                    <li>Visa application guidance</li>
                    <li>Scholarship opportunities</li>
                    <li>Career and education counseling</li>
                    <li>Accommodation assistance</li>
                    <li>Travel support</li>
                  </ul>
                  Our team ensures a smooth and stress-free study abroad
                  experience.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="faq-item">
                <Accordion.Header className="faq-header">
                  Which countries does Lyt Global specialize in?
                </Accordion.Header>
                <Accordion.Body className="faq-body">
                  Lyt Global specializes in study opportunities in popular
                  destinations such as the UK, USA, Canada, Australia, and
                  European countries. Our network includes top universities
                  around the globe.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="faq-item">
                <Accordion.Header className="faq-header">
                  Does Lyt Global charge for its consulting services?
                </Accordion.Header>
                <Accordion.Body className="faq-body">
                  Many of our services, such as application and general
                  consulting, are free of charge. Specialized services, like
                  visa application support, may involve a small fee. Contact us
                  to learn more about our pricing.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="faq-item">
                <Accordion.Header className="faq-header">
                  Why should I trust Lyt Global with my study abroad journey?
                </Accordion.Header>
                <Accordion.Body className="faq-body">
                  Lyt Global has a proven track record of helping thousands of
                  students successfully enroll in top universities. Our team of
                  experts provides personalized guidance, ensuring each student
                  achieves their goals.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className="faq-item">
                <Accordion.Header className="faq-header">
                  How do I get started with Lyt Global?
                </Accordion.Header>
                <Accordion.Body className="faq-body">
                  Getting started is simple! Visit our Details, fill out the
                  consultation form, or contact our team directly. We'll
                  schedule a session to discuss your goals and guide you through
                  the process.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5" className="faq-item">
                <Accordion.Header className="faq-header">
                  Can Lyt Global help with scholarships and financial aid?
                </Accordion.Header>
                <Accordion.Body className="faq-body">
                  Yes! We provide guidance on available scholarships and
                  financial aid options to help you fund your education. Our
                  team ensures you explore all opportunities to minimize costs.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>

          {/* Image Section */}
          <Col lg={6} className="d-flex justify-content-center mb-4 mb-lg-0">
            <Image
              src={faqImg} // Replace this URL
              alt="FAQ Illustration"
              fluid
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQS;
