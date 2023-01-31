import React, { Component } from "react";
import image from "./Clouds.png";
import "./Team.css";

class Team extends Component {
  state = {};
  render() {
    return (
      <div className="team mb-5">
        <div className="row text-center">
          <div className="col-12 col-md-6 col-lg-3 pb-4">
            <div className="team-box border border-dark-subtle rounded-4 overflow-hidden">
              <div className="up-box position-relative">
                <img src={image} alt="" />
              </div>
              <div className="down-box">
                <h3 className="name fs-4">John Doe</h3>
                <hr className="mx-auto" />
                <p className="desc text-black fs-6 px-2 text-black-50">
                  Curabitur aliquet quam id dui posu ere blandit.Curabitur ae
                  blandit
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 pb-4">
            <div className="team-box border border-dark-subtle rounded-4 overflow-hidden">
              <div className="up-box position-relative">
                <img src={image} alt="" />
              </div>
              <div className="down-box">
                <h3 className="name fs-4">John Doe</h3>
                <hr className="mx-auto" />
                <p className="desc text-black fs-6 px-2 text-black-50">
                  Curabitur aliquet quam id dui posu ere blandit.Curabitur ae
                  blandit
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 pb-4">
            <div className="team-box border border-dark-subtle rounded-4 overflow-hidden">
              <div className="up-box position-relative">
                <img src={image} alt="" />
              </div>
              <div className="down-box">
                <h3 className="name fs-4">John Doe</h3>
                <hr className="mx-auto" />
                <p className="desc text-black fs-6 px-2 text-black-50">
                  Curabitur aliquet quam id dui posu ere blandit.Curabitur ae
                  blandit
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 pb-4">
            <div className="team-box border border-dark-subtle rounded-4 overflow-hidden">
              <div className="up-box position-relative">
                <img src={image} alt="" />
              </div>
              <div className="down-box">
                <h3 className="name fs-4">John Doe</h3>
                <hr className="mx-auto" />
                <p className="desc text-black fs-6 px-2 text-black-50">
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

export default Team;
