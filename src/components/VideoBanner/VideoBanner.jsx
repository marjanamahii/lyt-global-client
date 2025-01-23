/* eslint-disable no-unused-vars */
import React from "react";
import "./VideoBanner.css";
import vidBg2 from "../../assets/vid/bannervid.mp4";
import { ImFacebook } from "react-icons/im";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
// import { AiOutlineTwitter } from 'react-icons/ai';
import { RiTwitterXLine } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
// import { Link, NavLink } from "react-router-dom";

const VideoBanner = () => {
  return (
    <div>
      <section className="showcase">
        <video src={vidBg2} muted loop autoPlay />
        <div className="overlay"></div>
        <div className="text">
          <h1>Start Your </h1>
          <h3>Path to Global Education</h3>
          <p>
            We take pride in our ability to help students achieve their academic
            goals and succeed in life.
          </p>

          {/* "ineed to add doamin here/registration/"  */}
          <a href="/registration" rel="noreferrer">
            <button className="glow-on-hover vidHeaderBtn">Apply Now</button>
          </a>
        </div>
        <ul className="social">
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61562034145449"
              target="_blank"
              rel="noreferrer"
            >
              <ImFacebook style={{ fontSize: "46px", color: "#261919" }} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/lyt-global/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineLinkedin
                style={{ fontSize: "46px", color: "#261919" }}
              />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default VideoBanner;
