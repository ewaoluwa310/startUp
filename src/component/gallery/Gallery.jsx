import React from "react";
import "./Gallery.css";
import Mask from "../../assests/Mask.png";
import Mask_2 from "../../assests/Mask_2.png";
import Mask_3 from "../../assests/Mask_3.png";
import Mask_4 from "../../assests/Mask_4.png";

const Gallery = () => {
  return (
    <section className="gallery d-flex align-items-center justify-content-center">
      <div className="container-lg col-lg-9 col-12">
        <div className="mx-lg-5 mx-0">
          <div className="d-flex align-items-center justify-content-between py-4 text-white ">
            <h3>Last Work</h3>
            <button className="button bg-transparent px-4 py-2 rounded-pill text-white">
              View all Works
            </button>
          </div>

          <div className="row ">
            <div className="col-md-6 col-12">
              <img src={Mask} alt="" className="w-100" />
              <div className="text-center text-white my-3">
                <small className="d-block">UI kit</small>
                <p>Mozart Project</p>
              </div>
            </div>

            <div className="col-md-6 col-12">
              <img src={Mask_2} alt="" className="w-100" />
              <div className="text-center text-white my-3">
                <small className="d-block">Framework</small>
                <p>Startup Framework 2.0</p>
              </div>
            </div>

            <div className="col-md-6 col-12">
              <img src={Mask_3} alt="" className="w-100" />
              <div className="text-center text-white my-3">
                <small className="d-block">Photos</small>
                <p>From the Sky</p>
              </div>
            </div>

            <div className="col-md-6 col-12">
              <img src={Mask_4} alt="" className="w-100" />
              <div className="text-center text-white my-3">
                <small className="d-block">Pictures</small>
                <p>Air Forces</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
