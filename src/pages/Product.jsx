import React from "react";
import ProductHero from "../components/ProductHero";
import WhyChooseUs from "../components/WhyChooseUs";
import StudentOSSection from "../components/StudentOSSection";
import ProductComparison from "../components/ProductComparison";
import DemoRequestForm from "../components/DemoRequestForm";

const Product = () => {
  return (
    <>
      <ProductHero />
      <WhyChooseUs />
      <StudentOSSection />
      <ProductComparison />
      <DemoRequestForm />
    </>
  );
};

export default Product;
