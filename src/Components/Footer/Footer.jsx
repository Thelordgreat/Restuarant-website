import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <h2>Yummie</h2>
      <h5>Customer Satisfaction Is Our Main Priority</h5>
      <p>
        Lorem ipsum dolor sit amet, <br />
        consectetur adipisicing elit. Quod quam distinctio <br />
        consectetur impedit officia quo,
        <br /> a, maiores cumque nisi
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <i className="fab fa-instagram"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
      </div>
    </footer>
  );
};

export default Footer;
