import React from "react";
import  "./App.css";
import { Link } from "react-router-dom";


function Nav() {
  const navStyle = {
    color: "white",
  };
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/brands">
          <li>Brands</li>
        </Link>
        <Link style={navStyle} to="/models_tires">
          <li>Models Tires</li>
        </Link>
        <Link style={navStyle} to="/models">
          <li>Models</li>
        </Link>
        <Link style={navStyle} to="/makers">
          <li>Makers</li>
        </Link>
        <Link style={navStyle} to="/sizes">
          <li>Sizes</li>
        </Link>
      </ul>
    </nav>
  );

  //react routes for other page
}
export default Nav;