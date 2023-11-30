import React from "react";
import Img from "../assets/img/undraw_posting_photo.svg";

const IllustrationsCard = () => {
  return (
    <div className="card shadow mb-4 text-start">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
      </div>
      <div className="card-body">
        <div className="text-center">
          <img
            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
            style={{ width: "25rem" }}
            src={Img}
            alt="..."
          />
        </div>
        <p>
          Add some quality, SVG illustrations to your project courtesy of{" "}
          <a target="_blank" rel="nofollow" href="https://undraw.co/">
            unDraw
          </a>
          , a constantly updated collection of beautiful SVG images that you can
          use completely free and without attribution!
        </p>
        <a target="_blank" rel="nofollow" href="https://undraw.co/">
          Browse Illustrations on unDraw &rarr;
        </a>
      </div>
    </div>
  );
};
export default IllustrationsCard;
