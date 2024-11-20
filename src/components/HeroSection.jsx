import React from "react";
import "../styles/HeroSection.scss";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-section__image-wrapper">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d9287a79497555.5cc4d8939fcc9.png"
          alt="Nike Design"
          className="hero-section__image"
        />
      </div>
      <div className="hero-section__image-wrapper">
        <img
          src="https://img-new.cgtrader.com/items/3388446/afa5102860/nike-jordan-3d-model-afa5102860.jpg"
          alt="Nike Jordan"
          className="hero-section__image"
        />
      </div>
    </div>
  );
};

export default HeroSection;
