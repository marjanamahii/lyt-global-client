/* eslint-disable no-unused-vars */
import React from "react";
import "./CounterSection.css";
import CountUp from "react-countup";
import Container from "react-bootstrap/Container";
import { FaBuilding } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { MdCountertops } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";

const CounterSection = () => {
  return (
    <Container fluid>
      <div className="Services-section">
        <div className="inner-width">
          <div className="Services-container">
            <div className="service-box">
              <div className="service-icon">
                <FaBuilding className="myServiceFont" />
              </div>
              <div className="service-title">
                <font>
                  <font>Global Offices</font>
                </font>
              </div>
              <div className="service-title-one">
                <font>
                  <font>
                    <CountUp delay={3} end={2} />
                  </font>
                </font>
              </div>
            </div>
            <div className="service-box ">
              <div className="service-icon">
                <FaChalkboardTeacher className="myServiceFont" />
              </div>
              <div className="service-title">
                <font>
                  <font>Global Counsellors</font>
                </font>
              </div>
              <div className="service-title-one">
                <font>
                  <font>
                    <CountUp delay={3} end={10} />+
                  </font>
                </font>
              </div>
            </div>
            <div className="service-box ">
              <div className="service-icon">
                <FaGraduationCap className="myServiceFont" />
              </div>
              <div className="service-title">
                <font>
                  <font>UK Education Fair</font>
                </font>
              </div>
              <div className="service-title-one">
                <font>
                  <font>
                    <CountUp delay={3} end={100} />+
                  </font>
                </font>
              </div>
            </div>
            <div className="service-box ">
              <div className="service-icon">
                <MdCountertops className="myServiceFont" />
              </div>
              <div className="service-title">
                <font>
                  <font>Virtual Events/Seminars</font>
                </font>
              </div>
              <div className="service-title-one">
                <font>
                  <font>
                    <CountUp delay={3} end={100} />+
                  </font>
                </font>
              </div>
            </div>
            <div className="service-box ">
              <div className="service-icon">
                <FaUniversity className="myServiceFont" />
              </div>
              <div className="service-title">
                <font>
                  <font>Recruiting University</font>
                </font>
              </div>
              <div className="service-title-one">
                <font>
                  <font>
                    <CountUp delay={3} end={150} />+
                  </font>
                </font>
              </div>
            </div>
            <div className="service-box ">
              <div className="service-icon">
                <BiBook className="myServiceFont" />
              </div>
              <div className="service-title">
                <font>
                  <font>Courses Offered</font>
                </font>
              </div>
              <div className="service-title-one">
                <font>
                  <font>
                    <CountUp delay={3} end={100} />+
                  </font>
                </font>
              </div>
            </div>
            <div className="service-box ">
              <div className="service-icon">
                <FaUserGraduate className="myServiceFont" />
              </div>
              <div className="service-title">
                <font>
                  <font>Student Served</font>
                </font>
              </div>
              <div className="service-title-one">
                <font>
                  <font>
                    <CountUp delay={3} end={100} />+
                  </font>
                </font>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CounterSection;
