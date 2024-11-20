import React from "react";
import "../styles/SecondaryFooter.scss";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";

const SecondaryFooter = () => {
  return (
    <>
      <div className="secondary-footer">
        <div className="secondary-footer__leftside">
          <img
            src="/log.png"
            alt=""
            className="secondary-footer__leftside__logo"
          />
          <h3>Address</h3>
          <p>Peshawar, Pakistan</p>
          <h3>Contact</h3>
          <p>+92 3460921637</p>
          <p>overview.jjj@gmail.com</p>
        </div>
        <div className="secondary-footer__rightside">
          <div className="secondary-footer__rightside__links">
            <ul>
              <li>
                <span>LinkedIn</span>
                <FaLinkedin />
              </li>
              <li>
                <span>Facebook</span>
                <FaFacebookSquare />
              </li>
              <li>
                <span>Twitter</span>
                <FaSquareXTwitter />
              </li>
              <li>
                <span>YouTube</span>
                <IoLogoYoutube />
              </li>
              <li>
                <span>TikTok</span>
                <AiFillTikTok />
              </li>
              <li>
                <span>Instagram</span>
                <FaInstagramSquare />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="secondary-footer-bottom">
        <p>&copy; 2024 JasGigli. All rights reserved.</p>
      </div>
    </>
  );
};

export default SecondaryFooter;
