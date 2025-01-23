/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import HeaderNav from "../Shared/HeaderNav/HeaderNav";
// import BlogBg from "../../assets/blogBg.jpg";
import u1 from "../../assets/unilist/uni1.png";
import i1 from "../../assets/images/lyt-logo.jpg";
import i2 from "../../assets/images/lyt-logo.jpg";
import i3 from "../../assets/images/lyt-logo.jpg";
import i4 from "../../assets/images/lyt-logo.jpg";
import i5 from "../../assets/images/lyt-logo.jpg";
import i6 from "../../assets/images/lyt-logo.jpg";
import i7 from "../../assets/images/lyt-logo.jpg";
import i8 from "../../assets/images/lyt-logo.jpg";
import i9 from "../../assets/images/lyt-logo.jpg";
import i10 from "../../assets/images/lyt-logo.jpg";
import i11 from "../../assets/images/lyt-logo.jpg";
// import i12 from '../../assets/Uni Logo update/12.png'
import i13 from "../../assets/images/lyt-logo.jpg";
import i14 from "../../assets/images/lyt-logo.jpg";
import i15 from "../../assets/images/lyt-logo.jpg";
import i16 from "../../assets/images/lyt-logo.jpg";
// import i17 from '../../assets/Uni Logo update/17.png'
import i18 from "../../assets/images/lyt-logo.jpg";
import i19 from "../../assets/images/lyt-logo.jpg";
import i20 from "../../assets/images/lyt-logo.jpg";
import i21 from "../../assets/images/lyt-logo.jpg";
import i22 from "../../assets/images/lyt-logo.jpg";
import i23 from "../../assets/images/lyt-logo.jpg";
import i24 from "../../assets/images/lyt-logo.jpg";
import i25 from "../../assets/images/lyt-logo.jpg";
import i26 from "../../assets/images/lyt-logo.jpg";
import i27 from "../../assets/images/lyt-logo.jpg";
import i28 from "../../assets/images/lyt-logo.jpg";
import i29 from "../../assets/images/lyt-logo.jpg";
import i30 from "../../assets/images/lyt-logo.jpg";
import i31 from "../../assets/images/lyt-logo.jpg";
import i32 from "../../assets/images/lyt-logo.jpg";
// import i33 from '../../assets/Uni Logo update/33.png'
import i34 from "../../assets/images/lyt-logo.jpg";
import i35 from "../../assets/images/lyt-logo.jpg";
import i36 from "../../assets/images/lyt-logo.jpg";
import i37 from "../../assets/images/lyt-logo.jpg";
import i38 from "../../assets/images/lyt-logo.jpg";
import i39 from "../../assets/images/lyt-logo.jpg";
import i40 from "../../assets/images/lyt-logo.jpg";
import i41 from "../../assets/images/lyt-logo.jpg";
import i42 from "../../assets/images/lyt-logo.jpg";
import i43 from "../../assets/images/lyt-logo.jpg";
import i44 from "../../assets/images/lyt-logo.jpg";
import i45 from "../../assets/images/lyt-logo.jpg";
import i46 from "../../assets/images/lyt-logo.jpg";
import i47 from "../../assets/images/lyt-logo.jpg";
import i48 from "../../assets/images/lyt-logo.jpg";
import i49 from "../../assets/images/lyt-logo.jpg";
import i50 from "../../assets/images/lyt-logo.jpg";
// solent, cantebery, robert
import i51 from "../../assets/images/lyt-logo.jpg";
import i52 from "../../assets/images/lyt-logo.jpg";
import i53 from "../../assets/images/lyt-logo.jpg";
import i54 from "../../assets/images/lyt-logo.jpg";
import i55 from "../../assets/images/lyt-logo.jpg";

