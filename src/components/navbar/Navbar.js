import "./navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  window.onload = function () {
    const toggle = document.getElementById("toggle");
    const navMenu = document.getElementById("nav-menu");
    toggle.onclick = function () {
      toggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    };
  };

  return (
    <nav className="navbar">
      <h1 className="nav-logo">
        <a href="#">Yummie</a>
      </h1>
      <ul className="nav-menu" id="nav-menu">
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/products">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div id="toggle"></div>
    </nav>
  );
}
