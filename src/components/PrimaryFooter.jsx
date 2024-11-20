import React from "react";
import "../styles/PrimaryFooter.scss";
import { FaStudiovinari } from "react-icons/fa";
import { TfiTime } from "react-icons/tfi";
import { BsFillHouseGearFill } from "react-icons/bs";

const PrimaryFooter = () => {
  return (
    <footer className="primary-footer">
      <div className="primary-footer__grid">
        <div className="primary-footer__grid__box">
          <FaStudiovinari className="primary-footer__icon" />
          <h2>FREE AND FAST DELIVERY</h2>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className="primary-footer__grid__box">
          <TfiTime className="primary-footer__icon" />
          <h2>24/7 CUSTOMER SERVICE</h2>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="primary-footer__grid__box">
          <BsFillHouseGearFill className="primary-footer__icon" />
          <h2>MONEY BACK GUARANTEE</h2>
          <p>We return money within 30 days</p>
        </div>
      </div>
    </footer>
  );
};

export default PrimaryFooter;
