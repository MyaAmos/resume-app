import React, { Component } from "react";
import "./EducationComponent.css";

export class EducationComponent extends Component {
  render() {
    return (
      <div className="education-component">
        <div className="page-title">
          <h2>Education</h2>
        </div>
        <div className="edu-one">
          <div className="edu-info">
            <div className="edu-title">
              <p className="edu-name">
                {" "}
                <strong><a className="edu-link" href="https://www.gsu.edu/" target="_blank" rel="noopener noreferrer">Georgia State University</a></strong> - B.S. Computer
                Science
              </p>
            </div>
            <p className="edu-date">August 2018 - December 2021</p>
            <div>
              <ul className="list">
                <li className="list-item">
                  <em>Overall GPA:</em> 3.78
                </li>
                <li className="list-item">
                  <em>Hope GPA:</em> 3.78
                </li>
                <li className="list-item">
                  <em>President's List:</em> Spring 2019, Summer 2020, Spring
                  2021, Fall 2021
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img className="edu-img" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Georgia_State_Athletics_logo.svg/1200px-Georgia_State_Athletics_logo.svg.png"/>
          </div>
        </div>
      </div>
    );
  }
}

export default EducationComponent;
