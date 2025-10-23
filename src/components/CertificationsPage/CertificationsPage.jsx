import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Certificates from "../../assets/images/Certificate.jpg";
import BRITISH_COUNCIL_LOGO from "../../assets/images/british-council.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./CertificationsPage.css";

// const certificationsData = [
//   {
//     id: 1,
//     title: "British Council Certificate",
//     logo: Certificates,
//     description:
//       "Regulated to provide immigration services by the Immigration Services Commissioner.",
//     registrationNumber: "F202100311",
//     link: "https://www.gov.uk/government/organisations/immigration-advice-authority/about",
//   },
//   //   {
//   //     id: 2,
//   //     title: "Cyber Essentials Plus",
//   //     logo: cyberEssentialsPlusLogo,
//   //     description: "", // Description is empty in your HTML for this one
//   //     linkText: "View Certification",
//   //     link: "https://registry.blockmarktech.com/certificates/3efd0b6d-7d4a-4b8b-b92b-7f54dd3dcb59/",
//   //   },
//   //   {
//   //     id: 3,
//   //     title: "UK Agent and Counsellor training Certified",
//   //     logo: britishCouncilTrainingLogo,
//   //     description: "", // Description is empty in your HTML for this one
//   //     linkText: "View Certification",
//   //     link: "https://agent-counsellor-ukhub.britishcouncil.org/gal",
//   //     detailedPageLink: "/certification/british-council", // Added for the specific link shown
//   //   },
//   //   {
//   //     id: 4,
//   //     title: "Cyber Essentials",
//   //     logo: cyberEssentialsLogo,
//   //     description: "", // Description is empty in your HTML for this one
//   //     linkText: "View Certification",
//   //     link: "https://registry.blockmarktech.com/certificates/2c2d7b27-f294-4be0-a19b-4837e67d005a/?share_key=PCtGwSmmQ1zqevKjEH-qn0gyULKhlkEf7iDVEDb1yRw",
//   //   },
// ];

// --- Modal Component ---
// Certificate-er boro image-ta dekhanor jonno
const Modal = ({ show, onClose, imageSrc }) => {
  if (!show) {
    return null; // Jodi show false hoy, tahole kichu show korbe na
  }

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
  // State: Eita control korbe je modal-ta dekhanor dorkar ki na
  const [showModal, setShowModal] = useState(false);

  const handleViewClick = (e) => {
    e.preventDefault(); // Default link behavior bondho korar jonno
    setShowModal(true); // Modal show korar jonno state update
  };
  return (
    // <div className="certifications-grid-section py-5">
    //   <Container>
    //     <h2 className="section-heading text-center mb-5">
    //       Our Certifications & Accreditations
    //     </h2>
    //     <Row className="justify-content-center">
    //       <Col lg={10} xl={9}>
    //         {" "}
    //         {/* Adjust column size to match your grid visual */}
    //         <Row className="cert-grid-inner g-4 justify-content-center">
    //           {" "}
    //           {/* Use g-4 for consistent spacing */}
    //           {certificationsData.map((cert) => (
    //             <Col md={6} sm={12} key={cert.id} className="d-flex">
    //               {" "}
    //               {/* d-flex and h-100 to make cards same height */}
    //               <Card className="flex-fill cert-item-card border-0 shadow-sm">
    //                 {" "}
    //                 {/* flex-fill to take full height */}
    //                 <a
    //                   href={cert.link}
    //                   target="_blank"
    //                   rel="noopener noreferrer"
    //                   className="text-decoration-none text-dark d-flex flex-column align-items-center align-items-md-start"
    //                 >
    //                   <img
    //                     src={cert.logo}
    //                     alt={cert.title}
    //                     className={`cert-logo mb-3 ${
    //                       cert.id === 3 ? "british-council-logo-override" : ""
    //                     }`} // Specific class for BC logo
    //                   />
    //                   <div className="text-center text-md-left w-100">
    //                     <h4 className="cert-title d-flex justify-content-center justify-content-md-start align-items-center gap-1">
    //                       {cert.title}
    //                       <FontAwesomeIcon
    //                         icon={faCheckCircle}
    //                         className="checkmark-icon"
    //                       />
    //                     </h4>
    //                     {cert.linkText && (
    //                       <p className="cert-link-text mt-2 mb-0">
    //                         <span className="font-weight-bold underline-text">
    //                           {cert.linkText}
    //                         </span>
    //                       </p>
    //                     )}
    //                     {cert.detailedPageLink && (
    //                       <p className="cert-link-text mt-2 mb-0">
    //                         <a
    //                           href={cert.detailedPageLink}
    //                           className="font-weight-bold underline-text detailed-link"
    //                         >
    //                           View Certification
    //                         </a>
    //                       </p>
    //                     )}
    //                   </div>
    //                 </a>
    //               </Card>
    //             </Col>
    //           ))}
    //         </Row>
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
    <div className="certificate-container py-5 m-5">
      <div className="logo-section">
        <img
          src={BRITISH_COUNCIL_LOGO}
          alt="British Council Logo"
          className="certificate-logo"
        />
      </div>

      <div className="details-section">
        <p className="certificate-title">
          UK agent and counsellor training Certified
        </p>

        {/* Link: Ekhanei click korle modal khulbe */}
        <a
          href="#" // Proyojonmoto URL dite paren, kintu JS e handle kora hoche
          onClick={handleViewClick}
          className="verification-link text-black"
        >
          View Certification
        </a>
      </div>

      {/* Modal: Eita shudhu tokhon-i show hobe jokhon showModal true hobe */}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)} // Close button ba backdrop click korle bondho hobe
        imageSrc={Certificates}
      />
    </div>
  );
};

export default CertificationsPage;
