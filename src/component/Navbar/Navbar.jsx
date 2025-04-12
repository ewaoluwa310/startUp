import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";
import { faBehance } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileToggle, mobileMenuToggle] = useState(false);
  const menuToggle = () => {
    mobileToggle ? mobileMenuToggle(false) : mobileMenuToggle(true);
  };

  return (
    <section
      className={`bg-color ${
        sticky ? "bg-blue" : ""
      } py-5 position-fixed top-0 start-0 d-flex align-items-center my-4 col-12`}
    >
      {/* <div> */}
      <nav className="col-12 d-lg-flex d-block mx-lg-auto mx-0 align-items-center py-3 mx-2 px-1">
        <ul className={mobileToggle ? "" : "hide-menu"}>
          <li className="mx-3 text-decoration-none">
            <Link to="hero" className="text-decoration-none text-white">
              Home
            </Link>
          </li>

          <li className="mx-3 text-decoration-none">
            <Link to="features" className="text-decoration-none text-white">
              Features
            </Link>
          </li>

          <li className="mx-3 text-decoration-none">
            <Link to="/pricing" className="text-decoration-none text-white">
              Pricing
            </Link>
          </li>

          <li className="mx-3 text-decoration-none">
            <Link
              to="/blog"
              className="text-decoration-none text-white text-white"
            >
              Blog
            </Link>
          </li>

          <li className="mx-3 text-decoration-none">
            <Link to="/" className="text-decoration-none w-25 ">
              <FontAwesomeIcon
                icon={faDribbble}
                className="text-white d-flex"
              />
            </Link>
          </li>
          <li className="mx-3 text-decoration-none">
            <Link to="/" className="text-decoration-none ">
              <FontAwesomeIcon icon={faBehance} className="text-white d-flex" />
            </Link>
          </li>
        </ul>
        <div className="menu mx-5">
          <FontAwesomeIcon
            icon={faBars}
            className="menu-bar fs-4 mx-1"
            onClick={menuToggle}
          />
        </div>
      </nav>
      {/* </div> */}
    </section>
  );
};

export default Navbar;