// import s1 from "../../assets/Uni Logo update/studyGroup/s1.svg";
import s1 from "../../assets/images/lyt-logo.jpg";
import s2 from "../../assets/images/lyt-logo.jpg";
import s3 from "../../assets/images/lyt-logo.jpg";
import s4 from "../../assets/images/lyt-logo.jpg";
import s5 from "../../assets/images/lyt-logo.jpg";
import s6 from "../../assets/images/lyt-logo.jpg";
import s7 from "../../assets/images/lyt-logo.jpg";
import s8 from "../../assets/images/lyt-logo.jpg";
import s9 from "../../assets/images/lyt-logo.jpg";
import s10 from "../../assets/images/lyt-logo.jpg";
import s11 from "../../assets/images/lyt-logo.jpg";
import s12 from "../../assets/images/lyt-logo.jpg";
import s13 from "../../assets/images/lyt-logo.jpg";
import s14 from "../../assets/images/lyt-logo.jpg";
import s15 from "../../assets/images/lyt-logo.jpg";
import s16 from "../../assets/images/lyt-logo.jpg";
import s17 from "../../assets/images/lyt-logo.jpg";
import s18 from "../../assets/images/lyt-logo.jpg";
import s19 from "../../assets/images/lyt-logo.jpg";
import s20 from "../../assets/images/lyt-logo.jpg";
import s21 from "../../assets/images/lyt-logo.jpg";
import s22 from "../../assets/images/lyt-logo.jpg";
import s23 from "../../assets/images/lyt-logo.jpg";
import s24 from "../../assets/images/lyt-logo.jpg";
import s25 from "../../assets/images/lyt-logo.jpg";
import s26 from "../../assets/images/lyt-logo.jpg";
import s27 from "../../assets/images/lyt-logo.jpg";
import s28 from "../../assets/images/lyt-logo.jpg";
import s29 from "../../assets/images/lyt-logo.jpg";
import s30 from "../../assets/images/lyt-logo.jpg";
// navitas
import n1 from "../../assets/images/lyt-logo.jpg";
import n2 from "../../assets/images/lyt-logo.jpg";
import n3 from "../../assets/images/lyt-logo.jpg";
// import n3 from "../../assets/Uni Logo update/navitas/3.jpg";
import n4 from "../../assets/images/lyt-logo.jpg";
import n5 from "../../assets/images/lyt-logo.jpg";
// qa
import q1 from "../../assets/images/lyt-logo.jpg";
import q2 from "../../assets/images/lyt-logo.jpg";
import q3 from "../../assets/images/lyt-logo.jpg";
import q4 from "../../assets/images/lyt-logo.jpg";
import q5 from "../../assets/images/lyt-logo.jpg";
import q6 from "../../assets/images/lyt-logo.jpg";
import q7 from "../../assets/images/lyt-logo.jpg";

//new

