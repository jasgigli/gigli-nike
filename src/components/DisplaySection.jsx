import React from "react";
import "../styles/DisplaySection.scss";

const DisplaySection = () => {
  return (
    <>
      {/* Display section */}
      <div className="display-section">
        {/* images and buttons wrapper */}
        <div className="display-section__image-wrapper">
          {/* Image and Button one */}
          <div className="display-section__image-wrapper__one">
            <img
              src="https://cdn11.bigcommerce.com/s-21x65e8kfn/images/stencil/original/products/52112/248289/NIK21723_1000_10__64772.1688589287.jpg"
              alt=""
              className="display-section__image-wrapper__one__image"
            />
            <div className="display-section__image-wrapper__one__description">
              <h2>FAMOUS MUICHES</h2>
              <button className="display-section__image-wrapper__one__description__button">
                SHOP NOW
              </button>
            </div>
          </div>
          {/* Image and Button two */}
          <div className="display-section__image-wrapper__two">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_363,c_limit/a7a6b758-2577-4df0-b83c-250deb0ebdb7/what-is-pronation%E2%80%94and-what-are-the-best-nike-shoes-for-flat-feet.jpg"
              alt=""
              className="display-section__image-wrapper__two__image"
            />
            <div className="display-section__image-wrapper__two__description">
              <h2>SPECIAL COLLECTION</h2>
              <button className="display-section__image-wrapper__two__description__button">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplaySection;
