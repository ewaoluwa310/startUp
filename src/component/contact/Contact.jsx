import React from "react";
import "./Contact.css";
import {
  faPhone,
  faBuilding,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <section className="contact my-5 d-flex align-items-center justify-content-center">
      <div className="container-lg px-lg-0 px-md-4 px-5">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-6 col-md-6 col-12 text-white ">
            <h3 className="lh-lg">Let’s Keep in Touch</h3>
            <p className="my-1">
              We have created a new product that will help designers, developers
              and companies create websites for their startups quickly and
              easily.
            </p>
            <div className="my-2">
              <ul className="px-0">
                <li className="py-4 lh-lg">
                  <FontAwesomeIcon icon={faPhone} className="fontIcon pe-3" />
                  +1 555 505 5050
                </li>
                <li className="py-4 lh-lg">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="fontIcon pe-3"
                  />
                  info@designmodo.com
                </li>
                <li className="py-4 lh-lg">
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className="fontIcon pe-3"
                  />
                  San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco,
                  230909
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-5 col-md-6 col-12">
            <form action="" className="bg-white py-5 px-lg-5 px-3 row">
              <div className="col-lg-6 col-12">
                <label htmlFor="first name" className="">
                  Your Name
                </label>
                <br />
                <input
                  type="text"
                  placeholder="First Name"
                  className="input rounded-pill w-100 my-3 py-md-2 py-5 px-md-3 ps-4"
                />
              </div>

              <div className="col-lg-6 col-12">
                <label htmlFor="budget" className="">
                  BUDGET
                </label>
                <br />

                <select className="select rounded-pill w-100 my-3 py-md-2 py-5 px-md-3 ps-4">
                  <option value="$500">$500</option>
                  <option value="otherOption">$600</option>
                  <option value="otherOption">$700</option>
                  <option value="otherOption">$1000</option>
                  <option value="otherOption">$2000</option>
                </select>
              </div>

              <div className="col-12 py-2 my-3">
                <label htmlFor="Email" className="d-block">
                  INPUT FIELD
                </label>
                <input
                  type="email"
                  placeholder="name@mail.com"
                  className="inputs col-12 rounded-pill my-3 py-md-2 py-5 px-md-3 ps-4"
                />
                <label htmlFor="message" className="d-block my-3">
                  YOUR MESSAGE
                </label>
                <textarea
                  name="message"
                  id=""
                  placeholder="Message"
                  className="col-12 my-3 py-md-2 py-5 px-md-3 ps-4"
                ></textarea>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <input type="checkbox" id="check" className="d-inline" />
                  <label htmlFor="">Send me a copy</label>
                </div>

                <button className="btn col-lg-4 col-md-5 col-6  py-lg-3 py-4 px-5 rounded-pill text-white fs-4">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
