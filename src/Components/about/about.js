import React from "react";
import Languages from "../../img/Group14.svg";
export function About() {
  return (
    <div className="about-container">
      <div className="block-1 bold bg block-heading">
        <p style={{ margin: 0 }}>About Me</p>
      </div>
      <div
        className="block-2 bg"
        style={{ padding: 30, boxSizing: "border-box" }}
      >
        <p className="year bold">2022</p>
        Masters in Acquisitions-Distribution-Logistics <br />
        (in process...)
        <p className="year bold"> 2021</p>
        Bachelor Degree in Economic Sciences
        <p className="year bold">2018</p>
        Moved to Romania for studies
        <p className="year bold">1999</p>
        Born in Republic of Moldova
      </div>
      <div className="block-3 bg ">
        <p>
          <p className="block-heading-3 bold">
            Junior Front-End <br />
            Developer
          </p>
          <div className="content">
            <p className="bold year">2022</p>
            <p>
              Started learning Web Development through a course on{" "}
              <a href="https://www.codecademy.com/learn" target="_blank">
                CodeCademy.com
              </a>
            </p>
            <p>Within this course i studied</p>
          </div>
          <img src={Languages} alt="html,js,react icons"></img>
        </p>
      </div>
    </div>
  );
}
