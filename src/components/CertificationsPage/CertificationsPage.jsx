import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Certificates from "../../assets/images/Certificate.jpg";
import BRITISH_COUNCIL_LOGO from "../../assets/images/british-council.png";
import "./CertificationsPage.css";

const Modal = ({ show, onClose, imageSrc }) => {
  if (!show) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <img src={imageSrc} alt="Full Certificate" className="modal-image" />
      </div>
    </div>
  );
};

const CertificationsPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleViewClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="cert-trust-banner py-4 border-top border-bottom">
      <Container>
        <Row className="align-items-center justify-content-center">
          {/* Logo Column */}
          <Col xs={12} md="auto" className="text-center mb-3 mb-md-0">
            <img
              src={BRITISH_COUNCIL_LOGO}
              alt="British Council Logo"
              style={{ height: "50px", width: "auto" }}
            />
          </Col>

          {/* Divider line for Desktop */}
          <Col md="auto" className="d-none d-md-block">
            <div
              style={{ height: "40px", width: "1px", backgroundColor: "#ddd" }}
            ></div>
          </Col>

          {/* Text Column */}
          <Col xs={12} md="auto" className="text-center text-md-start">
            <p
              className="mb-0 fw-bold text-dark"
              style={{ fontSize: "0.95rem" }}
            >
              UK agent and counsellor training Certified
            </p>
            <a
              href="#"
              onClick={handleViewClick}
              className="verification-link fw-bold"
              style={{
                color: "#29a469",
                fontSize: "0.85rem",
                textDecoration: "underline",
              }}
            >
              View Certification
            </a>
          </Col>
        </Row>
      </Container>

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        imageSrc={Certificates}
      />
    </div>
  );
};

export default CertificationsPage;
