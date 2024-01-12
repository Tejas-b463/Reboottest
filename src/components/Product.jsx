import React from "react";
import "./Product.css";
import PRODUCT1 from "../img/product1.png";
import PRODUCT2 from "../img/product2.png";
import PRODUCT3 from "../img/product3.png";
import GROUP1 from "../img/Group 1.png";
import GROUP2 from "../img/Group 2.png";
import GROUP3 from "../img/Group 3.png";

const Product = () => {
  return (
    <section className="product-container">
      {/* product1 */}
      <div className="product">
        <div className="product-images">
          <img className="product-group" src={GROUP1} alt="" />
          <img className="product-img" src={PRODUCT1} alt="" />
        </div>
        <div className="product-content">
          <h1>red bull white edition</h1>
          <p>
            Wings without sugar: Red Bull Sugarfree is Red Bull Energy Drink
            without sugar.
          </p>
          <button>learn more</button>
        </div>
      </div>

      {/* product2 */}
      <div className="product product-2">
        <img className="product-group" src={GROUP2} alt="" />
        <img className="product-img" src={PRODUCT2} alt="" />
        <div className="product-content">
          <h1>red bull white edition</h1>
          <p>
            Wings without sugar: Red Bull Sugarfree is Red Bull Energy Drink
            without sugar.
          </p>
          <button>learn more</button>
        </div>
      </div>
      {/* product3 */}
      <div className="product">
        <div>
          <img className="product-group" src={GROUP3} alt="" />
          <img className="product-img" src={PRODUCT3} alt="" />
          <div className="product-content">
            <h1>red bull white edition</h1>
            <p>
              Wings without sugar: Red Bull Sugarfree is Red Bull Energy Drink
              without sugar.
            </p>
            <button>learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
