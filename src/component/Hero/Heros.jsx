import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./Heros.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Heros = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 2, type: "ease-out" }}
      className="hero w-100 d-flex align-items-center justify-content-center "
    >
      <div className="overlay w-100 d-flex align-items-center justify-content-center">
        <div className="container w-100 d-flex align-items-center justify-content-center">
          <FontAwesomeIcon icon={faAngleLeft} className="fs-1 text-white-50" />
          <div className="hero-text container-fluid text-center text-white">
            <p className=" fw-semibold">Startup 3</p>
            <h1 className="fw-semibold">Forget About Code</h1>
            <div className="px-lg-5 px-0 py-3 ">
              <strong className="fs-md-1">
                Startup Framework gives you complete freedom over your creative
                process — you don’t have to think about any technical aspects.
                There are no limits and absolutely no coding.
              </strong>

              <div className="d-flex justify-content-center py-3 my-4">
                <FontAwesomeIcon icon={faCircle} className="fs-6 mx-1" />
                <FontAwesomeIcon icon={faCircle} className="fs-6 mx-1" />
                <FontAwesomeIcon icon={faCircle} className="fs-6 mx-1" />
                <FontAwesomeIcon icon={faCircle} className="fs-6 mx-1" />
              </div>

              <button className="buttons d-block text-center mx-auto mt-4 lh-base rounded-pill text-white fw-semibold">
                Create an Account
              </button>
            </div>
          </div>
          <FontAwesomeIcon icon={faAngleRight} className="fs-1 text-white" />
        </div>
      </div>
    </motion.div>
  );
};

export default Heros;
