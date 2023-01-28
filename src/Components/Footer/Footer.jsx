/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./Footer.css";
import imgFooter from "./Mid Cloud Footer.png";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="footer text-light position-relative">
        <div className="container">
          <div className="row pt-5">
            <div className="footer-tab col-lg-3 col-12 ">
              <h1 className="footer-tab-title fs-3 fw-normal mb-4">Menu</h1>
              <ul>
                <li className="mb-2">
                  <a className="text-uppercase text-light" href="">
                    home
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-uppercase text-light" href="">
                    services
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-uppercase text-light" href="">
                    about us
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-uppercase text-light" href="">
                    blog
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-uppercase text-light" href="">
                    contact us
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-tab col-lg-3 col-12">
              <h1 className="footer-tab-title fs-3 fw-normal mb-4">We Offer</h1>
              <ul>
                <li className="mb-2">
                  <a className="text-uppercase text-light" href="">
                    business hosting
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-uppercase text-light" href="">
                    privete hosting
                  </a>
                </li>
              </ul>
              <h1 className="footer-tab-title fs-3 fw-normal mb-4 mt-4">
                Services
              </h1>
              <ul>
                <li className="mb-2">
                  <a className="text-uppercase text-light" href="">
                    first service
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-uppercase text-light" href="">
                    second service
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-uppercase text-light" href="">
                    third service
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-tab col-lg-3 col-12">
              <h1 className="footer-tab-title fs-3 fw-normal mb-4">Our Blog</h1>
              <h5 className="fw-normal">Lorem Ipsum sample text</h5>
              <p>
                Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur
                arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur
                arcu erat, accumsan.
              </p>
              <a
                href=""
                className="text-light ms-auto d-flex justify-content-start justify-content-lg-end"
              >
                Read More
              </a>
            </div>
            <div className="footer-tab col-lg-3 col-12 mt-3 mt-lg-0">
              <h1 className="footer-tab-title fs-3 fw-normal mb-4">
                We Are Social
              </h1>
              <ul className="social-media list-unstyled d-flex  justify-content-start gap-4">
                <li className="mb-2">
                  <a className="text-light" href="">
                    <i className="fa-brands fa-facebook-f fa-2xl"></i>
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-light" href="">
                    <i className="fa-brands fa-twitter fa-2xl"></i>
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-light" href="">
                    <i className="fa-brands fa-google-plus-g fa-2xl"></i>
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-light" href="">
                    <i className="fa-brands fa-youtube fa-2xl"></i>
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-light" href="">
                    <i className="fa-brands fa-skype fa-2xl"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <img
          src={imgFooter}
          className="img-footer position-absolute d-none d-lg-block"
          alt=""
        />
      </footer>
    );
  }
}

export default Footer;
// justify-content-center align-items-center g-2
