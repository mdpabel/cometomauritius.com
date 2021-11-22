import React from "react";
import Lines from "./Lines";

const Welcome = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            className="col-md-6"
          >
            <div
              style={{
                marginBottom: "2em",
                textAlign: "justify",
              }}
              className="section-heading"
            >
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h2>
                  Welcome <em>Welcome</em>
                </h2>
                <Lines />
              </div>

              <p>
                Welcome to your one-stop agency in the Republic of Mauritius for
                all your business needs, for the prompt conception,
                implementation, realisation and operation of your project.
              </p>
            </div>
            <p>
              Relax, leave all your worries to us, and let us think and act for
              you. We save you time, money and energy by undertaking all your
              paperwork, dealing with all administrative hassles and ensuring
              that you obtain all your necessary permits, licences and
              clearances within reasonable time, in full conformity with
              established official guidelines, rules and regulations. We will
              guide you all along your journey through the bureaucratic maze in
              the world of investment, permit applications, compliance, etc and
              provide necessary business knowledge to ensure your success and
              peace of mind.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
            className="col-md-6 map"
          >
            <img height="80%" width="100%" src="images/Final.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
