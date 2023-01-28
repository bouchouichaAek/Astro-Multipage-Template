import React, { Component } from "react";
import "./Features.css";

class Features extends Component {
  state = {};
  render() {
    return (
      <div className="features">
        <div className="container">
          <h1 className="text-center fs-2">Why we are best?</h1>
          <div className="row text-center mt-5 pt-5 mb-5 pb-5">
            <div className="col-12 col-lg-4 col-md-6 text-start d-flex align-items-start gap-3">
              <span className="material-symbols-outlined p-3 rounded-circle text-white">
                settings
              </span>
              <div className="text">
                <h2 className="f-title fs-5">Modern Technology</h2>
                <p className="f-content text-black fs-6 text-black-50">
                  Curabitur aliquet quam id dui posu ere blandit.Curabitur ae
                  blandit
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 text-start d-flex align-items-start gap-3">
              <span className="material-symbols-outlined p-3 rounded-circle text-white">
                key
              </span>
              <div className="text">
                <h2 className="f-title fs-5">Protected Servers</h2>
                <p className="f-content text-black fs-6 text-black-50">
                  Curabitur aliquet quam id dui posu ere blandit.Curabitur ae
                  blandit
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 text-start d-flex align-items-start gap-3">
              <span className="material-symbols-outlined p-3 rounded-circle text-white">
                security
              </span>
              <div className="text">
                <h2 className="f-title fs-5">Fully Secured</h2>
                <p className="f-content text-black fs-6 text-black-50">
                  Curabitur aliquet quam id dui posu ere blandit.Curabitur ae
                  blandit
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 text-start d-flex align-items-start gap-3">
              <span className="material-symbols-outlined p-3 rounded-circle text-white">
                call
              </span>
              <div className="text">
                <h2 className="f-title fs-5">Call For Support</h2>
                <p className="f-content text-black fs-6 text-black-50">
                  Curabitur aliquet quam id dui posu ere blandit.Curabitur ae
                  blandit
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 text-start d-flex align-items-start gap-3">
              <i className="fa-solid fa-trophy p-3 rounded-circle text-white fs-4"></i>
              <div className="text">
                <h2 className="f-title fs-5">Best For Business</h2>
                <p className="f-content text-black fs-6 text-black-50">
                  Curabitur aliquet quam id dui posu ere blandit.Curabitur ae
                  blandit
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6 text-start d-flex align-items-start gap-3">
              <span className="material-symbols-outlined p-3 rounded-circle text-white">
                support
              </span>
              <div className="text">
                <h2 className="f-title fs-5">Fully Support</h2>
                <p className="f-content text-black fs-6 text-black-50">
                  Curabitur aliquet quam id dui posu ere blandit.Curabitur ae
                  blandit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
