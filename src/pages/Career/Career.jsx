import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
  Modal,
} from "react-bootstrap";
import { FaBriefcase, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Career() {
  const jobListings = [
    {
      title: "Frontend Developer",
      location: "London, UK",
      type: "Full-Time",
      description:
        "We're looking for a skilled React developer to join our growing team. You'll be responsible for developing dynamic web applications, collaborating with the backend team, and improving UI/UX.",
      requirements: [
        "Proficient in React.js, JavaScript, and TypeScript.",
        "Experience with RESTful APIs and state management (Redux).",
        "Strong knowledge of responsive design.",
      ],
    },
    {
      title: "Backend Developer",
      location: "Remote",
      type: "Part-Time",
      description:
        "Join us to build robust backend systems using Node.js and Express. Work with databases and cloud deployment to deliver high-performance APIs.",
      requirements: [
        "Proficiency in Node.js and Express.",
        "Experience with MongoDB or PostgreSQL.",
        "Knowledge of microservices architecture.",
      ],
    },
    {
      title: "UI/UX Designer",
      location: "New York, USA",
      type: "Contract",
      description:
        "Help us design engaging and intuitive user interfaces for our applications. Collaborate with developers and stakeholders to deliver user-centered designs.",
      requirements: [
        "Expertise in design tools like Figma or Adobe XD.",
        "Strong understanding of user experience principles.",
        "Experience conducting user research and usability testing.",
      ],
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobListings);
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = jobListings.filter(
      (job) =>
        job.title.toLowerCase().includes(value) ||
        job.location.toLowerCase().includes(value) ||
        job.type.toLowerCase().includes(value)
    );
    setFilteredJobs(filtered);
  };

  const handleShowDetails = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  // const handleApplyNow = () => {
  //   alert(
  //     "Application form will open (connect it to your backend or redirect to an application form)."
  //   );
  // };

  const navigate = useNavigate();

  const handleApplyNow = () => {
    navigate("/career/apply");
  };

  return (
    <div className="mt-2">
      <div className="container-fluid mt-5 bg-light bg-gradient shadow">
        <div
          className="p-4 p-md-5 mb-4 text-white rounded featured"
          style={{ backgroundColor: "#29a469" }}
        >
          <div className="col-md-12 px-0">
            <h1 className="pt-5 display-4 font-italic text-center">Career</h1>
          </div>
        </div>
      </div>
      <Container className="">
        <h1 className="text-center mb-4 text-uppercase font-bold">
          Join Our Team
        </h1>
        <p className="text-center text-muted mb-5">
          We are looking for talented individuals who are passionate about
          innovation and creativity. Find your next career opportunity below.
        </p>

        {/* Search Bar */}
        <InputGroup className="mb-4 w-50 mx-auto gap-2">
          <Form.Control
            type="text"
            placeholder="Search by title, location, or job type"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Button className="primaryBtn">Search</Button>
        </InputGroup>

        {/* Job Listings */}
        <Row>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="shadow-sm border-0">
                  <Card.Body>
                    <Card.Title>
                      <FaBriefcase className="me-2" />
                      {job.title}
                    </Card.Title>
                    <Card.Subtitle className="text-muted mb-2">
                      <FaMapMarkerAlt className="me-2" />
                      {job.location} &nbsp;&nbsp;
                      <FaClock className="me-2" />
                      {job.type}
                    </Card.Subtitle>
                    <Card.Text>{job.description.substring(0, 80)}...</Card.Text>
                    <Button
                      variant="dark"
                      className="me-2"
                      onClick={() => handleShowDetails(job)}
                    >
                      Details
                    </Button>
                    <Button className="primaryBtn" onClick={handleApplyNow}>
                      Apply Now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col>
              <p className="text-center text-muted">
                No jobs match your search criteria.
              </p>
            </Col>
          )}
        </Row>

        {/* Job Details Modal */}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedJob?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Location: {selectedJob?.location}</h5>
            <p>
              <strong>Type:</strong> {selectedJob?.type}
            </p>
            <p>{selectedJob?.description}</p>
            <h6>Requirements:</h6>
            <ul>
              {selectedJob?.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button className="primaryBtn" onClick={handleApplyNow}>
              Apply Now
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}

export default Career;
