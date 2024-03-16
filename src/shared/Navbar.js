import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [activeNavLink, setActiveNavLink] = useState("home"); // Set "home" as default active NavLink

  const handleNavLinkClick = (navItem) => {
    setActiveNavLink(navItem);
  };

  return (
    <header className="navbar6">
      <img
        className="gr-logo-icon"
        loading="lazy"
        alt=""
        src={require("../images/GR Logo.png")}
      />
      <div className="parent-frame">
        <div className="nav-item-parent">
          <div className="nav-item">
            <NavLink
              exact
              to="/"
              className={activeNavLink === "home" ? "home active" : "home"}
              onClick={() => handleNavLinkClick("home")}
            >
              HOME
            </NavLink>
            <div className={activeNavLink === "home" ? "underline" : ""} />
          </div>
          <div className="nav-item1">
            <NavLink
              exact
              to="/about"
              className={activeNavLink === "about" ? "home active" : "home"}
              onClick={() => handleNavLinkClick("about")}
            >
              ABOUT
            </NavLink>
            <div className={activeNavLink === "about" ? "underline" : ""} />
          </div>
          <div className="nav-item2">
            <NavLink
              exact
              to="/"
              className={
                activeNavLink === "achievement" ? "home active" : "home"
              }
              onClick={() => handleNavLinkClick("achievement")}
            >
              ACHIEVEMENT
            </NavLink>
            <div
              className={activeNavLink === "achievement" ? "underline" : ""}
            />
          </div>
          <div className="nav-item3">
            <NavLink
              exact
              to="/"
              className={activeNavLink === "contact" ? "home active" : "home"}
              onClick={() => handleNavLinkClick("contact")}
            >
              CONTACT
            </NavLink>
            <div className={activeNavLink === "contact" ? "underline" : ""} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
