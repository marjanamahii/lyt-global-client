import React, { useState } from "react";

const SuccessStep = ({ number, title, desc }) => (
  <div className="col-12 col-lg text-center px-3 mb-4 mb-lg-0">
    <div className="position-relative d-inline-block mb-3">
      {/* Number Circle */}
      <div
        className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold shadow-sm"
        style={{
          width: "45px",
          height: "45px",
          backgroundColor: "var(--lyt-primary)",
          fontSize: "18px",
          zIndex: 2,
          position: "relative",
        }}
      >
        {number}
      </div>
    </div>
    <h5
      className="fw-bold mb-2"
      style={{ color: "var(--lyt-dark-green)", fontSize: "15px" }}
    >
      {title}
    </h5>
    <p
      className="text-muted mx-auto"
      style={{ fontSize: "11px", lineHeight: "1.5", maxWidth: "180px" }}
    >
      {desc}
    </p>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-3 rounded-2 shadow-sm bg-white overflow-hidden border-0">
      <button
        className="w-100 p-3 d-flex justify-content-between align-items-center border-0 bg-white"
        onClick={() => setIsOpen(!isOpen)}
        style={{ transition: "all 0.3s ease" }}
      >
        <span
          className="fw-bold text-start"
          style={{ color: "var(--lyt-dark-green)", fontSize: "13px" }}
        >
          {question}
        </span>
        <i
          className={`bi ${isOpen ? "bi-dash" : "bi-plus"} fs-5`}
          style={{ color: "var(--lyt-primary)" }}
        ></i>
      </button>
      {isOpen && (
        <div className="px-3 pb-3 text-start pt-1">
          <p
            className="mb-0 text-muted"
            style={{
              fontSize: "12px",
              borderTop: "1px solid #eee",
              paddingTop: "10px",
            }}
          >
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

const ProcessAndFAQ = () => {
  const steps = [
    {
      number: 1,
      title: "Initial Consultation",
      desc: "We understand your goals, background, and preferences through a detailed assessment session.",
    },
    {
      number: 2,
      title: "Personalised Plan",
      desc: "We create a customized roadmap with university/business options, timelines, and requirements.",
    },
    {
      number: 3,
      title: "Application & Documentation",
      desc: "We handle all paperwork, applications, and documentation with meticulous attention to detail.",
    },
    {
      number: 4,
      title: "Interview Preparation",
      desc: "We prepare you for interviews and tests with mock sessions and guidance.",
    },
    {
      number: 5,
      title: "Post-Acceptance Support",
      desc: "We assist with accommodation, travel, orientation, and ongoing support after acceptance.",
    },
  ];

  const faqs = [
    {
      q: "What services does Lyt Global offer for students?",
      a: "Lyt Global offers a comprehensive range of services including university selection and application support, scholarship opportunities, career and education counseling, accommodation assistance, and travel support. We provide end-to-end guidance from initial consultation to post-arrival support.",
    },
    {
      q: "Which countries does Lyt Global specialize in for business consultancy?",
      a: "For business consultancy, we focus on Bangladesh, the United Kingdom, the United States, and Ireland. We provide localized expertise in these markets including HR auditing, workplace compliance, counselling services, and business plan development.",
    },
    {
      q: "Are your services free of charge?",
      a: "Many of our student services, such as application support and general consulting, are free of charge as we work directly with universities. Specialized services, like business consultancy, may involve a fee. We're transparent about all costs from the beginning – contact us for a detailed breakdown based on your specific needs.",
    },
    {
      q: "How do I get started with Lyt Global business services?",
      a: "Getting started with our business services is simple! Contact us through our website, email, or phone to schedule a consultation. We'll discuss your business needs, challenges, and goals to create a customized plan. Our business consultancy is available in Bangladesh, UK, USA, and Ireland with local experts in each market.",
    },
  ];

  return (
    <>
      {/* 5-Step Process Section */}
      <section className="py-5 bg-white">
        <div className="container text-center py-4">
          <h2
            className="fw-bold mb-3"
            style={{ color: "var(--lyt-dark-green)", fontSize: "24px" }}
          >
            Our{" "}
            <span
              style={{
                borderBottom: "3px solid var(--lyt-primary)",
                paddingBottom: "5px",
              }}
            >
              5-Step Success
            </span>{" "}
            Process
          </h2>
          <p
            className="text-muted mb-5 mx-auto"
            style={{ fontSize: "13px", maxWidth: "500px" }}
          >
            We follow a structured, proven approach to ensure your success in
            global education or business expansion.
          </p>

          <div className="position-relative">
            {/* Horizontal Line Connector (Hidden on Mobile) */}
            <div
              className="d-none d-lg-block position-absolute"
              style={{
                top: "22px",
                left: "10%",
                right: "10%",
                height: "2px",
                backgroundColor: "var(--lyt-primary)",
                zIndex: 1,
              }}
            ></div>

            <div className="row g-0">
              {steps.map((s) => (
                <SuccessStep key={s.number} {...s} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5" style={{ backgroundColor: "var(--lyt-bg)" }}>
        <div className="container text-center py-4">
          <h2
            className="fw-bold mb-3 d-inline-block pb-2"
            style={{
              color: "var(--lyt-dark-green)",
              fontSize: "24px",
              borderBottom: "3px solid var(--lyt-primary)",
            }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-muted mb-5 mt-3" style={{ fontSize: "13px" }}>
            Find answers to common questions about our services and processes.
          </p>

          <div className="mx-auto" style={{ maxWidth: "750px" }}>
            {faqs.map((f, i) => (
              <FAQItem key={i} question={f.q} answer={f.a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessAndFAQ;
