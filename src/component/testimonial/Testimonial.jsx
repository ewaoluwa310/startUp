import React from "react";
import "./Testimonial.css";
import user from "../../assests/user.jpeg";
import user_2 from "../../assests/user_2.jpeg";
import user_3 from "../../assests/user_3.jpeg";
import user_4 from "../../assests/user_4.png";

const Testimonial = () => {
  return (
    <section className="testimonial my-5  d-lg-flex justify-content-center align-items-center">
      <div className="container-lg container-md container-sm px-lg-5 px-md-2 px-5 col-lg-9 col-12 mx-auto">
        <div className="col-lg-5 col-12 text-center">
          <h3 className="fs-2 fw-bolder text-white">Our Happy Clients</h3>
        </div>
        <div className="row gap-3 my-4 d-flex justify-content-center">
          <div className="col-lg-5 col-12 d-flex mb-3 border me-lg-3 me-0 py-lg-4 py-5 rounded-4">
            <div className="">
              <img
                src={user}
                alt=""
                className="img d-block mx-auto rounded-2"
              />
            </div>
            <div className="d-flex ">
              <div className="text-white px-3">
                <b className="d-block text">
                  Get a fully retina ready site when you build with Startup
                  Framework. Websites look sharper and more gorgeous on devices
                  with retina display support
                </b>

                <small className="d-block paragraph text-secondary fw-normal">
                  Rayhan Curran
                </small>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-12 d-flex mb-3 border me-lg-3 me-0 py-lg-4 py-5 rounded-4">
            <div className="">
              <img src={user_2} alt="" className="img d-block mx-2 rounded-2" />
            </div>

            <div className="d-flex">
              <div className="text-white px-3">
                <b className="d-block text">
                  As a business targeting high net worth individuals, we were
                  looking for a slick, cool and mini-malistic design for our
                  website
                </b>
                <small className="d-block paragraph text-secondary fw-normal">
                  Kayley Frame
                </small>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-12 d-flex mb-3 border me-lg-3 me-0 py-lg-4 py-5 rounded-4">
            <div className="">
              <img src={user_3} alt="" className="img d-block mx-2 rounded-2" />
            </div>

            <div className="d-flex">
              <div className="text-white px-3">
                <b className="d-block text">
                  The most important part of the Startup Framework is the
                  samples
                </b>

                <small className="d-block paragraph text-secondary fw-normal">
                  Gene Whitfield
                </small>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-12 d-flex mb-3 border me-lg-3 me-0 py-lg-4 py-5 rounded-4">
            <div className="">
              <img
                src={user_4}
                alt=""
                className="img d-block mx-auto rounded-2"
              />
            </div>

            <div className="d-flex">
              <div className="text-white px-3">
                <b className="text d-block">
                  I’ve built my website with Startup just in one day, and it was
                  ready-to-go.
                </b>

                <small className="d-block paragraph text-secondary fw-normal">
                  Allan Kim
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
