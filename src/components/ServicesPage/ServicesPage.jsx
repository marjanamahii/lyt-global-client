import React from "react";

// Reusable Card Component
const ServiceCard = ({ iconClass, title, description, badge }) => (
  <div
    className="h-100 p-4 rounded-4 shadow-sm border-0 text-center flex-column d-flex align-items-center"
    style={{
      backgroundColor: "var(--lyt-card-bg)",
      transition: "all 0.3s ease",
    }}
  >
    {badge && (
      <span
        className="badge rounded-pill mb-3 px-3 py-2 text-uppercase fw-bold"
        style={{
          backgroundColor: "var(--lyt-dark-green)",
          fontSize: "10px",
          letterSpacing: "1px",
        }}
      >
        {badge}
      </span>
    )}
    <div className="mb-3">
      <i
        className={`${iconClass}`}
        style={{ fontSize: "2.5rem", color: "var(--lyt-primary)" }}
      ></i>
    </div>
    <h3
      className="fw-bold mb-2"
      style={{ fontSize: "18px", color: "var(--lyt-dark-green)" }}
    >
      {title}
    </h3>
    <p className="text-muted" style={{ fontSize: "13px", lineHeight: "1.5" }}>
      {description}
    </p>
  </div>
);

const ServicesPage = () => {
  const destinations = [
    {
      title: "United Kingdom",
      badge: "Popular",
      iconClass: "bi bi-bank",
      description:
        "World-renowned universities with centuries of academic excellence.",
    },
    {
      title: "Australia",
      badge: "High Demand",
      iconClass: "bi bi-tree",
      description:
        "Top-ranked institutions with exceptional research opportunities.",
    },
    {
      title: "New Zealand",
      iconClass: "bi bi-brightness-high",
      description:
        "Innovative education system in a beautiful, safe environment.",
    },
    {
      title: "Cyprus",
      badge: "High Content",
      iconClass: "bi bi-globe",
      description:
        "Affordable European education with Mediterranean lifestyle.",
    },
    {
      title: "Ireland",
      iconClass: "bi bi-plus-lg",
      description:
        "European hub for technology, pharmaceuticals, and business.",
    },
    {
      title: "Malta",
      iconClass: "bi bi-hospital",
      description: "English-speaking EU country with growing education sector.",
    },
    {
      title: "Finland",
      iconClass: "bi bi-book",
      description:
        "World-leading education system with innovative teaching methods.",
    },
    {
      title: "Malaysia",
      iconClass: "bi bi-building",
      description:
        "Affordable Asian destination with international university branches.",
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: "var(--lyt-bg)" }}>
      <div className="container">
        {/* Section 1 Header */}
        <div
          className="text-center mb-5"
          id="student-services"
          style={{ scrollMarginTop: "100px" }}
        >
          <h2
            className="fw-bold mb-3"
            style={{ color: "var(--lyt-dark-green)", fontSize: "28px" }}
          >
            Student Services & Education Support
          </h2>
          <p
            className="body-text mx-auto opacity-75"
            style={{ maxWidth: "650px" }}
          >
            Comprehensive services to help you achieve your international
            education goals.
          </p>
          <button
            className="btn mt-4 px-4 py-2 rounded-pill text-white fw-bold d-inline-flex align-items-center"
            style={{ backgroundColor: "var(--lyt-dark-green)", border: "none" }}
          >
            <i className="bi bi-globe me-2"></i> Study Destinations
          </button>
        </div>

        {/* Education Grid - Using Bootstrap row/col to prevent stacking */}
        <div className="row g-4 mb-5">
          {destinations.map((dest, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-lg-3">
              <ServiceCard {...dest} />
            </div>
          ))}
        </div>

        {/* Section 2 Header */}
        <div className="text-center mt-5 pt-5 mb-5">
          <h2
            className="fw-bold mb-3"
            style={{ color: "var(--lyt-dark-green)", fontSize: "28px" }}
          >
            Business & Corporate Consultancy
          </h2>
          <p className="body-text mx-auto opacity-75">
            Professional services for businesses expanding globally or seeking
            operational excellence.
          </p>
        </div>

        {/* Locations Info Bar */}
        <div
          className="p-3 mb-4 rounded-3 d-flex align-items-start gap-3 border-start border-4"
          style={{
            backgroundColor: "#cde7d9",
            borderColor: "var(--lyt-primary)",
          }}
        >
          <i
            className="bi bi-geo-alt-fill"
            style={{ color: "var(--lyt-primary)" }}
          ></i>
          <p
            className="mb-0 text-start"
            style={{ fontSize: "13px", color: "var(--lyt-dark-green)" }}
          >
            <strong>Our Business Consultancy Locations:</strong>
            <span className="opacity-75 ms-1">
              Bangladesh, United Kingdom, United Arab Emirates, and Ireland.
            </span>
          </p>
        </div>

        {/* Business Grid */}
        <div className="row g-4 justify-content-center">
          {[
            {
              title: "HR Auditing Service",
              iconClass: "bi bi-shield-check",
              description:
                "Comprehensive reviews of your HR policies and alignment with international standards.",
            },
            {
              title: "Workplace Compliance",
              iconClass: "bi bi-person-check",
              description:
                "Ensuring your business meets all local and international regulations and employment laws.",
            },
            {
              title: "Counselling Service",
              iconClass: "bi bi-chat-dots",
              description:
                "Professional support for employee well-being, conflict resolution, and career development.",
            },
            {
              title: "Business Plan Development",
              iconClass: "bi bi-graph-up-arrow",
              description:
                "Creating investor-ready business plans with detailed financial projections.",
            },
          ].map((item, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4">
              <ServiceCard badge="Business" {...item} />
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="text-center mt-5">
          <button
            className="glow-on-hover"
            style={{
              width: "280px",
              height: "52px",
              textTransform: "uppercase",
            }}
          >
            Discuss Your Business Needs
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
