import React, { Component } from "react";
import "./ServicesSection.css";
import service1 from "./imgs/services-1.png";
import service2 from "./imgs/services-2.png";
import service3 from "./imgs/services-3.png";

class ServicesSection extends Component {
  state = {};
  render() {
    return (
      <div className="services-section mt-5 mb-5">
        <div className="container">
          <div className="box-service row text-center">
            <div className="col-12 col-6 col-lg-6 mb-5">
              <img className="service-img" src={service1} alt="" />
            </div>
            <div className="col-12 col-lg-5">
              <div className="service-text text-start">
                <h1 className="title fw-normal">
                  <span className="fw-bold">Super fast</span> servers
                </h1>
                <p className="content text-black ">
                  Vestibulum ac diam sit amet quam vehicula elementum sed sit
                  amet dui. Vestibulum ac diam sit amet quam vehicula
                </p>
                <ul className="list-unstyled pb-md-4 pb-4">
                  <li className="d-flex  align-items-center pb-2">
                    <span className="material-symbols-outlined fw-bold me-2 done">
                      done
                    </span>
                    Super Special
                    <span className="fw-bold ms-1"> Offer/$2,99/MO</span>
                  </li>
                  <li className=" d-flex  align-items-center pb-2">
                    <span className="material-symbols-outlined fw-bold me-2 done">
                      done
                    </span>
                    Unlimited{" "}
                    <span className="fw-bold ms-1"> Bandwidth and Space</span>
                  </li>
                  <li className=" d-flex  align-items-center pb-2">
                    <span className="material-symbols-outlined fw-bold me-2 done">
                      done
                    </span>
                    Daily <span className="fw-bold ms-1"> Backups</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="box-service row text-center">
            <div className="col-12 col-lg-7 mb-5">
              <div className="service-text-two text-start">
                <h1 className="title fw-normal">
                  <span className="fw-bold">Modern</span> and fast
                </h1>
                <p className="content text-black ">
                  Vestibulum ac diam sit amet quam vehicula elementum sed sit
                  amet dui. Vestibulum ac diam sit amet quam vehicula
                </p>
                <ul className="list-unstyled pb-md-4 pb-4">
                  <li className="d-flex  align-items-center pb-2">
                    <span className="material-symbols-outlined fw-bold me-2 done">
                      done
                    </span>
                    Super Special
                    <span className="fw-bold ms-1"> Offer/$2,99/MO</span>
                  </li>
                  <li className=" d-flex  align-items-center pb-2">
                    <span className="material-symbols-outlined fw-bold me-2 done">
                      done
                    </span>
                    Unlimited
                    <span className="fw-bold ms-1"> Bandwidth and Space</span>
                  </li>
                  <li className=" d-flex  align-items-center pb-2">
                    <span className="material-symbols-outlined fw-bold me-2 done">
                      done
                    </span>
                    Daily <span className="fw-bold ms-1"> Backups</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-5">
              <img className="service-img-two" src={service2} alt="" />
            </div>
          </div>
          <div className="box-service row text-center">
            <div className="col-12 col-6 col-lg-6 mb-5">
              <img className="service-img" src={service3} alt="" />
            </div>
            <div className="col-12 col-lg-5">
              <div className="service-text text-start">
                <h1 className="title fw-normal">
                  <span className="fw-bold">Safe</span> and protected
                </h1>
                <p className="content text-black ">
                  Vestibulum ac diam sit amet quam vehicula elementum sed sit
                  amet dui. Vestibulum ac diam sit amet quam vehicula
                </p>
                <ul className="list-unstyled pb-md-4 pb-4">
                  <li className="d-flex  align-items-center pb-2">
                    <span className="material-symbols-outlined fw-bold me-2 done">
                      done
                    </span>
                    Super Special
                    <span className="fw-bold ms-1"> Offer/$2,99/MO</span>
                  </li>
                  <li className=" d-flex  align-items-center pb-2">
                    <span className="material-symbols-outlined fw-bold me-2 done">
                      done
                    </span>
                    Unlimited
                    <span className="fw-bold ms-1"> Bandwidth and Space</span>
                  </li>
                  <li className=" d-flex  align-items-center pb-2">
                    <span className="material-symbols-outlined fw-bold me-2 done">
                      done
                    </span>
                    Daily <span className="fw-bold ms-1"> Backups</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesSection;
