import React from "react";
import "../styles/SecondaryHeader.scss";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiUser } from "react-icons/ci";

const SecondaryHeader = () => {
  return (
    <>
      {/* secondary header */}
      <div className="secondary-header">
        {/* left-side */}
        <div className="secondary-header__leftside">
          {/* logo */}
          <img
            src="/log.png"
            alt=""
            className="secondary-header__leftside__logo"
          />
          {/* list */}
          <ul className="secondary-header__leftside__menu">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Classic</li>
            <li>Sports</li>
            <li>Sale</li>
          </ul>
        </div>
        {/* right-side */}
        <div className="secondary-header__rightside">
          <IoMdHeartEmpty className="secondary-header__rightside__icons" />

          <IoCartOutline className="secondary-header__rightside__icons" />

          <CiUser className="secondary-header__rightside__icons" />
        </div>
      </div>
    </>
  );
};

export default SecondaryHeader;
