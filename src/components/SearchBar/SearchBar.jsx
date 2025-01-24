import React, { useState } from "react";
import { Tab, Tabs, Form, Button, Container, Row, Col } from "react-bootstrap";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [showSearchDetails, setShowSearchDetails] = useState(false);

  const handleSearchClick = () => {
    setShowSearchDetails(true);
  };

  const handleCloseSearchDetails = () => {
    setShowSearchDetails(false);
  };
  return (
    <Container className="mt-5">
      {/* Search Bar */}
      <div className="position-relative mx-auto d-flex  justify-content-center content-center">
        <Form.Control
          type="search"
          placeholder="Search"
          className="rounded-pill absolute ps-5 w-50"
          style={{ height: "40px" }}
          onClick={handleSearchClick}
        />
      </div>

      {/* Expanded Search Section */}
      {showSearchDetails && (
        <div className="mt-4 p-3 bg-light rounded shadow">
          <div className="d-flex justify-content-between">
            <h5>Advanced Search</h5>
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={handleCloseSearchDetails}
            >
              Close
            </Button>
          </div>

          {/* Tabs Section */}
          <Tabs defaultActiveKey="location" className="mt-3 custom-tabs">
            <Tab eventKey="location" title="Location">
              <Form className="mt-3">
                <Row className="align-items-center">
                  <Col sm={9}>
                    <Form.Group controlId="locationSelect">
                      <Form.Label>Select Location</Form.Label>
                      <Form.Select>
                        <option value="">Please select location</option>
                        <option value="London">London</option>
                        <option value="Birmingham">Birmingham</option>
                        <option value="Manchester">Manchester</option>
                        <option value="Glasgow">Glasgow</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col sm={3} className="d-flex justify-content-end">
                    <Button
                      variant="primary"
                      className="mt-4 primaryBtn"
                      //   style={{
                      //     background:
                      //       "linear-gradient(94.18deg, rgb(0, 33, 110) 0%, rgb(219, 12, 40) 100%)",
                      //   }}
                    >
                      Search
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Tab>

            <Tab eventKey="university" title="University">
              <Form className="mt-3">
                <Form.Group controlId="universitySearch">
                  <Form.Label>Type to Search Universities</Form.Label>
                  <Form.Control type="text" placeholder="Search universities" />
                </Form.Group>
                <Button variant="primary" className="mt-3 primaryBtn">
                  Search
                </Button>
              </Form>
            </Tab>

            <Tab eventKey="courses" title="Courses">
              <Form className="mt-3">
                <Form.Group controlId="courseSearch">
                  <Form.Label>Type to Search Courses</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Search courses"
                    disabled
                    readOnly
                  />
                </Form.Group>
                <Button variant="primary" className="mt-3 primaryBtn">
                  Search
                </Button>
              </Form>
            </Tab>

            <Tab eventKey="events" title="Events">
              <Form className="mt-3">
                <Row>
                  <Col sm={6}>
                    <Form.Group controlId="eventLocation">
                      <Form.Label>Location</Form.Label>
                      <Form.Select>
                        <option value="">Select location</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Bangladesh">Bangladesh</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group controlId="eventType">
                      <Form.Label>Event Type</Form.Label>
                      <Form.Select>
                        <option value="">Select event type</option>
                        <option value="Admission Day">Admission Day</option>
                        <option value="Education Expo">Education Expo</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="primary" className="mt-3 primaryBtn">
                  Search
                </Button>
              </Form>
            </Tab>

            <Tab eventKey="advice" title="Get Advice">
              <div className="mt-3 text-center">
                <h6>Need help? Get expert advice</h6>
                <Button variant="primary" className="mt-3 primaryBtn">
                  Start Here
                </Button>
              </div>
            </Tab>
          </Tabs>
        </div>
      )}
    </Container>
  );
};

export default SearchBar;
