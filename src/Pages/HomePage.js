import React from "react";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import Footer from "../components/Footer/Footer";
import CoachListSlider from "../components/Sliders/CoachListSlider";

const HomePage = () => {
  return (
    <>
      <Header />
      <Home />
      <CoachListSlider />
      <Footer />
    </>
  );
};
export default HomePage;
