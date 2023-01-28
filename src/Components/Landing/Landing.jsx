import React, { Component } from "react";
import "./Landing.css";
import landingImage from "./landing-image.png";

class Landing extends Component {
  state = {};
  render() {
    return (
      <div className="landing text-center position-relative pt-4">
        <h1 className="landing-title fw-bold fs-2">{this.props.title}</h1>
        <p className="landing-des mp-0 text-black">{this.props.desc}</p>
        <img
          className="landing-image position-absolute"
          src={landingImage}
          alt=""
        />
      </div>
    );
  }
}

export default Landing;
