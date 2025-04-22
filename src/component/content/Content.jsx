import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./Content.css";
import { motion } from "framer-motion";

const Content = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, type: "ease-out" }}
      className="contents my-5 d-flex align-items-center justify-content-center"
    >
      <div className="textOverlay w-100">
        <div className="container-lg container-sm text-center text-white col-lg-9 col-12 d-flex justify-content-center ">
          <div className="col-lg-9 col-12 text-center">
            <small className=" fw-normal">FREE SAMPLE</small>
            <h2 className="lh-sm fw-bold">
              Powerful Generator and Free Figma Sources{" "}
            </h2>
            <b className="px-md-2 px-0  lh-base">
              Startup Framework contains components and complex blocks which can
              easily be integrated into almost any design. All of the components
              are made in the same style, and can easily be integrated into
              projects, allowing you to create hundreds of solutions.
            </b>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Content;
