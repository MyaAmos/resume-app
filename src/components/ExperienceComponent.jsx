import React, { Component } from "react";
import "./ExperienceComponent.css";

export class ExperienceComponent extends Component {
  render() {
    return (
      <div className="experience-component">
        <div className="page-title">
          <h2>Experience</h2>
        </div>
        <div className="exp-item">
          <div className="exp-title">
            <p className="exp-name">
              {" "}
              <strong>iD Tech</strong> - Online Private Instructor
            </p>
          </div>
          <p className="exp-date">May 2021 - February 2022</p>
          <div>
            <ul className="list">
              <li className="list-item">
                Remote
              </li>
              <li className="list-item">
                Lesson Planning
              </li>
              <li className="list-item">
                Hour Long Private Instruction
              </li>
              <li className="list-item">
                Handling children ages 7 - 18
              </li>
              <li className="list-item">
                Provided a post session report/summary after each lesson
              </li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="exp-item">
          <div className="exp-title">
            <p className="exp-name">
              {" "}
              <strong>Carnival Cruises</strong> - Customer Service Agent
            </p>
          </div>
          <p className="exp-date">August 2019 - June 2020</p>
          <div>
            <ul className="list">
              <li className="list-item">
                Remote
              </li>
              <li className="list-item">
                Provided Customer Service
              </li>
              <li className="list-item">
                Data Entry
              </li>
              <li className="list-item">
                Handled payments and refunds
              </li>
              <li className="list-item">
                Assisted with changes to existing bookings
              </li>
              <li className="list-item">
                Handled delays and cancellations due to natural disasters and pandemic
              </li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="exp-item">
          <div className="exp-title">
            <p className="exp-name">
              {" "}
              <strong>Taco Bell (R.C. Groups)</strong> - Team Member
            </p>
          </div>
          <p className="exp-date">April 2017 - August 2018</p>
          <div>
            <ul className="list">
              <li className="list-item">
                Worked with a diverse team
              </li>
              <li className="list-item">
                Worked on food line
              </li>
              <li className="list-item">
                Worked front register
              </li>
              <li className="list-item">
                Cleaning/Organizing
              </li>
              <li className="list-item">
                Provided customer service
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ExperienceComponent;
