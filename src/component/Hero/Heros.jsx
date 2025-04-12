import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./Heros.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Heros = () => {
  return (
    <div className="hero  w-100 d-flex align-items-center justify-content-center ">
      <div className="container-lg d-flex align-items-center justify-content-center w-100 w-md-75 mt-md-3 mt-5">
        <FontAwesomeIcon icon={faAngleLeft} className="fs-1 text-white-50" />
        <div className="hero-text container-fluid container-sm text-center text-white">
          <p className=" fw-semibold">Startup 3</p>
          <h1 className="fw-semibold">Forget About Code</h1>
          <div className="px-5 py-3 ">
            <strong className="fs-md-1">
              Startup Framework gives you complete freedom over your creative
              process — you don’t have to think about any technical aspects.
              There are no limits and absolutely no coding.
            </strong>

            <div className="scroll d-flex justify-content-center py-3 my-4">
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
  );
};

export default Heros;
