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

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert("Application submitted successfully! We'll get back to you soon.");
  //   console.log("Application Data:", formData);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Front-end validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // const phonePattern = /^\d{10}$/; // Example for 10-digit phone numbers
    // if (!phonePattern.test(formData.phone)) {
    //   alert("Please enter a valid phone number.");
    //   return;
    // }

    setIsLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("coverLetter", formData.coverLetter);
    formDataToSend.append("resume", formData.resume);

    try {
      const response = await fetch(
        // "https://lyt-global-server.vercel.app/submit-application",
        "http://localhost:3000/submit-application",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (response.ok) {
        alert(
          "Application submitted successfully! We'll get back to you soon."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          resume: "",
          coverLetter: "",
        });
      } else {
        alert("Something went wrong, please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong, please try again.");
    } finally {
      setIsLoading(false);
    }
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
            {isLoading && (
              <div className="loading">Submitting your application...</div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ApplicationForm;
