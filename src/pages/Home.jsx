import React from "react";
import Header from "../components/Header";
import WhySchoolsStruggle from "../components/WhySchoolsStruggle";
import StatsSection from "../components/StatsSection";
import Testimonails from "../components/Testimonails";
import DemoRequestForm from "../components/DemoRequestForm";

const Home = () => {
  return (
    <>
      <Header />
      <WhySchoolsStruggle />
      <StatsSection />
      <Testimonails />
      <DemoRequestForm />
    </>
  );
};

export default Home;
