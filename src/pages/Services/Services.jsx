import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Services.css";

const Services = () => {
  return (
    <div className="mt-2 bg-white">
      <div className="container-fluid mt-5 bg-light bg-gradient shadow">
        <div
          className="p-4 p-md-5 mb-4 text-white rounded featured"
          style={{ backgroundColor: "#29a469" }}
        >
          <div className="col-md-12 px-0">
            <h1 className="pt-5 display-4 font-italic text-center">Services</h1>
          </div>
        </div>
      </div>

      <Container>
        <h2 className="section-title font-semibold">Our Services</h2>
        <p className="section-subtitle">
          Explore the variety of services we offer to enhance your learning
          experience.
        </p>
        <Row className="g-4 d-flex align-items-stretch">
          {/* Service 1 */}
          <Col md={4} className="d-flex">
            <Card className="service-card h-100">
              {/* <Card.Img
                variant="top"
                src="https://via.placeholder.com/350x219?text=Service+1"
              /> */}
              <Card.Body className="d-flex flex-column">
                <Card.Title className="mb-3 font-bold">
                  HR Services for SMEs
                </Card.Title>
                <Card.Text className="flex-grow-1">
                  Comprehensive Human Resources support tailored for Small and
                  Medium-sized Enterprises in the UK, India, Nepal, and
                  Bangladesh. We assist with recruitment, policy development,
                  compliance, and talent management to optimize your workforce.
                </Card.Text>
                <a
                  href="/service/business-modelling"
                  className="btn btn-success mt-auto"
                >
                  Learn More
                </a>
              </Card.Body>
            </Card>
          </Col>
          {/* Service 2 */}
          <Col md={4} className="d-flex">
            <Card className="service-card h-100">
              {/* <Card.Img
                variant="top"
                src="https://via.placeholder.com/350x219?text=Service+2"
              /> */}
              <Card.Body className="d-flex flex-column">
                <Card.Title className="mb-3 font-bold">
                  Business Modelling Service (Construction & Architecture
                  Sector)
                </Card.Title>
                <Card.Text className="flex-grow-1">
                  Facilitating robust connections and strategic partnerships
                  between construction companies, architectural firms, and
                  skilled labor providers. Our service aims to optimize project
                  execution, resource allocation, and foster collaborative
                  growth within the construction ecosystem.
                </Card.Text>
                <a
                  href="/service/business-modelling"
                  className="btn btn-success mt-auto"
                >
                  Learn More
                </a>
              </Card.Body>
            </Card>
          </Col>
          {/* Service 3 */}
          {/* <Col md={4}>
            <Card className="service-card">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/350x219?text=Service+3"
              />
              <Card.Body>
                <Card.Title>Skill Development</Card.Title>
                <Card.Text>
                  Enhance your skills with our variety of online workshops and
                  hands-on training programs, ranging from technical to soft
                  skills.
                </Card.Text>
                <a
                  href="/service/skill-development"
                  className="btn btn-success"
                >
                  Learn More
                </a>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
