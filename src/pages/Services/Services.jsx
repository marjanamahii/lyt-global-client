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
        <Row className="g-4">
          {/* Service 1 */}
          <Col md={4}>
            <Card className="service-card">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/350x219?text=Service+1"
              />
              <Card.Body>
                <Card.Title>Online Learning</Card.Title>
                <Card.Text>
                  Our online learning platform offers a flexible and accessible
                  way for students to engage with course materials and
                  instructors, all from the comfort of their own home.
                </Card.Text>
                <a href="/service/online-learning" className="btn btn-success">
                  Learn More
                </a>
              </Card.Body>
            </Card>
          </Col>
          {/* Service 2 */}
          <Col md={4}>
            <Card className="service-card">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/350x219?text=Service+2"
              />
              <Card.Body>
                <Card.Title>Career Counseling</Card.Title>
                <Card.Text>
                  Get expert advice from our career counselors to help you
                  choose the right career path, prepare for interviews, and land
                  your dream job.
                </Card.Text>
                <a
                  href="/service/career-counseling"
                  className="btn btn-success"
                >
                  Learn More
                </a>
              </Card.Body>
            </Card>
          </Col>
          {/* Service 3 */}
          <Col md={4}>
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
          </Col>
          {/* Service 4 */}
          <Col md={4}>
            <Card className="service-card">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/350x219?text=Service+4"
              />
              <Card.Body>
                <Card.Title>Internship Opportunities</Card.Title>
                <Card.Text>
                  Get hands-on experience by joining our internship programs
                  with leading companies in various industries.
                </Card.Text>
                <a
                  href="/service/internship-opportunities"
                  className="btn btn-success"
                >
                  Learn More
                </a>
              </Card.Body>
            </Card>
          </Col>
          {/* Service 5 */}
          <Col md={4}>
            <Card className="service-card">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/350x219?text=Service+5"
              />
              <Card.Body>
                <Card.Title>Personalized Coaching</Card.Title>
                <Card.Text>
                  Receive one-on-one coaching sessions tailored to your personal
                  goals, whether academic, professional, or personal
                  development.
                </Card.Text>
                <a
                  href="/service/personalized-coaching"
                  className="btn btn-success"
                >
                  Learn More
                </a>
              </Card.Body>
            </Card>
          </Col>
          {/* Service 6 */}
          <Col md={4}>
            <Card className="service-card">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/350x219?text=Service+6"
              />
              <Card.Body>
                <Card.Title>Study Abroad Guidance</Card.Title>
                <Card.Text>
                  Our expert consultants will help you plan and apply for study
                  abroad programs in top institutions around the world.
                </Card.Text>
                <a
                  href="/service/study-abroad-guidance"
                  className="btn btn-success"
                >
                  Learn More
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
