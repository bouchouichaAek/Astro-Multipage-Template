import React, { Component } from "react";
import "./Service.css";
import service1 from "./imgs/Service-1.png";
import service2 from "./imgs/Service-2.png";
import service3 from "./imgs/Service-3.png";
import TextTitle from "../SubComponents/TextTitle/TextTitle";

class Service extends Component {
  state = {};
  render() {
    return (
      <div className="container pt-5 pb-5">
        <TextTitle
          title="We have awesome plans and prices"
          content="Vivamus magna justo, lacinia eget consectetur sed, convallis at
          tellus. Donec sollicitudin molestie malesuada. Donec sollicitudin
          molestie malesuada. Pellentesque in ipsum"
        />
        <div className="row mt-5">
          <div className="col-lg-4 col-md-6 text-center">
            <img src={service1} alt="" />
            <h5 className="service-title pt-4">Fast Servers</h5>
            <p className="service-p text-black-50 lh-sm">
              Curabitur aliquet quam id dui posu ere blandit.Curabitur ae
              blandit
            </p>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <img src={service2} alt="" />
            <h5 className="service-title pt-4 ">Fully Support</h5>
            <p className="service-p text-black-50 lh-sm">
              Curabitur aliquet quam id dui posu ere blandit.Curabitur ae
              blandit
            </p>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <img src={service3} alt="" />
            <h5 className="service-title pt-4">Safe and Secure</h5>
            <p className="service-p text-black-50 lh-sm">
              Curabitur aliquet quam id dui posu ere blandit.Curabitur ae
              blandit
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Service;
