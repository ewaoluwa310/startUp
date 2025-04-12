import React from "react";
import "./Price.css";
import check from "../../assests/check.png";

const Price = () => {
  return (
    // <div className="text-center text-white col-md-6 col-12 mx-auto"></div>
    <section className="pricing d-flex align-items-center justify-content-center my-5">
      <div className="container-lg px-lg-0 px-md-4 px-5">
        <div className="col-lg-5 col-12 text-center text-white mx-auto">
          <h2 className="fw-semibold">Plans & Pricing</h2>
          <p className="fw-normal ">
            Startup Framework is free forever — you only pay for custom domain
            hosting or to export your site.
          </p>
        </div>
        <div className="row gap-lg-4 gap-md-5 gap-5 d-flex justify-content-center">
          <div className="column col-lg-3 col-md-5 col-12 border border-white text-white rounded-2 py-5 px-md-4 px-0">
            <div className="text-center">
              <p className="">Starter</p>
              <div className="d-flex justify-content-center">
                <h6 className="fw-normal">9.99</h6>
                <b className="fs-5 fw-normal">$</b>
              </div>
            </div>

            <ul className="px-0 d-flex justify-content-md-right justify-content-center">
              <div className="d-flex ">
                <div className="pe-2 ">
                  <img
                    src={check}
                    alt=""
                    className="text-success d-flex align-items-center fs-5 lh-lg py-2"
                  />
                  <img
                    src={check}
                    alt=""
                    className="text-success d-flex align-items-center fs-5 lh-lg py-2"
                  />
                  <img
                    src={check}
                    alt=""
                    className="text-success d-flex align-items-center fs-5 lh-lg py-2"
                  />
                  <img
                    src={check}
                    alt=""
                    className="text-success d-flex align-items-center fs-5 lh-lg py-2"
                  />
                </div>

                <div className="px-2">
                  <li className="li py-1 text-white text-decoration-none">
                    2 GB of space
                  </li>
                  <li className="li py-1 text-white text-decoration-none">
                    14 days of backups
                  </li>
                  <li className="li py-1 text-white text-decoration-none">
                    Social integrations
                  </li>
                  <li className="li py-1 text-white text-decoration-none">
                    Client billing
                  </li>
                  <li className="li py-1 text-white-50 text-decoration-none">
                    Remote access
                  </li>
                  <li className="li py-1 text-white-50 text-decoration-none">
                    Custom domain
                  </li>
                  <li className="li py-1 text-white-50 text-decoration-none">
                    24 hours support
                  </li>
                  <li className="li py-1 text-white-50 text-decoration-none">
                    Admin tools
                  </li>
                  <li className="li py-1 text-white-50 text-decoration-none">
                    Collaboration tools
                  </li>
                  <li className="li py-1 text-white-50 text-decoration-none">
                    User management
                  </li>

                  <div className="mt-3">
                    <button className="hover col-12 px-5 py-3 bg-transparent border border-white border-1 rounded-pill text-white fw-semibold">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </ul>
          </div>

          <div className="column col-lg-3 col-md-5 col-12 border border-white text-white rounded-2 py-5 px-md-4 px-0">
            <div className="text-center">
              <p className="">Professional</p>
              <div className="d-flex justify-content-center">
                <h6 className="">19.99</h6>
                <b className="fs-5 fw-normal">$</b>
              </div>
            </div>

            <ul className="px-0 d-flex justify-content-md-right justify-content-center">
              <div className="d-flex">
                <div className="pe-2 ">
                  <img
                    src={check}
                    alt=""
                    className="text-success d-flex align-items-center fs-5 lh-lg py-2"
                  />
                  <img
                    src={check}
                    alt=""
                    className="text-success d-flex align-items-center fs-5 lh-lg py-2"
                  />
                  <img
                    src={check}
                    alt=""
                    className="text-success d-flex align-items-center fs-5 lh-lg py-2"
                  />
                  <img
                    src={check}
                    alt=""
                    className="text-success d-flex align-items-center fs-5 lh-lg py-2"
                  />
                  <img
                    src={check}
                    alt=""
                    className="text-success d-flex align-items-center fs-5 lh-lg py-2"
                  />
                  <img
                    src={check}
                    alt=""
                    className="text-success d-flex align-items-center fs-5 lh-lg py-2"
                  />
                  <img
                    src={check}
                    alt=""
                    className="text-success d-flex align-items-center fs-5 lh-lg py-2"
                  />
                </div>

                <div className="px-2">
                  <li className="li pt-1 text-white text-decoration-none">
                    2 GB of space
                  </li>

                  <li className="li py-1 text-white text-decoration-none">
                    14 days of backups
                  </li>
                  <li className="li py-1 text-white text-decoration-none">
                    Social integrations
                  </li>
                  <li className="li py-1 text-white text-decoration-none">
                    Client billing
                  </li>
                  <li className="li py-1 text-white text-decoration-none">
                    Remote access
                  </li>
                  <li className="li py-1 text-white text-decoration-none">
                    Custom domain
                  </li>
                  <li className="li py-1 text-white text-decoration-none">
                    24 hours support
                  </li>
                  <li className="li py-1 text-white-50 text-decoration-none">
                    Admin tools
                  </li>
                  <li className="li py-1 text-white-50 text-decoration-none">
                    Collaboration tools
                  </li>
                  <li className="li py-1 text-white-50 text-decoration-none">
                    User management
                  </li>

                  <div className="mt-3">
                    <button className="hover col-12 px-5 py-3 bg-transparent border border-white border-1 rounded-pill text-white fw-semibold">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </ul>
          </div>

          <div className="column col-lg-3 col-md-5 col-12 border border-white text-white rounded-2 py-5 px-md-4 px-0">
            <div className="text-center">
              <p className="">Team</p>
              <div className="d-flex justify-content-center">
                <h6 className="">49.99</h6>
                <b className=" fw-normal">$</b>
              </div>
            </div>

            <ul className="px-0 d-flex justify-content-md-right justify-content-center">
              <div className="d-flex ">
                <div className="pe-2 ">
                  <img
                    src={check}
                    alt=""
                    className="text-success d-flex align-items-center fs-5 lh-lg py-2"
                  />
                  <img
                    src={check}
                    alt=""
                    className="text-success d-flex align-items-center fs-5 lh-lg py-2"
                  />
                  <img
                    src={check}
                    alt=""
                    className="text-success d-flex align-items-center fs-5 lh-lg py-2"
                  />
                  <img
                    src={check}
                    alt=""
                    className="text-success d-flex align-items-center fs-5 lh-lg py-2"
                  />
                  <img
                    src={check}
                    alt=""
                    className="text-success d-flex align-items-center fs-5 lh-lg py-2"
                  />
                  <img
                    src={check}
                    alt=""
                    className="text-success d-flex align-items-center fs-5 lh-lg py-2"
                  />
                  <img
                    src={check}
                    alt=""
                    className="text-success d-flex align-items-center fs-5 lh-lg py-2"
                  />
                  <img
                    src={check}
                    alt=""
                    className="text-success d-flex align-items-center fs-5 lh-lg py-2"
                  />
                  <img
                    src={check}
                    alt=""
                    className="text-success d-flex align-items-center fs-5 lh-lg py-2"
                  />
                  <img
                    src={check}
                    alt=""
                    className="text-success d-flex align-items-center fs-5 lh-lg py-2"
                  />
                </div>

                <div className="px-2 text-white">
                  <li className="li py-1 text-decoration-none">
                    2 GB of space
                  </li>

                  <li className="li py-1 text-decoration-none">
                    14 days of backups
                  </li>
                  <li className="li py-1 text-decoration-none">
                    Social integrations
                  </li>
                  <li className="li py-1 text-decoration-none">
                    Client billing
                  </li>
                  <li className="py-1 text-decoration-none">Remote access</li>
                  <li className="li py-1 text-decoration-none">
                    Custom domain
                  </li>
                  <li className="li py-1 text-decoration-none">
                    24 hours support
                  </li>
                  <li className="li py-1 text-decoration-none">Admin tools</li>
                  <li className="li py-1 text-decoration-none">
                    Collaboration tools
                  </li>
                  <li className="li py-1 text-decoration-none">
                    User management
                  </li>

                  <div className="mt-3">
                    <button className="hover col-12 px-5 py-3 bg-transparent border border-white border-1 rounded-pill text-white fw-semibold">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </ul>
            {/* </div> */}
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Price;
