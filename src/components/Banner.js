import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="main-banner" id="top">
      <img
        src="images/mauritius-g7ba170572_1280.jpg"
        id="bg-video"
        alt="cometomauritius"
      />

      <div className="video-overlay header-text">
        <div className="caption">
          <h2>
            Come to <em>Mauritius</em>
          </h2>
          <h6
            style={{
              marginBottom: "2em",
            }}
          >
            The time is Now!
          </h6>
          <div className="main-button scroll-to-section">
            <Link to="/services">Check out our services</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
