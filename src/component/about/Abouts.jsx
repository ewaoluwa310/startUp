import React from "react";
import "./Abouts.css";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Abouts = ({ setPlayState }) => {
  return (
    <section className="about d-flex justify-content-center align-items-center my-5">
      <div className="container-lg d-flex justify-content-center col-lg-8 col-12 text-center text-white">
        <div className="col-lg-6 col-md-9 col-12">
          <h2>
            Easy to setup. <br /> Easy to maintain
          </h2>
          <p className="px-3 lh-sm">
            Bootstrap is a widely-used, sleek, intuitive and powerful front-end
            framework for faster and easier web development.
          </p>
          <div className="d-flex align-items-center justify-content-center mt-4">
            <div className="play bg-danger rounded-pill d-flex align-items-center justify-content-center">
              <FontAwesomeIcon
                icon={faPlay}
                className="fs-4"
                onClick={() => {
                  setPlayState(true);
                }}
              />
            </div>

            <button className="ms-4 fw-semibold rounded-pill text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abouts;
