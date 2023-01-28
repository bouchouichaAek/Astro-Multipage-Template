/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import CloudServer from "./Cloud-Server.png";
import "./Header.css";
class Header extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="header position-relative">
          <img
            src={CloudServer}
            className="cloud-image d-none d-lg-block position-absolute"
          />
          <div className="header-text container pt-5">
            <h1 className="text text-light fs-1 fw-normal">
              <span className="fw-bold">Super fast</span> servers
            </h1>
            <h1 className="fs-2 text-light fw-normal">
              SAFE,FAST AND <span className="fw-bold">AWESOME PRICE</span>
            </h1>
            <p className="text-paragraph">
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
              dui. Vestibulum ac diam sit amet quam vehicula
            </p>
            <ul className="list-unstyled pb-md-4 pb-4">
              <li className="d-flex  align-items-center text-light  pb-2">
                <span className="material-symbols-outlined fw-bold me-2 done">
                  done
                </span>
                Super Special
                <span className="fw-bold">Offer/$2,99/MO</span>
              </li>
              <li className="text-light d-flex  align-items-center pb-2">
                <span className="material-symbols-outlined fw-bold me-2 done">
                  done
                </span>
                Unlimited <span className="fw-bold">Bandwidth and Space</span>
              </li>
              <li className="text-light d-flex  align-items-center pb-2">
                <span className="material-symbols-outlined fw-bold me-2 done">
                  done
                </span>
                Daily <span className="fw-bold">Backups</span>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
