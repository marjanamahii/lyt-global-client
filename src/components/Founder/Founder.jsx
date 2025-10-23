import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
// 🚨 Path adjust korte hobe. Jemon aage bola hoyeche: import NahidulIslamPhoto from "../../../assets/images/nahidul-islam.jpg";
import NahidulIslamPhoto from "../../assets/images/nahidul-islam.jpg";
import "./Founder.css";

function Founder() {
  const nahidulData = {
    name: "Nahidul Islam",
    title: "Proprietor, LYT GLOBAL",
    established: 2023,
    image: NahidulIslamPhoto,
    // Leadership Vision points
    principles: [
      "Integrity: Building business relationships through honesty, responsibility, and professionalism.",
      "Innovation: Continuously evolving with technology and market demands to stay relevant and effective.",
      "Impact: Delivering outcomes that create lasting value for clients, communities, and society.",
    ],
  };

  return (
    <div className="founder-profile-page py-5">
      <Container>
        {/* Shob content ke ekta single column-e justify kora holo */}
        <Row className="justify-content-center">
          <Col lg={9} md={10} sm={12}>
            {/* === 1. PHOTO AND BASIC INFO (Upore) === */}
            <div className="text-center mb-5 founder-intro-section">
              <img
                src={nahidulData.image}
                alt={nahidulData.name}
                className="profile-photo img-fluid shadow-lg"
              />
              <h2 className="mt-3 founder-name">{nahidulData.name}</h2>
              <p className="founder-title">{nahidulData.title}</p>
              <p className="established-info">
                Established Business: <strong>{nahidulData.established}</strong>
              </p>
            </div>

            {/* === 2. PROFILE OVERVIEW (Full Width) === */}
            <h3 className="section-heading">Profile Overview</h3>
            <p className="profile-text">
              Nahidul Islam is a visionary young entrepreneur from Sylhet,
              Bangladesh — a city renowned for its natural beauty, cultural
              harmony, and entrepreneurial spirit. He is the Founder and
              Proprietor of LYT GLOBAL, a rapidly growing international
              consultancy firm that operates across the United Kingdom, Canada,
              the United States, Malaysia, Australia, the United Arab Emirates,
              and Europe.
            </p>
            <p className="profile-text mb-4">
              With a mission to redefine trust and accuracy in the global
              service industry, Nahidul established LYT GLOBAL in 2023 to
              deliver professional consultancy services in education, business
              development, and skill enhancement. His leadership has positioned
              the company as a reliable and value-driven organisation that
              empowers individuals and businesses to achieve global success.
            </p>

            <hr className="my-5" />

            {/* === 3. ENTREPRENEURIAL JOURNEY & LEADERSHIP VISION (Por Por) === */}

            <h3 className="section-heading">Entrepreneurial Journey</h3>
            <p>
              Nahidul began his business career with a clear vision — to create
              a consultancy brand rooted in integrity, innovation, and
              measurable results. Witnessing the challenges faced by students,
              professionals, and startups in navigating global opportunities, he
              built LYT GLOBAL as a solution-oriented firm committed to
              transparency and client satisfaction.
            </p>
            <p className="mb-4">
              Under his dynamic leadership, a dedicated and visionary team
              operates from multiple countries, ensuring seamless coordination
              and consistent service quality across borders. This global
              structure reflects LYT GLOBAL’s founding principles of Trust and
              Accuracy, setting new benchmarks in the consultancy industry.
            </p>

            <h3 className="section-heading mt-5">Leadership Vision</h3>
            <p>
              Nahidul Islam believes that the foundation of lasting success lies
              in ethical leadership and meaningful impact. His management
              philosophy revolves around three key principles:
            </p>
            <ul className="vision-list mb-4">
              {nahidulData.principles.map((p, index) => (
                <li key={index}>{p}</li>
              ))}
            </ul>

            <hr className="my-5" />

            {/* === 4. COMMUNITY & FUTURE OUTLOOK (Por Por) === */}

            <h3 className="section-heading">
              Community Engagement & Social Responsibility
            </h3>
            <p>
              Beyond his business pursuits, Nahidul Islam is a passionate
              volunteer and social contributor dedicated to community
              development and humanitarian causes. He actively participates in
              social welfare programs and regularly engages in initiatives that
              promote education, health, and youth empowerment.
            </p>
            <p className="mb-4">
              A frequent blood donor, Nahidul has donated blood many times and
              continually inspires others to take part in life-saving acts of
              generosity. Through LYT GLOBAL’s Corporate Social Responsibility
              (CSR) initiatives, Nahidul personally invests in community
              upliftment, educational support, and youth capacity-building
              projects.
            </p>

            <h3 className="section-heading mt-5">Future Outlook</h3>
            <p>
              With a strong foundation in innovation and ethics, Nahidul Islam
              envisions transforming LYT GLOBAL into one of the most respected
              global consultancy brands originating from Bangladesh. His goal is
              to strengthen international collaboration, enhance digital
              literacy, and expand access to world-class education and
              professional guidance.
            </p>
            <p>
              His efforts reflect a belief that business excellence and social
              responsibility are not separate goals, but complementary forces
              that drive sustainable success.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Founder;
