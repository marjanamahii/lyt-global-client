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
    // {
    //   title: "Frontend Developer",
    //   location: "London, UK",
    //   type: "Full-Time",
    //   description:
    //     "We're looking for a skilled React developer to join our growing team. You'll be responsible for developing dynamic web applications, collaborating with the backend team, and improving UI/UX.",
    //   requirements: [
    //     "Proficient in React.js, JavaScript, and TypeScript.",
    //     "Experience with RESTful APIs and state management (Redux).",
    //     "Strong knowledge of responsive design.",
    //   ],
    // },
    {
      title: "Business Development Executive",
      location: "London, UK",
      type: "Full-Time",
      salary: "Competitive",
      description:
        "We're seeking a highly motivated Business Development Executive to join our team in London. You'll be responsible for identifying new business opportunities, building strong client relationships, and driving revenue growth. This role requires a proactive approach to sales and a deep understanding of market dynamics.",
      requirements: [
        " - Proven experience in business development, sales, or a related field.",
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
      title: "Office Assistant",
      location: "Hyderabad,India",
      type: "Full-Time",
      salary: "Competitive",
      description:
        "We're looking for an organized and proactive Office Assistant to join our team in Hyderabad. You'll be the backbone of our daily operations, ensuring the office runs smoothly and efficiently. Your responsibilities will include managing administrative tasks, supporting various departments, and maintaining a positive work environment.",
      requirements: [
        " - Proven experience in an administrative or office assistant role.",
        " - Excellent organizational and time management skills.",
        " - Proficient in Microsoft Office Suite (Word, Excel, Outlook).",
        " - Strong communication and interpersonal abilities.",
        " - Ability to multitask and prioritize tasks effectively.",
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
    // {
    //   title: "UI/UX Designer",
    //   location: "New York, USA",
    //   type: "Contract",
    //   description:
    //     "Help us design engaging and intuitive user interfaces for our applications. Collaborate with developers and stakeholders to deliver user-centered designs.",
    //   requirements: [
    //     "Expertise in design tools like Figma or Adobe XD.",
    //     "Strong understanding of user experience principles.",
    //     "Experience conducting user research and usability testing.",
    //   ],
    // },
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
            {/* <Button className="primaryBtn" onClick={handleApplyNow}>
              Apply Now
            </Button> */}
            {/* <span className="text-muted fst-italic">
              Send your CV to:{" "}
              <a href="mailto:info@lyt-global.com">info@lyt-global.com</a>
            </span> */}
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}

export default Career;
// import React from "react";

// function Career() {
//   return (
//     <div>
//       <div className="container-fluid mt-5 bg-light bg-gradient shadow">
//         <div
//           className="p-4 p-md-5 mb-4 text-white rounded featured"
//           style={{ backgroundColor: "#29a469" }}
//         >
//           <div className="col-md-12 px-0">
//             <h1 className="pt-5 display-4 font-italic text-center">Careers</h1>
//           </div>
//         </div>
//       </div>
//       <section className="px-4 py-10 max-w-5xl mx-auto text-gray-800">
//         <h2 className="text-3xl font-bold mb-6 text-center border-b pb-2">
//           Career Opportunities
//         </h2>

//         <div className="mb-6">
//           <h3 className="text-xl font-semibold mb-2">Vacant Positions</h3>
//           <ul className="list-disc list-inside space-y-1">
//             <li>
//               Business Development Executive – <strong>London Office</strong>
//             </li>
//             <li>
//               Student Consultant (2 Positions) – <strong>Sylhet Office</strong>
//             </li>
//             <li>
//               Office Assistant (1 Position) – <strong>Hyderabad Office</strong>
//             </li>
//           </ul>
//         </div>

//         <div className="mb-6">
//           <h3 className="text-xl font-semibold mb-2">Office Locations</h3>
//           <p>
//             <strong>Hyderabad Office:</strong> #3-10-5/2, Trimulgherry Cross
//             Roads, Secunderabad, Telangana- 500 015
//           </p>
//           <p>
//             <strong>Nepal Office:</strong> 3rd Floor, Opposite Hope Hospital
//             Lane, Sinamangal Road, Kathmandu, Nepal 44600
//           </p>
//         </div>

//         <p className="mb-2">
//           Salary: <strong>Competitive</strong>
//         </p>
//         <p>
//           To apply, send your CV to{" "}
//           <a
//             className="text-primary hover:underline"
//             href="mailto:info@lyt-global.com"
//           >
//             info@lyt-global.com
//           </a>
//         </p>
//       </section>
//     </div>
//   );
// }

// export default Career;
