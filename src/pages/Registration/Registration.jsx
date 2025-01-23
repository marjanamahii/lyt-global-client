/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import bg from "../../assets/images/lyt-logo.jpg";
import Footer from "../../components/Shared/Footer/Footer";
import HeaderNav from "../../components/Shared/HeaderNav/HeaderNav";
// import FormRegistration from "../../Shared/Form/FormRegistration/FormRegistration";
import { useState } from "react";
const Registration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div>
      <HeaderNav></HeaderNav>
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
              Registration <span className="text-success"></span>
            </h1>
          </div>
        </div>
      </div>
      {/* <FormRegistration/> */}
      {/* this is for test */}
      {/* <div style={{ position: 'relative', width: '100%', height: 0, paddingBottom: '56.25%', overflow: 'hidden' }}>
                <iframe
                    src="https://app.shabujglobal.com/registration/student"
                    style={{ position: 'absolute', width: '100%', height: '100%', left: 0, top: 0 }}
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                >
                    Loading…
                </iframe>
            </div> */}

      {/* CRM link */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "1500px",
          paddingBottom: "56.25%",
        }}
      >
        {loading && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
            }}
          >
            <p>Loading.....</p>
          </div>
        )}
        <iframe
          src="https://app.shabujglobal.com/registration/student"
          scrolling="no"
          style={{
            position: "absolute",
            width: "100%",
            height: "1500px",
            left: 0,
            top: 0,
          }}
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          onLoad={handleLoad}
        >
          Loading…
        </iframe>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Registration;

/*

import React, { useEffect } from 'react';
import bg from '../../assets/blogBg.jpg'
import Footer from '../Footer/Footer';
import HeaderNav from '../HeaderNav/HeaderNav';
import FormRegistration from '../../Shared/Form/FormRegistration/FormRegistration';
import { useState } from 'react';

const Registration = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.overflow = 'hidden'; // Add this line to disable mobile scrolling
        return () => {
            document.body.style.overflow = 'auto'; // Add this line to enable scrolling when the component is unmounted
        }
    }, []);

    const [loading, setLoading] = useState(true);

    const handleLoad = () => {
        setLoading(false);
    }

    return (
        <div>
            <HeaderNav></HeaderNav>
            <div class="container-fluid mt-5 bg-light bg-gradient shadow ">

                <div class="p-4 p-md-5 mb-4 text-white rounded featured" style={{
                    backgroundImage: `url(${bg})`,
                }}>
                    <div class="col-md-12 px-0">
                        <h1 class="pt-5 display-4 font-italic text-center">Registration <span class="text-success"></span></h1>
                    </div>
                </div>
            </div>

    
            <div style={{ position: 'relative', width: '100%', height: 0, paddingBottom: '56.25%' }}>
                {loading && (
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                        <p>Loading...</p>
                    </div>
                )}
                <iframe
                    src="https://app.shabujglobal.com/registration/student"
                    style={{ position: 'absolute', width: '100%', height: '100%', left: 0, top: 0 }}
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    onLoad={handleLoad}

                >
                    Loading…
                </iframe>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Registration;







*/
