import React from "react";
import Header from "../components/header/Header";
import Recommendation from "../components/recommendation/Recommendation";
import Footer from "../components/footer/Footer";
import Services from "../components/services/Services";

const Home = () => {
  return (
    <>
      <Header />
      <Recommendation />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
