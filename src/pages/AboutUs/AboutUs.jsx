import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import ourMission from "../../assets/images/ourMission.jpg";
import ourStory from "../../assets/images/ourStory.jpg";
import { FaLightbulb, FaUsers } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import { PiMedalFill } from "react-icons/pi";
import { GiStrong } from "react-icons/gi";
import Achievements from "./Achievements";
import "./AboutUs.css";
import CertificationsPage from "../../components/CertificationsPage/CertificationsPage";
// import Founder from "../../components/Founder/Founder";

// const teamMembers = [
//   { name: "Mst Sharmily Athia Shamme", title: "Director" },
//   { name: "Jabir Ahmed Khan", title: "General Manager" },
//   { name: "Mohammad Nahidur Rahman", title: "HR Officer" },
//   { name: "Sheikh Afif", title: "HR Officer" },
//   { name: "Md Aminul Islam", title: "Business Consultant" },
//   { name: "Deniel Santiago", title: "Business Consultant" },
//   { name: "Christina Argon", title: "Business Consultant" },
//   { name: "Saidur Rahman Khan", title: "Sales Executive" },
//   { name: "Hasnat Khan", title: "Sales Executive" },
//   { name: "Jannatul Reshma", title: "Legal Associate" },
//   { name: "Abdullah Sujon", title: "Legal Associate" },
//   { name: "Shahin Alom Sunny", title: "Student Consultant" },
//   { name: "Iftiker Ahmed Siddiqi", title: "Student Consultant" },
//   { name: "Khayrul Islam", title: "Student Consultant" },
//   { name: "Abdul Wadud", title: "Student Consultant" },
//   { name: "Dulal Ahmed", title: "Student Consultant" },
//   { name: "Farzana Islam", title: "Student Consultant" },
//   { name: "Momin Ahmed", title: "Sales Agent" },
//   { name: "Juwel Ahmed", title: "Sales Agent" },
//   { name: "Marjana Begum", title: "Business Development Executive" },
// ];

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container-fluid mt-5 bg-light bg-gradient shadow ">
        <div
          className="p-4 p-md-5 mb-4 text-white rounded featured"
          style={{
            // backgroundImage: `url(${bg})`,
            backgroundColor: "#29a469",
          }}
        >
          <div className="col-md-12 px-0">
            <h1 className="pt-5 display-4 font-italic text-center">
              About <span className="text-success"></span> Us
            </h1>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="our-mission py-5 text-black">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="mb-4 text-uppercase font-bold">Our Mission</h2>
              <p className="text-black">
                <strong className="font-bold">Mission:</strong> To empower
                students, professionals, and organizations by delivering expert
                consultancy, transformative training, and meaningful support
                that lead to academic, career, and business success. <br />
                <strong className="font-bold">Vision:</strong> To become the
                most trusted global partner in education and innovation
                consultancy by combining integrity, intelligence, and impact in
                everything we do.
              </p>
            </Col>
            <Col md={6}>
              <Image src={ourMission} alt="Mission Image" fluid />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Story Section */}
      <section className="our-story bg-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <Image src={ourStory} alt="Our Story Image" fluid />
            </Col>
            <Col md={6}>
              <h2 className="mb-4 text-uppercase font-bold">Our Story</h2>
              <p className="text-black">
                <strong className="font-bold">Founded in 2024</strong>, LYT
                GLOBAL began as a small initiative with an outsized vision: to
                bridge personal ambition with global opportunity. Our founding
                team recognised a consistent challenge across industries and
                education sectors—people and organisations were navigating major
                life and market decisions with inadequate support, outdated
                advice, or impersonal service. In response, LYT GLOBAL was
                created to fill that void with real expertise, real empathy, and
                real-world impact. <br />
                <br />
                Our origin story is rooted in the concept of trust. The founders
                chose the name “LYT”{" "}
                <strong className="font-bold"> - Live Your Trust</strong> to
                serve as a daily reminder of the values we commit to. It
                signifies more than ethical behaviour; it demands
                accountability, optimism, and results. From visa approvals to
                course selections, from startup advice to AI training, LYT
                GLOBAL brings a consistent value proposition: we are here to
                guide, not just to inform; to build, not just to consult. <br />
                <br />
                Despite being a young company, we have already built an
                international network of students, partners, professionals, and
                institutions. This growth is not accidental; it’s the product of
                client-first thinking, sustainable practice, and a commitment to
                results. LYT GLOBAL is not just scaling, it’s evolving, with
                purpose. company, trusted by thousands to illuminate the path to
                success.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Core Values Section */}
      <section className="our-values py-5">
        <Container>
          <h2 className="text-center mb-5 text-uppercase font-bold">
            Our Core Values
          </h2>
          <Row>
            <Col md={4} className="text-center mb-4">
              <SiTrustpilot />
              <h4 className="mt-3 font-bold">Integrity</h4>
              <p className="text-black">
                We make promises carefully and keep them consistently. Every
                engagement is marked by transparency and accountability.
              </p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <GiStrong />
              <h4 className="mt-3 font-bold">Empowerment</h4>
              <p className="text-black">
                Our goal is to make our clients self-reliant and confident, not
                dependent. We enable smarter decisions.
              </p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <FaLightbulb />
              <h4 className="mt-3 font-bold">Innovation</h4>
              <p className="text-black">
                We adapt quickly to changing markets and needs, continuously
                evolving our services to stay ahead of global trends.
              </p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <FaUsers />
              <h4 className="mt-3 font-bold">Client-Centricity</h4>
              <p className="text-black">
                Every solution is personalized. We reject one-size-fits-all
                models and design experiences based on real needs.
              </p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <PiMedalFill />
              <h4 className="mt-3 font-bold">Excellence</h4>
              <p className="text-black">
                We demand quality in everything—from documentation and advisory
                to training content and client communication.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <section>
        <Founder></Founder>
      </section> */}

      {/* Team Section */}
      {/* <section className="team py-5" style={{ background: "#29a469" }}>
        <Container className="my-5">
          <h2 className="text-center text-white  mb-5">Meet the Team</h2>
          <Row className="justify-content-start">
            {teamMembers.map((member, index) => (
              <Col key={index} md={3} sm={6} className="mb-4">
                <div className="custom-team-card team-member-box text-center p-3 h-100 d-flex flex-column justify-content-center">
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={
                      <Tooltip id={`tooltip-name-${index}`}>
                        {" "}
                        {member.name}
                      </Tooltip>
                    }
                  >
                    <h5 className="mb-1 team-name-display">{member.name}</h5>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={
                      <Tooltip id={`tooltip-title-${index}`}>
                        {" "}
                        {member.title}
                      </Tooltip>
                    }
                  >
                    <p className="text-muted mb-0 team-title-display">
                      {member.title}
                    </p>
                  </OverlayTrigger>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section> */}
      <section>
        <CertificationsPage></CertificationsPage>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta py-5">
        <Container className="text-center">
          <h2 className="mb-4">Let’s Shine Together</h2>
          <p>
            Whether you're a student, a professional, or a Services, Lyt is here
            to help you succeed. Reach out today and discover how we can light
            your way.
          </p>
          <a
            href="/contact"
            style={{ background: "#29a469", color: "white" }}
            className="btn mt-3"
          >
            Get in Touch
          </a>
        </Container>
      </section>
    </div>
  );
};

export default AboutUs;
