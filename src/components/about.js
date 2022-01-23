import React from "react";
import Avatar from "../assets/images/Benji4.jpg";
import "../App.css";

const About = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="row abstract-back ">
                  <img className="avatar" src={Avatar} alt="my pic here" />
                </div>
              </div>

              <div className="card-body">
                <div className="row">
                  <p className="p-about">
                    A passionate software Engineer with hands on experience on
                    technologies such as React.js, Angular.js, Node.js,
                    Express.js, Next.js, ES6, HTML5, CSS3, BootsTrap, Django,
                    Flask
                  </p>
                </div>
              </div>

              <div className="modal-footer" />

              <div className="card-body">
                <h2 className="edu">Education</h2>
                <br />

                <div className="grid-container-profile">
                  <div className="grid-item">
                    <div className="title-uni">Lincoln University (PA)</div>
                    <div className="title-concentration">
                      Bachelor of Science: Information Technology
                    </div>
                  </div>

                  <div className="grid-item">
                    <div className="title-uni">Rutgers University (RU)</div>
                    <div className="title-concentration">Coding Bootcamp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
