/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import "./Nav.css";
class Nav extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand logo" href="#">
            <img src={logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main"
            aria-controls="main"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="material-symbols-outlined">menu</span>{" "}
          </button>
          <div className="collapse navbar-collapse main" id="main">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <NavLink
                  className="nav-link me-2 text-uppercase"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className="nav-link me-2 text-uppercase"
                  to="/services"
                >
                  services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link me-2 text-uppercase" to="/about">
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link me-2 text-uppercase" to="/blog">
                  blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link me-5 text-uppercase" to="/contact">
                  contact
                </NavLink>
              </li>
            </ul>
            <form className="d-flex form-search border rounded" role="search">
              <input
                className="form-control border border-0 input-search "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <span className="material-symbols-outlined d-flex me-2 fs-5  align-items-center">
                search
              </span>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
