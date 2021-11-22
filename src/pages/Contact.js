import React from "react";
import Lines from "../components/Lines";

const About = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }

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
                Contact <em>Us</em>
              </h2>

              <div
                style={{
                  marginBottom: "2em",
                }}
              >
                <Lines />
              </div>
              <div className="form">
                <form onSubmit={handleSubmit}>
                  <div class="mb-3">
                    <input
                      type="text"
                      required
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter your full name"
                      aria-describedby="emailHelp"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      required
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter your email"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="Subject"
                      id="exampleInputPassword1"
                    />
                  </div>

                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      required
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style={{
                        height: "100px",
                      }}
                    ></textarea>
                  </div>
                  <button
                    style={{
                      width: "100%",
                      background: "#ed563b",
                      border: "none",
                    }}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
