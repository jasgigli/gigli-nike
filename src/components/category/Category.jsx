import React from "react";
import "../../styles/category/Category.scss";
import NikeCard from "./NikeCard";

const Category = () => {
  return (
    <>
      <div className="category-wrapper">
        <div className="category-wrapper__buttons">
          <button className="category-wrapper__button category-wrapper__buttons--new-arrivals">
            NEW ARRIVALS
          </button>
          <button className="category-wrapper__button category-wrapper__buttons--trending">
            WHAT’S TRENDING
          </button>
        </div>

        {/* Nike cards */}
        <div className="category-wrapper__cards">
          <NikeCard
            image={
              "https://static-ssl.businessinsider.com/image/582a1b0e691e8828018b699d-2286/nike_earl_profile_original.jp2"
            }
            price={150}
            rating={"1K"}
          />
          <NikeCard
            image={
              "https://img.pikbest.com/wp/202408/sneakers-shoes-the-concept-of-fashionable-stunning-bright-rendered-in-3d_9829435.jpg!sw800"
            }
            price={160}
            rating={"1.7K"}
          />
          <NikeCard
            image={
              "https://d3.harvard.edu/platform-rctom/wp-content/uploads/sites/4/2018/11/20160315_fy16_inno_snowcap_silver_hero_0029_native_1600.jpg"
            }
            price={200}
            rating={"7.6K"}
          />
          <NikeCard
            image={
              "https://mir-s3-cdn-cf.behance.net/projects/404/956e9c206029463.Y3JvcCwxMzgwLDEwODAsMjkwLDA.png"
            }
            price={199}
            rating={"5K"}
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
            image={"https://i.ytimg.com/vi/Cky2EjEOfTw/maxresdefault.jpg"}
            price={120}
            rating={"3.7K"}
          />
          <NikeCard
            image={
              "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2Fe0d861b0-d133-11e2-be7b-00144feab7de?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1"
            }
            price={144}
            rating={"2.5K"}
          />
        </div>
        <hr />
      </div>
    </>
  );
};

export default Category;
