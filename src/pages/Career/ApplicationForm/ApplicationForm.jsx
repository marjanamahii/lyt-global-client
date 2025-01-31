import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted successfully! We'll get back to you soon.");
    console.log("Application Data:", formData);
  };

  return (
    <div className="container-fluid mt-5">
      <Container className="py-5">
        <h1 className="text-center font-bold mb-2">Job Application Form</h1>
        <p className="text-muted text-center mb-5">
          Please fill in your details to apply for the job.
        </p>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your full name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formResume">
                <Form.Label>Upload Resume</Form.Label>
                <Form.Control
                  type="file"
                  name="resume"
                  onChange={(e) =>
                    setFormData({ ...formData, resume: e.target.files[0] })
                  }
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCoverLetter">
                <Form.Label>Cover Letter (Optional)</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter your cover letter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button type="submit" className="primaryBtn w-100">
                Submit Application
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ApplicationForm;
