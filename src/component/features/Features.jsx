import React from "react";
import "./Features.css";
import Mockup from "../../assests/Mockup.png";
const Features = () => {
  return (
    <section className="features position-relative d-flex align-items-center my-5">
      <div className="slide-left col-md-4 d-flex align-items-center d-none d-lg-block">
        <img src={Mockup} alt="" className="d-none d-lg-block" />
      </div>
      <div className="container ">
        <div className="row px-md-0 px-4">
          <div className="col-lg-9 col-12 text-white px-md-3 px-0">
            <h3>We Create Something New</h3>
            <p>
              We have created a new product that will help designers, developers
              and companies create websites for their startups quickly and
              easily.
            </p>
          </div>

          <div className="row text-white my-4">
            <div className="col-lg-4 col-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="70px"
              >
                <path
                  fill="#ffffff"
                  d="M168.5 72L256 165l87.5-93-175 0zM383.9 99.1L311.5 176l129 0L383.9 99.1zm50 124.9L256 224 78.1 224 256 420.3 433.9 224zM71.5 176l129 0L128.1 99.1 71.5 176zm434.3 40.1l-232 256c-4.5 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152c4.5-6.1 11.7-9.8 19.3-9.8l240 0c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4z"
                />
              </svg>
              <div>
                <div className="mt-2">
                  <small className="d-block">30 New feature pages</small>
                  <p className="mt-2">
                    Startup Framework contains components and complex blocks
                    which can easily.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-6 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="70px"
              >
                <path
                  fill="#ffffff"
                  d="M168.5 72L256 165l87.5-93-175 0zM383.9 99.1L311.5 176l129 0L383.9 99.1zm50 124.9L256 224 78.1 224 256 420.3 433.9 224zM71.5 176l129 0L128.1 99.1 71.5 176zm434.3 40.1l-232 256c-4.5 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152c4.5-6.1 11.7-9.8 19.3-9.8l240 0c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4z"
                />
              </svg>
              <div>
                <div className="mt-2">
                  <small className="d-block">30 New feature pages</small>
                  <p className=" mt-2">
                    Startup Framework contains components and complex blocks
                    which can easily.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
