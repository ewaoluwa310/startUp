import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./Features.css";
import Mockup from "../../assests/Mockup.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-regular-svg-icons";
// motion
import { motion } from "framer-motion";

const Features = () => {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: -100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 2, type: "ease-out" }}
      className="features w-100 position-relative d-flex align-items-center my-5"
    >
      <div className="img-overlay w-100 d-flex align-items-center">
        <motion.div
          initial={{ opacity: 0, translateX: -100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 3, type: "ease-out" }}
          className="slideLeft col-md-4 d-flex align-items-center d-none d-lg-block"
        >
          <img src={Mockup} alt="" className="d-none d-lg-block" />
        </motion.div>
        <div className="container ">
          <div className="row px-md-0 px-2">
            <div className="col-lg-9 col-12 text-white px-md-3 px-0">
              <h3>We Create Something New</h3>
              <p>
                We have created a new product that will help designers,
                developers and companies create websites for their startups
                quickly and easily.
              </p>
            </div>

            <div className="row text-white my-4">
              <div className="col-lg-4 col-md-6 col-12 ">
                <div className="d-flex d-md-block ">
                  <FontAwesomeIcon
                    icon={faGem}
                    className="fontIcon mt-md-0 mt-5 me-2"
                  />
                  <div className="mt-2 ms-2">
                    <small className="d-block">30 New feature pages</small>
                    <p className="mt-2">
                      Startup Framework contains components and complex blocks
                      which can easily.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12 mt-md-0 mt-4">
                <div className="d-flex d-md-block">
                  <FontAwesomeIcon
                    icon={faGem}
                    className="fontIcon mt-md-0 mt-5 me-2"
                  />
                  <div className="mt-2 ms-2">
                    <small className="d-block">Useful Symbol Components</small>
                    <p className=" mt-2">
                      Samples will show you the feeling on how to play around
                      using the components.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
