import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";
import { faBehance } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const [mobileToggle, mobileMenuToggle] = useState(false);
  const menuToggle = () => {
    mobileToggle ? mobileMenuToggle(false) : mobileMenuToggle(true);
  };
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <div className="w-100 d-flex justify-content-lg-center justify-content-end align-items-center">
        <ul className={mobileToggle ? "" : "hide-menu"}>
          <li className="mx-3 text-decoration-none">
            <Link to="hero" className="text-decoration-none ">
              Home
            </Link>
          </li>

          <li className="mx-3 text-decoration-none">
            <Link to="features" className="text-decoration-none ">
              Features
            </Link>
          </li>

          <li className="mx-3 text-decoration-none">
            <Link to="/pricing" className="text-decoration-none ">
              Pricing
            </Link>
          </li>

          <li className="mx-3 text-decoration-none">
            <Link to="/blog" className="text-decoration-none ">
              Blog
            </Link>
          </li>

          <li className="mx-3 text-decoration-none">
            <Link to="/" className="text-decoration-none w-25 ">
              <FontAwesomeIcon icon={faDribbble} className="" />
            </Link>
          </li>
          <li className="mx-3 text-decoration-none">
            <Link to="/" className="text-decoration-none ">
              <FontAwesomeIcon icon={faBehance} className="" />
            </Link>
          </li>
        </ul>
        <div className="menu mx-lg-0 mx-md-3 mx-4">
          <FontAwesomeIcon
            icon={faBars}
            className="menu-bar fs-4 mx-1"
            onClick={menuToggle}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
