import React from "react";
import PrimaryHeader from "./components/PrimaryHeader";
import SecondaryHeader from "./components/SecondaryHeader";
import HeroSection from "./components/HeroSection";
import Category from "./components/category/Category";
import DisplaySection from "./components/DisplaySection";
import BestSelling from "./components/BestSelling";
import PrimaryFooter from "./components/PrimaryFooter";
import SecondaryFooter from "./components/SecondaryFooter";

const App = () => {
  return (
    <>
      <PrimaryHeader />
      <SecondaryHeader />
      <HeroSection />
      <Category />
      <DisplaySection />
      <BestSelling />
      <PrimaryFooter />
      <SecondaryFooter />
    </>
  );
};

export default App;
