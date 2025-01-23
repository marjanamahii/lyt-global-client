import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../redux/Features/Auth/AuthApi";
import { setUser } from "../../redux/Features/Auth/AuthSlice";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Card,
} from "react-bootstrap";

const Login = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const [loginUser, { isLoading: loginLoading }] = useLoginUserMutation();
  const navigate = useNavigate();

  // handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    try {
      const response = await loginUser(data).unwrap();
      const { token, user } = response;
      dispatch(setUser({ user }));
      alert("Login Successful");
      navigate("/");
    } catch (error) {
      setMessage("Please provide a valid email and password");
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
              <h2 className="text-center mb-4">Please Login</h2>
              <Form onSubmit={handleLogin}>
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
                  disabled={loginLoading}
                >
                  {loginLoading ? "Logging in..." : "Login"}
                </Button>
              </Form>
              <p className="text-center mt-4">
                Don’t have an account?{" "}
                <Link to="/register" className="text-primary">
                  Register here
                </Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
