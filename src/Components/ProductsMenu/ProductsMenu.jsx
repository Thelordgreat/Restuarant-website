import React from "react";
import "./ProductsMenu.css";

import food1 from "../../images/food1.jpg";
import food2 from "../../images/food2.jpg";
import food3 from "../../images/food3.jpg";
import food4 from "../../images/food4.jpg";
import food5 from "../../images/food5.jpg";
import food6 from "../../images/food6.jpg";
import food7 from "../../images/food7.jpg";
import food8 from "../../images/food8.jpg";
import food9 from "../../images/food9.jpg";

const ProductsMenu = () => {
  return (
    <div className="products">
      <h2>Our Menu</h2>
      <div className="dishes">
        <img src={food1} alt="" />
        <img src={food2} alt="" />
        <img src={food3} alt="" />
        <img src={food4} alt="" />
        <img src={food5} alt="" />
        <img src={food6} alt="" />
        <img src={food7} alt="" />
        <img src={food8} alt="" />
        <img src={food9} alt="" />
      </div>
    </div>
  );
};

export default ProductsMenu;
