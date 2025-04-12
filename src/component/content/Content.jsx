import React from "react";
import "./Content.css";

const Content = () => {
  return (
    <section className="contents my-5 d-flex align-items-center justify-content-center">
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
    </section>
  );
};

export default Content;
