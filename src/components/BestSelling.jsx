import React from "react";
import "../styles/BestSelling.scss";
import NikeCard from "../components/category/NikeCard";

const BestSelling = () => {
  return (
    <>
      <div className="best-selling">
        <div class="content">
          <h1 class="title">
            BEST SELLING
            <div class="aurora">
              <div class="aurora__item"></div>
              <div class="aurora__item"></div>
              <div class="aurora__item"></div>
              <div class="aurora__item"></div>
            </div>
          </h1>
        </div>
        {/* Nike cards */}
        <div className="category-wrapper__cards">
          <NikeCard
            image={
              "https://d3.harvard.edu/platform-rctom/wp-content/uploads/sites/4/2018/11/20160315_fy16_inno_snowcap_silver_hero_0029_native_1600.jpg"
            }
            price={200}
            rating={"7.6K"}
          />

          <NikeCard
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRMu0rLlaiE0Bo3KJ6fzsRxCH7m044jvrJoA&s"
            }
            price={111}
            rating={"4.4K"}
          />
          <NikeCard
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYbQsv8wgnaaHmbv3ZXK-5oOxLmeDtNsjQOXRc5un3u28PjxF6C2_ZsIJ5D6WU5GRcnPE&usqp=CAU"
            }
            price={180}
            rating={"3.9K"}
          />

          <NikeCard
            image={
              "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2Fe0d861b0-d133-11e2-be7b-00144feab7de?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1"
            }
            price={144}
            rating={"2.5K"}
          />
        </div>
        <button className="best-selling__button">SHOP NOW</button>
      </div>
      <div className="row">
        <hr />
      </div>
    </>
  );
};

export default BestSelling;
