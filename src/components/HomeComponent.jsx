import React, { Component } from "react";
import "./HomeComponent.css";

export class HomeComponent extends Component {
  render() {
    return (
      <div className="home-component">
        <div className="top">
          <img
            className="home-img"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQFdeeASWsX1yA/profile-displayphoto-shrink_400_400/0/1639928695790?e=1658966400&v=beta&t=5b1T-VpUiX3d27MiGo14-WykTshr-gE4go7m9EE9iLM"
          />
          <div className="info">
            <h2>Mya Amos</h2>
            <h4>A Software Engineer</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
