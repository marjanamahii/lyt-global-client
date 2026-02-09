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
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaClock,
  FaMoneyCheck,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Career() {
  const jobListings = [
    {
      title: "Sales & Marketing Executive",
      location: "London, UK",
      type: "Full-Time",
      salary: "Competitive",
      description:
        "We're seeking a highly motivated Services Development Executive to join our team in London. You'll be responsible for identifying new service opportunities, building strong client relationships, and driving revenue growth. This role requires a proactive approach to sales and a deep understanding of market dynamics.",
      requirements: [
        " - Proven experience in Services development, sales, or a related field.",
        " - Excellent communication, negotiation, and interpersonal skills.",
        " - Ability to identify and cultivate new leads and opportunities.",
        " - Strong understanding of sales principles and customer relationship management.",
        " - Self-motivated with a results-driven approach.",
      ],
      applyInstructions:
        "Please send your CV and a brief cover letter outlining your relevant experience and why you are interested in this role to:",
      applyEmail: "info@lyt-global.com",
    },
    {
      title: "Student Consultant",
      location: "Sylhet, BD",
      type: "Full-Time",
      salary: "Competitive",
      description:
        "We're seeking an enthusiastic and knowledgeable Student Consultant to join our team in Sylhet. You'll be instrumental in guiding students through their academic journeys, providing expert advice on course selection, university applications, and career pathways. This role requires strong communication skills and a genuine passion for helping students achieve their educational goals.",
      requirements: [
        " - Experience in educational consulting, advising, or a related field.",
        " - Excellent interpersonal and active listening skills.",
        " - Strong understanding of various educational systems and admission processes.",
        " - Ability to empathize with students and provide personalized guidance.",
        " - Proficient in conducting research and presenting information clearly.",
      ],
      applyInstructions:
        "Please send your CV and a brief cover letter outlining your relevant experience and why you are interested in this role to:",
      applyEmail: "info@lyt-global.com",
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
                      {/* <FaMoneyCheck className="me-2" />
                      {job.salary} */}
                    </Card.Subtitle>
                    <Card.Text>{job.description.substring(0, 80)}...</Card.Text>
                    <Button
                      variant="dark"
                      className="me-2"
                      onClick={() => handleShowDetails(job)}
                    >
                      Details
                    </Button>
                    {/* <Button className="primaryBtn" onClick={handleApplyNow}>
                      Apply Now
                    </Button> */}
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
            <h6 className="mt-2 font-bold">Requirements:</h6>
            <ul>
              {selectedJob?.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
            <h6 className="mt-2 font-bold ">To Apply:</h6>
            {selectedJob?.applyInstructions && selectedJob?.applyEmail && (
              <div>
                <p className="text-black">{selectedJob.applyInstructions}</p>
                <p>
                  <a href={`mailto:${selectedJob.applyEmail}`}>
                    {selectedJob.applyEmail}
                  </a>
                </p>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}

export default Career;
