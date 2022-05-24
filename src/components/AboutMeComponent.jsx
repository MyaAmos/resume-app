import React, { Component } from "react";
import "./AboutMeComponent.css";

export class AboutMeComponent extends Component {
  render() {
    return (
      <div className="aboutme-component">
        <h2>About Me</h2>
        <div className="info">
          <div className="hobbies info-div">
            <h4 className="title">Hobbies</h4>
            <p>
              Mya enjoys being creative and has multiple outlets to do so. She
              enjoys making video games, crafts, websites, or even mobile apps
              in her free time
            </p>
            <p>
              She also enjoys playing video games, reading, and listening (and
              occasionally singing) to music.
            </p>
          </div>
          <div className="projects info-div">
            <h4 className="title">Projects</h4>
            <p>
              Mya has worked on multiple various projects. Most for the purpose
              of furthering her knowledge in various crafts.
            </p>
            <p>
              You can view her GitHub{" "}
              <a
                href="https://github.com/MyaAmos"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </p>
            <p>
              You can view her games{" "}
              <a
                href="https://myaamos.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </p>
          </div>
          <div className="goals info-div">
            <h4 className="title">Goals</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMeComponent;
