import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Business.css";
import businessImage from "../../assets/images/Business.jpg";

const Business = () => {
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
                <Button variant="outline-success" className="mt-auto">
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
                <Button variant="outline-success" className="mt-auto">
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
                <Button variant="outline-success" className="mt-auto">
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
                <Button variant="outline-success" className="mt-auto">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Business;
