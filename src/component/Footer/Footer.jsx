import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./Footer.css";
import {
  faGooglePlusG,
  faSquareFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="mt-5 d-md-flex d-block align-items-center">
      <div className="container">
        <div className="d-lg-flex text-center d-block mx-auto justify-content-lg-between justify-content-center align-items-center text-white">
          <div className="my-3">
            <strong>Startup 3</strong>
          </div>

          <ul className="d-lg-flex d-block text-center px-0 mx-2 ">
            <li className="list mx-3 text-decoration-none my-3">
              Privacy Policy
            </li>
            <li className="list mx-3 text-decoration-none my-3">Terms</li>
            <li className="list mx-3 text-decoration-none my-3">
              <FontAwesomeIcon icon={faTwitter} className="" />
            </li>
            <li className="list mx-3 text-decoration-none my-3">
              <FontAwesomeIcon icon={faSquareFacebook} className="" />
            </li>
            <li className="list mx-3 text-decoration-none my-3">
              <FontAwesomeIcon icon={faGooglePlusG} className="" />
            </li>
          </ul>
        </div>
        <hr />

        <div className="d-lg-flex d-block justify-content-lg-between justify-content-center text-white align-items-center text-center">
          <ul className="d-lg-flex d-block px-0">
            <li className="list mx-2 text-decoration-none my-3">Tour</li>
            <li className="list mx-2 text-decoration-none my-3">Features</li>
            <li className="list mx-2 text-decoration-none my-3">
              Pricing Plans
            </li>
            <li className="list mx-2 text-decoration-none my-3">Our Works</li>
            <li className="list mx-2 text-decoration-none my-3">Brands</li>
            <li className="list mx-2 text-decoration-none my-3">Contacts</li>
          </ul>

          <div className="">
            <p>© 2017 Designmodo. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
