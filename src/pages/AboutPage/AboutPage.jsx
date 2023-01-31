import React, { Component } from "react";
import Landing from "../../Components/Landing/Landing";
import Whatwedo from "../../Components/whatWeDo/Whatwedo";
import service1 from "./imgs/services-1.png";
import "./AboutPage.css";
import Team from "../../Components/Team/Team";
import Ourcompany from "../../Components/OurCompany/Ourcompany";

class AboutPage extends Component {
  state = {};
  render() {
    return (
      <>
        <Landing
          title="About Us"
          desc="Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec sollicitudin."
        />
        <div className="container pt-5">
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
          <h3 className="pt-1 text-center">What We Do</h3>
          <Whatwedo />
          <h3 className="pb-5 text-center">The Team</h3>
          <Team />
          <h3 className="pb-5 pt-4 text-center">Our Company</h3>
          <Ourcompany />
        </div>
      </>
    );
  }
}

export default AboutPage;
