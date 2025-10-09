/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import HeaderNav from "../../components/Shared/HeaderNav/HeaderNav";
import VideoBanner from "../../components/VideoBanner/VideoBanner";
import CounterSection from "../../components/CounterSection/CounterSection";
import Gallery from "../../components/Gallery/Gallery";
// import Partners from "../../components/Partners/Parteners";
import FAQS from "../../components/FAQS/FAQS";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeaderNav></HeaderNav>
      <VideoBanner></VideoBanner>
      <SearchBar></SearchBar>
      {/* <Partners></Partners> */}
      <CounterSection></CounterSection>
      {/* <Gallery></Gallery> */}
      <FAQS></FAQS>

      {/* <UniLogoSlider></UniLogoSlider> */}
      {/* <OfficeLocation></OfficeLocation> */}
      {/* <div className="container-fluid myServiceBg">
        <Link to="ouroffice">
          <h1 className="text-center text-white">
            Discover All Our Office Locations
          </h1>
        </Link>
      </div> */}
      {/* <FacebookReview></FacebookReview> */}
      {/* <CorporateSR></CorporateSR> */}
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;
