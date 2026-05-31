import React from "react";
import ServicesHero from "../components/ServicesHero";
import PlatformSection from "../components/PlatformSection";
import WebsiteService from "../components/WebsiteService";
import USMSService from "../components/USMSService";
import DemoRequestForm from "../components/DemoRequestForm";

const Services = () => {
  return (
    <>
      <ServicesHero />
      <PlatformSection />
      <WebsiteService />
      <USMSService />
      <DemoRequestForm />
    </>
  );
};

export default Services;
