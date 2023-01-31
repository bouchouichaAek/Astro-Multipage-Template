import React, { Component } from "react";
import singleBlog from "./SingleBlog.png";
import Button from "../SubComponents/Button/Button";
import "./SingleBlog.css";

class SingleBlog extends Component {
  state = {};
  render() {
    return (
      <div className="single-blog mb-5">
        <img src={singleBlog} alt="" className="blog-img" />
        <div className="blog-text">
          <h1 className="title fs-3 pt-3">Our awesome title for blog</h1>
          <div className="info d-flex d-flex flex-column flex-lg-row justify-content-start align-items-start gap-lg-5">
            <p className="calendar text-black-50 info  justify-content-start align-items-center ">
              <span className="material-symbols-outlined me-2">
                calendar_month
              </span>
              23 September 2013
            </p>
            <p className="person flex-grow-1 text-black-50 info d-flex justify-content-start align-items-center">
              <span className="material-symbols-outlined me-2">person</span>By:
              John Doe
            </p>
            <p className="person text-black-50 info d-flex justify-content-end align-items-center">
              <span className="material-symbols-outlined me-2 ">comment</span>7
              Comments
            </p>
          </div>
          <p className="content text-black-50">
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus. Donec sollicitudin molestie malesuada. Donec sollicitudin
            molue in ipsum consectetur sed, convallis at tellus. Donec
            sollicitudin molestie malesuada. Donec sollicitudin molue in ipsum
          </p>
          <Button name="Read More" />
        </div>
      </div>
    );
  }
}

export default SingleBlog;