import { Accordion, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Universities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-2">
      <HeaderNav></HeaderNav>
      <div className="mt-5 container-fluid bg-light bg-gradient shadow ">
        <div
          className="p-4 p-md-5 mb-4 text-white rounded featured"
          style={{
            // backgroundImage: `url(${BlogBg})`,
            backgroundColor: "#29a469",
          }}
        >
          <div className="col-md-12 px-0">
            <h1 className="pt-5 display-4 font-italic text-center">
              Universities <span className="text-success"></span>
            </h1>
          </div>
        </div>
      </div>

      <div className="grey-bg container">
        <section id="minimal-statistics">
          <div className="row">
            <div className="col-12 mt-3 mb-1">
              <h4 className="text-uppercase text-center font-semibold">
                Our Universities
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={u1} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Bangor University is steeped in history and offers
                        excellent teaching. We are renowned for our
                        world-leading research and our lecturers are experts in
                        their ...
                      </p>
                      <a
                        href="https://www.bangor.ac.uk/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i1} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        We combine research with teaching, community with
                        industry and heritage with innovation. Spark change and
                        make a lasting difference with flexible, research-led
                        degrees.
                      </p>
                      <a
                        href="https://www.abdn.ac.uk/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i2} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Find out more about studying an undergraduate or
                        postgraduate degree course at ARU, in Chelmsford,
                        Cambridge, Peterborough and London.
                      </p>
                      <a
                        href="https://www.aru.ac.uk/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i4} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Bath Spa University London is our new campus in Hackney
                        and is part of our higher education community. ·
                        Flexible studying · Inspiring teaching · Dynamic
                        learning.
                      </p>
                      <a
                        href="https://www.bathspa.ac.uk/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i5} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Welcome to the University of Bedfordshire. Find
                        information on all our courses including applying
                        through UCAS for undergraduate courses, postgraduate,
                        ...
                      </p>
                      <a
                        href="https://www.beds.ac.uk/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i6} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        A world top 100 university and part of the prestigious
                        Russell Group, the University of Birmingham makes
                        important things happen.
                      </p>
                      <a
                        href="https://www.birmingham.ac.uk/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i7} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        At Birmingham City University, we have invested £340
                        million transforming our campus and facilities and are
                        committed to giving you the skills you need to ...
                      </p>
                      <a
                        href="https://www.bcu.ac.uk/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i8} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Study a wide range of college, undergraduate and
                        postgraduate degree courses and higher level
                        apprenticeships at University College Birmingham (UCB).
                      </p>
                      <a
                        href="https://www.ucb.ac.uk/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i52} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Find your perfect course at a supportive, friendly
                        university ranked 1se in the UK for graduates in
                        employment (HESA: Graduate Outcomes 2023).
                      </p>
                      <a
                        href="https://www.canterbury.ac.uk/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i9} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        We are a thriving multi-campus university in the south
                        of England, UK. Explore our subjects and search for
                        undergraduate or postgraduate degree courses.
                      </p>
                      <a
                        href="https://www.brighton.ac.uk/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i10} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Cardiff Metropolitan University, UK & Ireland University
                        of the Year 2021*. Times Higher Education Awards.
                        Located in the lively capital city of Wales.
                      </p>
                      <a
                        href="https://www.cardiffmet.ac.uk/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i11} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Official Coventry University Details with information
                        about undergraduate degrees, postgraduate degrees,
                        student recruitment, the academic schools, ...
                      </p>
                      <a
                        href="https://www.coventry.ac.uk/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i49} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Join us at Coventry University London. Immerse yourself
                        in Coventry University Londons global community and
                        emerge as a talented, career-ready graduate ...
                      </p>
                      <a
                        href="https://www.coventry.ac.uk/london/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i54} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Career-focused online college with hybrid & online
                        degree programs in Business, Tech & Health. 80+ college
                        classNamees at DeVry University & Keller.
                      </p>
                      <a
                        href="https://www.devry.edu/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i13} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        A UK University offering more than 300 courses at
                        Bachelors and Masters level. Find out more about life at
                        De Montfort University for International students. First
                        className Support.
                      </p>
                      <a
                        href="https://www.dmu.ac.uk/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i14} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Derby College is one of the University’s collaborative
                        partners based in the UK. Find your place with us
                        through Clearing.
                      </p>
                      <a
                        href="https://www.derby.ac.uk/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i15} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Apply To The University Of Dundee, Your Best Choice For
                        Undergraduate Study. An Amazing Student Experience
                        Coupled With High Quality Teaching. Exercise Studios.
                      </p>
                      <a
                        href="https://www.dundee.ac.uk/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i16} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        The University of East Anglia is a home for everyone, a
                        champion of interdisciplinarity that stands for equal
                        opportunity in higher education.
                      </p>
                      <a
                        href="https://www.uea.ac.uk/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i18} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Abertay University Dundee: Sunday Times University of
                        the Year for Teaching Quality 2021. Browse our diverse
                        range of courses and begin your journey today.
                      </p>
                      <a
                        href="https://www.abertay.ac.uk/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i19} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        The University of Exeter in Exeter, Devon, and Falmouth,
                        Cornwall, UK, offers research and study in sciences,
                        social sciences, business, humanities and ...
                      </p>
                      <a
                        href="https://www.exeter.ac.uk/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i20} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Our Dedicated Team Are Happy To Help With Any Queries
                        Regarding Your Application At GCU. Award-Winning Support
                        For International Students At The University. Apply
                        Today.
                      </p>
                      <a
                        href="https://www.gcu.ac.uk/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i21} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Study at University of Gloucestershire. ... Discover our
                        courses. ... Our international offering is ranked in the
                        top 15 in the UK according to the Whatuni ...
                      </p>
                      <a
                        href="https://www.glos.ac.uk/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i22} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        The University of Hertfordshire offers a wide range of
                        Undergraduate, Postgraduate, Professional and Short
                        courses. One of the top 200 universities in the ...
                      </p>
                      <a
                        href="https://www.herts.ac.uk/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i23} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        University of Huddersfield - A university that is
                        inspiring global professionals. TEF Gold Award and Times
                        Higher Education University of Year 2013.
                      </p>
                      <a
                        href="https://www.hud.ac.uk/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i55} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        At Jessup University we believe an exceptional education
                        should go hand-in-hand with your faith. We want you to
                        graduate sure of yourself.
                      </p>
                      <a
                        href="https://jessup.edu/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i24} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Manchester Met offers dedicated support and work
                        placements on a range of courses. Be part of a proud
                        history of higher education in Manchester since 1824.
                        Masters programmes.
                      </p>
                      <a
                        href="https://www.mmu.ac.uk/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i25} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        USW is in an exceptional part of the UK, with city life,
                        mountains and coast. With campuses in Cardiff, Newport
                        and Pontypridd, you can enjoy all that south ...
                      </p>
                      <a
                        href="https://www.southwales.ac.uk/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i26} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        We are a world-className, Global Top 125 university
                        dedicated to excellence, creativity, and innovation
                        through our teaching and pioneering research.
                      </p>
                      <a
                        href="https://www.ncl.ac.uk/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i50} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Newcastle University Business School delivered a range
                        of programmes to a UK and international community of
                        talented postgraduate, undergraduate and pre-degree ...
                      </p>
                      <a
                        href="https://www.ncl.ac.uk/london/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i27} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        En Suite Rooms and Budget-Friendly Options. From £79.80
                        Per Week. Rent Includes All Bills. Starting Uni In 2023?
                        We Guarantee Accommodation To All Northumbria
                        University.
                      </p>
                      <a
                        href="https://www.northumbria.ac.uk/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i28} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        The University of Nottingham is a pioneering
                        institution. We are a top 20 UK university and 8th in
                        the UK for research power. We are working to change the
                      </p>
                      <a
                        href="https://www.nottingham.ac.uk/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i29} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        An incredible place to study. Student life. The best in
                        the UK - voted for by students (Whatuni 2022). Our
                        graduate promise. Employability support after you ...
                      </p>
                      <a
                        href="https://www.ntu.ac.uk/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i30} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        A prestigious Russell Group UK university, Queens
                        University Belfast is ranked in the top 200 universities
                        in the world. THE World University Rankings ...
                      </p>
                      <a
                        href="https://www.qub.ac.uk/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i51} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Aberdeens RGU is the Scottish University of the Year
                        2021. A top university in Scotland for graduate
                        prospects, with an international reputation for ...
                      </p>
                      <a
                        href="https://www.rgu.ac.uk/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i31} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Discover the University of Reading, a global university
                        that enjoys a world-className reputation for teaching,
                        research and enterprise.
                      </p>
                      <a
                        href="https://www.reading.ac.uk/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 col-12">
              <div className=" d-flex">
                <Accordion alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <img className="w-50" src={i32} alt="" />
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Browse by subject area · Accounting and Finance ·
                        Applied Science · Art and Design · Biological Sciences ·
                        Business and Management · Chemistry · Computer Science
                        ...
                      </p>
                      <a
                        href="https://www.chester.ac.uk/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="primaryBtn"
                      >
                        Details
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Universities;
