import React, { Component } from "react";
import server from "./Server.png";
import "./Plan.css";
import Button from "../SubComponents/Button/Button";

class Plan extends Component {
  state = {};
  render() {
    return (
      <div className="plan border border-dark-subtle rounded-4 position-relative mb-5">
        <div className="box-title position-absolute text-center border border-white rounded-circle">
          <h1 className="fs-5 text-light mt-4">{this.props.status}</h1>
          <h1 className="fs-4 text-light price">{this.props.price}</h1>
          <p className="fs-5 text-light">/mo</p>
        </div>
        <div className="box-body ">
          <div className="box-up position-relative rounded-4 ">
            <img src={server} alt="" className="position-absolute server-img" />
          </div>
          <div className="box-down">
            <ul className="list-unstyled mt-5 mx-auto">
              <li className="d-flex  align-items-center text-black  pb-2">
                <span className="material-symbols-outlined fw-bold me-2 done">
                  done
                </span>
                {this.props.storage}GB Storage
              </li>
              <li className="d-flex  align-items-center text-black  pb-2">
                <span className="material-symbols-outlined fw-bold me-2 done">
                  done
                </span>
                {this.props.mailAccounts} Mail Accounts
              </li>
              <li className="d-flex  align-items-center text-black  pb-2">
                <span className="material-symbols-outlined fw-bold me-2 done">
                  done
                </span>
                {this.props.databases} Databases
              </li>
              <li className="d-flex  align-items-center text-black  pb-2">
                <span className="material-symbols-outlined fw-bold me-2 done">
                  done
                </span>
                {this.props.rams} Rams
              </li>
            </ul>
            <Button name="Buy Now" className="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Plan;
