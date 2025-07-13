import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import "./Business.css";
import businessImage from "../../assets/images/Business.jpg";

const Business = () => {
  const [showHRModal, setShowHRModal] = useState(false);
  const [showServicesModellingModal, setShowServicesModellingModal] =
    useState(false);
  const [showStartupModal, setShowStartupModal] = useState(false);
  const [showBusinessPlanModal, setShowBusinessPlanModal] = useState(false);
  return (
    <div className="mt-2 bg-white">
      <div className="container-fluid mt-5 shadow">
        <div
          className="p-0 mb-4 rounded featured"
          //   style={{ backgroundColor: "#29a469" }}
        >
          <div className="col-md-12 px-0">
            <img
              src={businessImage}
              alt="Business"
              className="img-fluid w-100 h-100 d-block mx-auto" // Bootstrap classes for responsive image, center it
              style={{
                maxHeight: "350px",
                width: "auto",
                height: "auto",
                objectFit: "cover",
              }} // Adjust max-height as needed
            />
          </div>
        </div>
      </div>

      <Container className="my-5">
        <h1 className="text-center mb-3 font-bold" style={{ color: "#29a469" }}>
          OUR SERVICES
        </h1>
        <p className="text-center mb-5 text-muted">
          Explore the variety of Services we offer to enhance your learning
          experience.
        </p>

        {/* Existing Service Cards - Row 1 */}
        <Row className="justify-content-center g-4 mb-4">
          {" "}
          {/* Added mb-4 for space between rows */}
          {/* HR Services Card */}
          <Col md={6}>
            <Card className="h-100 shadow-sm d-flex flex-column">
              {" "}
              {/* Added d-flex flex-column for better button alignment */}
              <Card.Body className="d-flex flex-column">
                {" "}
                {/* Added d-flex flex-column */}
                <Card.Title className="text-success mb-3">
                  HR Services for SMEs
                </Card.Title>
                <Card.Text className="flex-grow-1">
                  {" "}
                  {/* Added flex-grow-1 */}
                  Comprehensive Human Resources support tailored for Small and
                  Medium-sized Enterprises in the UK, India, Nepal, and
                  Bangladesh. We assist with recruitment, policy development,
                  compliance, and talent management to optimize your workforce.
                </Card.Text>
                <Button
                  variant="outline-success"
                  className="mt-auto"
                  onClick={() => setShowHRModal(true)}
                >
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          {/* Services Modelling Card */}
          <Col md={6}>
            <Card className="h-100 shadow-sm d-flex flex-column">
              {" "}
              {/* Added d-flex flex-column */}
              <Card.Body className="d-flex flex-column">
                {" "}
                {/* Added d-flex flex-column */}
                <Card.Title className="text-success mb-3">
                  Services Modelling Service (Construction & Architecture
                  Sector)
                </Card.Title>
                <Card.Text className="flex-grow-1">
                  {" "}
                  {/* Added flex-grow-1 */}
                  Facilitating robust connections and strategic partnerships
                  between construction companies, architectural firms, and
                  skilled labor providers. Our service aims to optimize project
                  execution, resource allocation, and foster collaborative
                  growth within the construction ecosystem.
                </Card.Text>
                <Button
                  variant="outline-success"
                  className="mt-auto"
                  onClick={() => setShowServicesModellingModal(true)}
                >
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* NEW Service Cards - Row 2 */}
        <Row className="justify-content-center g-4">
          {/* Startup Model Card */}
          <Col md={6}>
            <Card className="h-100 shadow-sm d-flex flex-column">
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-success mb-3">
                  Startup Model
                </Card.Title>
                <Card.Text className="flex-grow-1">
                  Our Startup Model service provides comprehensive guidance for
                  aspiring entrepreneurs, from initial concept validation and
                  business plan development to legal setup, funding strategies,
                  and early-stage operational support. We help turn innovative
                  ideas into viable businesses.
                </Card.Text>
                <Button
                  variant="outline-success"
                  className="mt-auto"
                  onClick={() => setShowStartupModal(true)}
                >
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Comprehensive Business & Strategic Plan Card */}
          <Col md={6}>
            <Card className="h-100 shadow-sm d-flex flex-column">
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-success mb-3">
                  Comprehensive Business & Strategic Plan
                </Card.Title>
                <Card.Text className="flex-grow-1">
                  We specialize in crafting detailed business and strategic
                  plans that outline your vision, objectives, market analysis,
                  competitive landscape, and financial projections. Our plans
                  serve as a roadmap for sustainable growth and successful
                  execution.
                </Card.Text>
                <Button
                  variant="outline-success"
                  className="mt-auto"
                  onClick={() => setShowBusinessPlanModal(true)}
                >
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Modal show={showHRModal} onHide={() => setShowHRModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>HR Services for SMEs</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Our HR Services for SMEs offer tailored solutions to optimize your
            workforce. We cover everything from recruitment and onboarding to
            policy development, compliance, and performance management. Our goal
            is to ensure your small or medium-sized enterprise in the UK, India,
            Nepal, or Bangladesh has the robust HR infrastructure needed for
            growth and success.
          </p>
          {/* Add more detailed content here */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowHRModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Services Modelling Service Modal */}
      <Modal
        show={showServicesModellingModal}
        onHide={() => setShowServicesModellingModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Services Modelling Service (Construction & Architecture Sector)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            In the Construction and Architecture sector, our Services Modelling
            provides a framework for collaboration between companies, skilled
            labor, and project stakeholders. We focus on optimizing project
            execution, ensuring efficient resource allocation, and fostering
            innovation to drive growth within the industry.
          </p>
          {/* Add more detailed content here */}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowServicesModellingModal(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Startup Model Modal */}
      <Modal
        show={showStartupModal}
        onHide={() => setShowStartupModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Startup Model</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Our Startup Model service guides new ventures from concept to
            market. This includes market research, feasibility studies, business
            plan development, legal structuring, securing initial funding, and
            establishing operational frameworks. We provide the essential tools
            and support for startups to achieve sustainable growth and scale.
          </p>
          {/* Add more detailed content here */}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowStartupModal(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Comprehensive Business & Strategic Plan Modal */}
      <Modal
        show={showBusinessPlanModal}
        onHide={() => setShowBusinessPlanModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Comprehensive Business & Strategic Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            A robust Business & Strategic Plan is vital for any organization. We
            work with you to define your vision, mission, and long-term
            objectives. Our plans include detailed market analysis, competitive
            assessments, operational strategies, marketing and sales plans, and
            financial forecasts, providing a clear roadmap for achieving your
            business goals.
          </p>
          {/* Add more detailed content here */}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowBusinessPlanModal(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Business;
