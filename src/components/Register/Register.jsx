import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../redux/Features/Auth/AuthApi";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Card,
} from "react-bootstrap";

const Register = () => {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = {
      username,
      email,
      password,
    };
    try {
      await registerUser(data).unwrap();
      alert("Registration Successful!");
      navigate("/login");
    } catch (error) {
      setMessage("Registration Failed");
    }
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={10} md={6} lg={4}>
          <Card className="shadow border-0">
            <Card.Body>
              <h2 className="text-center mb-4">Please Register</h2>
              <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                {message && <Alert variant="danger">{message}</Alert>}

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  disabled={isLoading}
                >
                  {isLoading ? "Registering..." : "Register"}
                </Button>
              </Form>
              <p className="text-center mt-4">
                Already have an account?{" "}
                <Link to="/login" className="text-primary">
                  Login here
                </Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
