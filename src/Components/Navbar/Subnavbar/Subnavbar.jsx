import React, { Component } from "react";
import flag from "./images/American+Flag+vector+logo.webp";
import "./Subnavbar.css";
class Subnavbar extends Component {
  state = {};
  render() {
    return (
      <div className="subnavbar">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-9">
              <div className="contact-us  d-flex  align-items-center">
                <div className="phone d-flex  align-items-center">
                  <span className="material-symbols-outlined">headphones</span>
                  <p>Call Us: (0) 123 456 789</p>
                </div>
                <div className="mail d-flex  align-items-center">
                  <span className="material-symbols-outlined">mail</span>
                  <p>jetspace@mail.com</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="language  d-flex  align-items-center ">
                <img src={flag} alt="ENG" className="flag" />
                <p className="language-name">ENG</p>
                <span className="material-symbols-outlined">
                  arrow_drop_down
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Subnavbar;
