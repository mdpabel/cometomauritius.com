import React from "react";
import Lines from "../components/Lines";

const About = () => {
  return (
    <div className="main-banner" id="top">
      <img src="images/SAM_0025.jpg" alt="" />

      <div className="video-overlay header-text">
        <div className="caption">
          <div className="container">
            <div className="row">
              <h2
                style={{
                  marginBottom: "0",
                }}
              >
                About <em>Us</em>
              </h2>

              <div className="about-lines">
                <Lines />
              </div>
              <div className="col-md-6">
                <p
                  style={{
                    color: "#fff",
                    fontSize: "1rem",
                    textAlign: "justify",
                  }}
                >
                  Our team of outstanding professionals include long serving
                  senior ex-staff of the Board of Investment of Mauritius (Now
                  known as Economic Development Board), the national investment
                  promotion agency of the Government of Mauritius. Our key team
                  member, Mr Shaffick HAMUTH, was himself the former Head of the
                  Occupation Permit office that issues residence permits to
                  foreign professionals, investors and retired non-citizens. He
                  helped set up this unit back in 2006 and headed it for more
                  than four years, delivering over 5,000 permits, dealing with
                  every imaginable complex situation and finding the most
                  appropriate solution.
                  <br />
                  We have mastered all investment-related laws, guidelines and
                  procedures and have hands-on experience of the public
                  administration system. We have been involved in major policy
                  decisions pertaining to various economic sectors, including
                  real estate and foreign acquisition and are therefore in a
                  unique position to understand your needs and advise concisely.
                  <br />
                  Our corporate identity hovers around such values as trust,
                  quality, efficiency, being proactive, competitiveness and
                  client satisfaction. We endeavour to provide a fully dedicated
                  and personalised service that exceeds expectations. We work
                  strictly according to established guidelines.
                </p>
              </div>
              <div className="col-md-6 mobile-hide">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/hoBoiyQgjwk?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
