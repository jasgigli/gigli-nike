import React from "react";
import "../../styles/category/NikeCard.scss";
import { CiStar } from "react-icons/ci";

const NikeCard = ({ image, price, rating }) => {
  return (
    <>
      <div className="card">
        <div className="card__image-wrapper">
          <img src={image} alt="" className="card__image" />
        </div>
        <div className="card__description">
          <h4>HAVIT HV-G92 Gamepad</h4>
          <h4 className="card__price">${price}</h4>
          <div className="card__description__flex">
            <span className="card__stars">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </span>

            <span>({rating})</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NikeCard;
