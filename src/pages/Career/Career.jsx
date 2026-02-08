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
  FaSearch,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Career() {
  const jobListings = [
    {
      title: "Business Development Executive",
      location: "London, UK",
      type: "Full-Time",
      salary: "Competitive",
      description:
        "We're seeking a highly motivated Services Development Executive to join our team in London. You'll be responsible for identifying new Services opportunities, building strong client relationships, and driving revenue growth. This role requires a proactive approach to sales and a deep understanding of market dynamics.",
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

  const navigate = useNavigate();
  const handleApplyNow = () => {
    navigate("/career/apply");
  };

  // CSS for custom styling
  const styles = `
    .career-header {
      background: linear-gradient(135deg, #29a469 0%, #1e7a5e 100%);
      color: white;
    }
    
    .job-card {
      transition: all 0.3s ease;
      border: none;
      border-left: 4px solid #29a469;
      height: 100%;
      border-radius: 8px;
    }
    
    .job-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(41, 164, 105, 0.15) !important;
    }
    
    .job-title {
      color: #2c3e50;
      font-weight: 600;
    }
    
    .job-location, .job-type, .job-salary {
      color: #5d6d7e;
      font-size: 0.9rem;
    }
    
    .search-btn {
      background-color: #29a469;
      border-color: #29a469;
      color: white;
    }
    
    .search-btn:hover {
      background-color: #1e7a5e;
      border-color: #1e7a5e;
    }
    
    .details-btn {
      background-color: #f8f9fa;
      border-color: #dee2e6;
      color: #2c3e50;
    }
    
    .details-btn:hover {
      background-color: #e9ecef;
      border-color: #ced4da;
    }
    
    .apply-btn {
      background-color: #3498db;
      border-color: #3498db;
      color: white;
    }
    
    .apply-btn:hover {
      background-color: #2980b9;
      border-color: #2980b9;
    }
    
    .modal-header {
      background-color: #29a469;
      color: white;
    }
    
    .modal-header .btn-close {
      filter: brightness(0) invert(1);
    }
    
    .requirement-item {
      color: #34495e;
      margin-bottom: 5px;
    }
    
    .featured-text {
      text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
    }
    
    .section-title {
      color: #2c3e50;
      font-weight: 700;
      position: relative;
      padding-bottom: 10px;
    }
    
    .section-title::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background-color: #29a469;
    }
    
    .icon-primary {
      color: #29a469;
    }
    
    .search-input:focus {
      border-color: #29a469;
      box-shadow: 0 0 0 0.25rem rgba(41, 164, 105, 0.25);
    }
    
    .no-jobs-message {
      color: #7f8c8d;
      font-style: italic;
    }
    
    .email-link {
      color: #29a469;
      font-weight: 500;
    }
    
    .email-link:hover {
      color: #1e7a5e;
      text-decoration: underline;
    }
  `;

  return (
    <div className="mt-2">
      <style>{styles}</style>
      
      {/* Header Section */}
      <div className="container-fluid mt-5 bg-light bg-gradient shadow">
        <div className="p-4 p-md-5 mb-4 text-white rounded career-header">
          <div className="col-md-12 px-0">
            <h1 className="pt-5 display-4 font-italic text-center featured-text">
              Career Opportunities
            </h1>
            <p className="lead text-center mt-3">
              Join our dynamic team and grow with us
            </p>
          </div>
        </div>
      </div>

      <Container className="py-5">
        <h1 className="text-center mb-4 section-title">
          Join Our Team
        </h1>
        <p className="text-center text-muted mb-5 fs-5">
          We are looking for talented individuals who are passionate about
          innovation and creativity. Find your next career opportunity below.
        </p>

        {/* Search Bar */}
        <Row className="justify-content-center mb-5">
          <Col md={8} lg={6}>
            <InputGroup className="shadow-sm">
              <InputGroup.Text className="bg-white">
                <FaSearch className="icon-primary" />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Search by job title, location, or type"
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
              />
              <Button className="search-btn">
                <FaSearch className="me-2" />
                Search
              </Button>
            </InputGroup>
            <p className="text-muted mt-2 text-center">
              {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''} available
            </p>
          </Col>
        </Row>

        {/* Job Listings */}
        <Row>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <Col lg={6} key={index} className="mb-4">
                <Card className="shadow-sm job-card">
                  <Card.Body className="d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <Card.Title className="job-title mb-0">
                        <FaBriefcase className="me-2 icon-primary" />
                        {job.title}
                      </Card.Title>
                      <span className="badge bg-success">{job.type}</span>
                    </div>
                    
                    <div className="mb-3">
                      <div className="d-flex align-items-center mb-2">
                        <FaMapMarkerAlt className="me-2 job-location" />
                        <span className="job-location">{job.location}</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <FaMoneyCheck className="me-2 job-salary" />
                        <span className="job-salary">{job.salary}</span>
                      </div>
                    </div>
                    
                    <Card.Text className="text-muted mb-4 flex-grow-1">
                      {job.description.substring(0, 120)}...
                    </Card.Text>
                    
                    <div className="d-flex justify-content-between mt-auto">
                      <Button
                        variant="light"
                        className="details-btn"
                        onClick={() => handleShowDetails(job)}
                      >
                        View Details
                      </Button>
                      <Button 
                        className="apply-btn"
                        onClick={handleApplyNow}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col>
              <div className="text-center py-5">
                <FaBriefcase className="display-4 text-muted mb-3" />
                <p className="no-jobs-message fs-4">
                  No jobs match your search criteria.
                </p>
                <p className="text-muted">
                  Try different keywords or check back later for new openings.
                </p>
              </div>
            </Col>
          )}
        </Row>

        {/* Additional Info Section */}
        {filteredJobs.length > 0 && (
          <Row className="mt-5 pt-4 border-top">
            <Col>
              <div className="bg-light p-4 rounded text-center">
                <h5 className="text-dark mb-3">Application Process</h5>
                <p className="text-muted mb-0">
                  All applications should be sent to{" "}
                  <a href="mailto:info@lyt-global.com" className="email-link">
                    info@lyt-global.com
                  </a>
                  . Please include the job title in the subject line of your email.
                </p>
              </div>
            </Col>
          </Row>
        )}

        {/* Job Details Modal */}
        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
          <Modal.Header closeButton className="modal-header">
            <Modal.Title>
              <FaBriefcase className="me-2" />
              {selectedJob?.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="py-4">
            <div className="mb-4">
              <div className="d-flex flex-wrap gap-3 mb-3">
                <div className="d-flex align-items-center">
                  <FaMapMarkerAlt className="me-2 icon-primary" />
                  <span className="fw-medium">{selectedJob?.location}</span>
                </div>
                <div className="d-flex align-items-center">
                  <FaClock className="me-2 icon-primary" />
                  <span className="fw-medium">{selectedJob?.type}</span>
                </div>
                <div className="d-flex align-items-center">
                  <FaMoneyCheck className="me-2 icon-primary" />
                  <span className="fw-medium">{selectedJob?.salary}</span>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <h6 className="text-dark mb-2">Job Description</h6>
              <p className="text-muted">{selectedJob?.description}</p>
            </div>
            
            <div className="mb-4">
              <h6 className="text-dark mb-2">Requirements:</h6>
              <ul className="list-unstyled">
                {selectedJob?.requirements.map((req, index) => (
                  <li key={index} className="mb-2 requirement-item">
                    <span className="me-2">•</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            
            {selectedJob?.applyInstructions && selectedJob?.applyEmail && (
              <div className="bg-light p-4 rounded">
                <h6 className="text-dark mb-2">How to Apply:</h6>
                <p className="text-muted mb-2">{selectedJob.applyInstructions}</p>
                <p className="mb-0">
                  <a 
                    href={`mailto:${selectedJob.applyEmail}`} 
                    className="email-link fs-5"
                  >
                    {selectedJob.applyEmail}
                  </a>
                </p>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer className="border-0">
            <Button 
              variant="light" 
              onClick={() => setShowModal(false)}
              className="details-btn"
            >
              Close
            </Button>
            <Button 
              className="apply-btn"
              onClick={handleApplyNow}
            >
              Apply Now
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}

export default Career;
