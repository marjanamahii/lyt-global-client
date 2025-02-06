import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Image,
} from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import Certificates from "../../assets/images/Certificate.jpg";

// Load PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const achievements = [
  {
    type: "image",
    // src: "../../assets/images/Certificate.jpg",
    alt: "Achievement Image 1",
  },
  {
    type: "pdf",
    src: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    alt: "Sample PDF Achievement",
  },
  {
    type: "image",
    src: "https://mie-global-te43fd.s3.amazonaws.com/static/images/achievements-01.original.webp",
    alt: "Achievement Image 3",
  },
];

const Achievements = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);

  const handleViewPdf = (pdfUrl) => {
    setSelectedPdf(pdfUrl);
    setShowModal(true);
  };

  return (
    <Container className="my-5 p-4 bg-white border-bottom border-4 rounded shadow-lg">
      <h2 className="text-dark text-bold text-center pb-3 font-bold">
        Our Achievements
      </h2>
      <p className="text-secondary pb-4">
        We started helping students achieve their dreams in 2024, we've done a
        lot and we've won a lot!
      </p>
      <Image
        className="items-center"
        src={Certificates}
        alt="Mission Image"
        fluid
      />
      {/* <Row className="g-4">
        {achievements.map((item, index) => (
          <Col key={index} md={3} sm={6}>
            <Card className="border-0">
              {item.type === "image" ? (
                <Card.Img
                  src={item.src}
                  alt={item.alt}
                  className="rounded img-fluid shadow-sm"
                />
              ) : (
                <Button
                  className="w-100 text-center btn-primary"
                  onClick={() => handleViewPdf(item.src)}
                >
                  View PDF Achievement
                </Button>
              )}
            </Card>
          </Col>
        ))}
      </Row> */}

      {/* PDF Modal Viewer */}
      {/* <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>PDF Achievement Viewer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedPdf && (
            <Document file={selectedPdf} onLoadError={console.error}>
              <Page pageNumber={1} />
            </Document>
          )}
        </Modal.Body>
      </Modal> */}
    </Container>
  );
};

export default Achievements;
