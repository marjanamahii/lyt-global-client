import React from "react";

const ImpactSection = () => {
  return (
    <section className="py-5" style={{ background: "#f4f7f6" }}>
      <div className="container text-center">
        <h2 className="mb-3 fw-bold" style={{ fontSize: "40px" }}>
          Our Global Impact & Reach
        </h2>

        <div
          style={{
            width: "80px",
            height: "4px",
            background: "var(--primaryClr)",
            margin: "0 auto 20px auto",
          }}
        ></div>

        <p className="mb-5">
          With years of expertise and a global network, we've helped thousands
          achieve their international education and business goals
        </p>

        <div className="row g-4">
          <div className="col-md-3">
            <div className="p-4 shadow rounded-4 bg-white">
              <h3 className="fw-bold text-success display-5">2</h3>
              <p className="fw-semibold">Global Offices</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-4 shadow rounded-4 bg-white">
              <h3 className="fw-bold text-success display-5">20+</h3>
              <p className="fw-semibold">Global Counsellors</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-4 shadow rounded-4 bg-white">
              <h3 className="fw-bold text-success display-5">200+</h3>
              <p className="fw-semibold">University Partners</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-4 shadow rounded-4 bg-white">
              <h3 className="fw-bold text-success display-5">20,000+</h3>
              <p className="fw-semibold">Courses Offered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
