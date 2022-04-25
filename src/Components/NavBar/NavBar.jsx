import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  window.onload = function () {
    const toggle = document.getElementById("toggle");
    const navMenu = document.getElementById("nav-menu");
    toggle.onclick = function () {
      toggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    };
  };

  // Close navbar when navlink is clicked
  function hideNav() {
    const closeNav = document.querySelector(".nav-menu");
    closeNav.classList.toggle("active");
  }

  return (
    <nav className="navbar">
      <h1 className="nav-logo">
        <NavLink to="/">Yummie</NavLink>
      </h1>
      <ul className="nav-menu" id="nav-menu">
        <li className="nav-item">
          <NavLink to="/" onClick={hideNav}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" onClick={hideNav}>
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/menu" onClick={hideNav}>
            Products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/testimonial" onClick={hideNav}>
            Testimonials
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" onClick={hideNav}>
            Contact
          </NavLink>
        </li>
      </ul>
      <div id="toggle">
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default NavBar;
