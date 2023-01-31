import React, { Component } from "react";
import TitleWidget from "./TitleWidget/TitleWidget";
import "./BloggerWidget.css";

class BloggerWidget extends Component {
  state = {};
  render() {
    return (
      <div className="blogger-widget">
        <TitleWidget title="Search Blog" />
        <form
          className="d-flex form-search border rounded-1 mb-5"
          role="search"
        >
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
        <TitleWidget title="Categories" />
        <div className="categories">
          <ul className="list-unstyled" list-unstyled="true">
            <li className="mb-3">
              Graphic Design
              <span className="ms-2">(3)</span>
            </li>
            <li className="mb-3">
              Video
              <span className="ms-2">(7)</span>
            </li>
            <li className="mb-3">
              Audio
              <span className="ms-2">(3)</span>
            </li>
            <li className="mb-3">
              Business
              <span className="ms-2">(9)</span>
            </li>
            <li className="mb-3">
              Photography
              <span className="ms-2">(5)</span>
            </li>
            <li className="mb-3">
              Web Design
              <span className="ms-2">(11)</span>
            </li>
            <li className="mb-3">
              Media
              <span className="ms-2">(6)</span>
            </li>
          </ul>
        </div>
        <TitleWidget title="Archives" />
        <div className="archives">
          <ul className="list-unstyled" list-unstyled="true">
            <li className="mb-3">
              January
              <span className="ms-2">(3)</span>
            </li>
            <li className="mb-3">
              February
              <span className="ms-2">(7)</span>
            </li>
            <li className="mb-3">
              March
              <span className="ms-2">(3)</span>
            </li>
            <li className="mb-3">
              April
              <span className="ms-2">(9)</span>
            </li>
            <li className="mb-3">
              May
              <span className="ms-2">(5)</span>
            </li>
            <li className="mb-3">
              June
              <span className="ms-2">(11)</span>
            </li>
            <li className="mb-3">
              Jully
              <span className="ms-2">(15)</span>
            </li>
            <li className="mb-3">
              Agust
              <span className="ms-2">(7)</span>
            </li>
            <li className="mb-3">
              September
              <span className="ms-2">(9)</span>
            </li>
            <li className="mb-3">
              October
              <span className="ms-2">(5)</span>
            </li>
            <li className="mb-3">
              November
              <span className="ms-2">(11)</span>
            </li>
            <li className="mb-3">
              December
              <span className="ms-2">(6)</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default BloggerWidget;
