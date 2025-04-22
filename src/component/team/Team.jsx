import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./Team.css";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSkype } from "@fortawesome/free-brands-svg-icons";
import { faGit } from "@fortawesome/free-brands-svg-icons";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import user from "../../assests/user.jpeg";
import user_5 from "../../assests/user_5.jpeg";
import user_6 from "../../assests/user_6.jpeg";
import user_7 from "../../assests/user_7.jpeg";
import user_8 from "../../assests/user_8.jpeg";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <motion.main
      initial={{ opacity: 0, translateY: -100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 2, type: "ease-out" }}
      className="my-5 "
    >
      <div className="container-lg col-lg-8 col-12 mx-lg-auto px-4">
        <div className="row">
          <div className="col-lg-8 col-12 my-3 text-white">
            <h3>Startup Crew</h3>
            <p className="lh-base">
              The most important part of the Startup Framework is the samples.
              The samples form a set of 25 usable pages you can use as is or you
              can add new blocks from UI Kit.
            </p>
          </div>

          <div className="row">
            <div className="col-md-4 col-12 my-3 text-white d-md-block d-flex align-items-center my-md-0 my-4">
              <img
                src={user}
                alt=""
                className="rounded-pill d-lg-block d-flex"
              />
              <div className="">
                <div className="my-2 px-md-0 px-3">
                  <p className="d-inline">Leah Salomon</p>
                  <small className="d-block">UI Designer</small>
                </div>

                <div className="d-flex my-3 px-md-0 px-3">
                  <FontAwesomeIcon icon={faTwitter} className="fs-4 me-1" />
                  <FontAwesomeIcon
                    icon={faSquareFacebook}
                    className="fs-4 mx-1"
                  />
                  <FontAwesomeIcon icon={faDribbble} className="fs-4 mx-1" />
                  <FontAwesomeIcon icon={faInstagram} className="fs-4 mx-1" />
                </div>
              </div>
            </div>

            <div className="col-md-4 col-12 my-3 text-white d-md-block d-flex align-items-center my-md-0 my-4">
              <img
                src={user_5}
                alt=""
                className="rounded-pill d-lg-block d-flex"
              />
              <div>
                <div className="my-2 px-3">
                  <p className="d-inline">Colin Timmons</p>
                  <small className="d-block">UX Designer</small>
                </div>

                <div className="d-flex my-3 px-3">
                  <FontAwesomeIcon icon={faTwitter} className="fs-4 me-1" />
                  <FontAwesomeIcon icon={faDribbble} className="fs-4 mx-1" />
                </div>
              </div>
            </div>

            <div className="col-md-4 col-12 my-3 text-white d-md-block d-flex align-items-center my-md-0 my-4">
              <img
                src={user_6}
                alt=""
                className="rounded-pill d-lg-block d-flex"
              />
              <div>
                <div className="my-2 px-3">
                  <p className="d-inline">Miguel Osborne</p>
                  <small className="d-block">Front-end Developer</small>
                </div>

                <div className="d-flex my-3 px-3">
                  <FontAwesomeIcon icon={faSkype} className="fs-4 me-1" />
                  <FontAwesomeIcon icon={faGit} className="fs-4 mx-1" />
                </div>
              </div>
            </div>

            <div className="col-md-4 col-12 my-3 text-white d-md-block d-flex align-items-center my-md-0 my-4">
              <img
                src={user_7}
                alt=""
                className="rounded-pill d-lg-block d-flex"
              />
              <div>
                <div className="my-2 px-3">
                  <p className="d-inline">Taylor Simon</p>
                  <small className="d-block">Product Manager</small>
                </div>

                <div className="d-flex my-3 px-3">
                  <FontAwesomeIcon icon={faTwitter} className="fs-4 me-1" />
                  <FontAwesomeIcon icon={faInstagram} className="fs-4 mx-1" />
                </div>
              </div>
            </div>

            <div className="col-md-4 col-12 my-3 text-white d-md-block d-flex align-items-center my-md-0 my-4">
              <img
                src={user_8}
                alt=""
                className="rounded-pill d-lg-block d-flex"
              />
              <div>
                <div className="my-2 px-3">
                  <p className="d-inline">Steven MacAlister</p>
                  <small className="d-block">Copyrighter</small>
                </div>
                <div className="d-flex my-3 px-3">
                  <FontAwesomeIcon icon={faTwitter} className="fs-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Team;
