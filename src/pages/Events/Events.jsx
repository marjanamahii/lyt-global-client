import React, { useEffect } from "react";

import BlogBg from "../../assets/images/lyt-logo.jpg";
import img1 from "../../assets/images/lyt-logo.jpg";
import img2 from "../../assets/images/lyt-logo.jpg";
import img3 from "../../assets/images/lyt-logo.jpg";
import img4 from "../../assets/images/lyt-logo.jpg";
import img5 from "../../assets/images/lyt-logo.jpg";
import img6 from "../../assets/images/lyt-logo.jpg";
// import img7 from '../../assets/events/event10.jpg'
import img8 from "../../assets/images/lyt-logo.jpg";
// import img7 from '../../assets/events/event10.png'
import img9 from "../../assets/images/lyt-logo.jpg";
import img10 from "../../assets/images/lyt-logo.jpg";
import img11 from "../../assets/images/lyt-logo.jpg";
import img12 from "../../assets/images/lyt-logo.jpg";
import img13 from "../../assets/images/lyt-logo.jpg";
import img14 from "../../assets/images/lyt-logo.jpg";
import img15 from "../../assets/images/lyt-logo.jpg";
import img16 from "../../assets/images/lyt-logo.jpg";
import img17 from "../../assets/images/lyt-logo.jpg";
import img18 from "../../assets/images/lyt-logo.jpg";
import img19 from "../../assets/images/lyt-logo.jpg";
import img20 from "../../assets/images/lyt-logo.jpg";
import img21 from "../../assets/images/lyt-logo.jpg";
import img22 from "../../assets/images/lyt-logo.jpg";
import img23 from "../../assets/images/lyt-logo.jpg";
import img24 from "../../assets/images/lyt-logo.jpg";
import img25 from "../../assets/images/lyt-logo.jpg";
import img26 from "../../assets/images/lyt-logo.jpg";
import img28 from "../../assets/images/lyt-logo.jpg";
import img29 from "../../assets/images/lyt-logo.jpg";
import img30 from "../../assets/images/lyt-logo.jpg";
import img31 from "../../assets/images/lyt-logo.jpg";

// import CountdownTimerOne from "../../Shared/CountdownTimer/CountdownTimerOne/CountdownTimerOne";
// import CountdownTimerTwo from "../../Shared/CountdownTimer/CountdownTimerTwo/CountdownTimerTwo";
// import CountdownTimerThree from "../../Shared/CountdownTimer/CountdownTimerThree/CountdownTimerThree";
// import CountdownTimerFour from "../../Shared/CountdownTimer/CountdownTimerFour/CountdownTimerFour";
import { Link } from "react-router-dom";
import "./Events.css";

const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-5 mb-5">
      <div class="mt-5 container-fluid bg-light bg-gradient shadow ">
        <div
          class="p-4 p-md-5 mb-4 text-white rounded featured"
          style={{
            backgroundColor: "#29a469",
          }}
        >
          <div class="col-md-12 px-0">
            <h1 class="pt-5 display-4 font-italic text-center">
              Events <span class="text-success"></span>
            </h1>
          </div>
        </div>
      </div>

      <div className="text-center pb-3 text-uppercase">
        <h1 className="font-semibold">Upcoming Events</h1>
      </div>
      <div class="container">
        <div class="row">
          <div class="card col-md-12 p-3">
            <div class="row ">
              <div class="col-md-4">
                <img class="w-100" src={img29} alt="" />
              </div>

              <div class="col-md-8">
                <div class="card-block">
                  <h6 class="card-title">
                    {" "}
                    🎓 <b>Higher Education Education Fair in Sylhet</b>{" "}
                  </h6>

                  <p>
                    Ready to turn your doubts into dreams? Join us at the Higher
                    Education Education Fair 2025! ✨ Here's a unique
                    opportunity for you to clear all your doubts with{" "}
                    <b>university experts!</b> 🎓
                  </p>

                  <p>
                    <b>🗺️ Location:-</b> <b>Hotel Star Pecific</b>
                  </p>
                  <p>
                    <b>📞 Contact- +0000000000000</b>
                  </p>
                  <p>
                    <b>
                      Date: <span className="newsWeight">20th March</span>, 2025
                    </b>
                  </p>
                  {/* <p><b>⏰ Time: 10:00am - 02:00pm</b></p> */}
                  {/* <p>Entry- FREE ! (Registration Required)</p> */}

                  <button
                    class="eventRegBtn glow-on-hover"
                    type="button"
                    disabled
                  >
                    <Link className="eventRegBtn" to="/register">
                      APPLY NOW
                    </Link>
                  </button>
                  <div className="mt-3 ">
                    {/* <span style={{ fontWeight: "800", }} className='text-white bg-danger text-center rounded mt-3 font-weight-bold p-1'>Registration Over</span > */}
                    {/* <CountdownTimerFour /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
