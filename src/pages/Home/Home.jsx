/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import HeaderNav from "../../components/Shared/HeaderNav/HeaderNav";
import VideoBanner from "../../components/VideoBanner/VideoBanner";
import ImpactSection from "../../components/ImpactSection/ImpactSection";
import ServicesPage from "../../components/ServicesPage/ServicesPage";
import ProcessAndFAQ from "../../components/ProcessAndFAQ/ProcessAndFAQ";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeaderNav></HeaderNav>
      <VideoBanner></VideoBanner>
      <ImpactSection
        id="impact-section"
        style={{ paddingTop: "20px" }}
      ></ImpactSection>
      <ServicesPage id="/student-services"></ServicesPage>
      <ProcessAndFAQ></ProcessAndFAQ>
    </div>
  );
};

export default Home;
