import React, { Component } from "react";
import "./Ourcompany.css";
import lgimg from "./img/IAMGE.png";
import smImg from "./img/smImg.png";

class Ourcompany extends Component {
  state = {};
  render() {
    return (
      <div className="our-company mb-5 ">
        <div className="row text-center">
          <div className="col-12 col-lg-5 pb-4">
            <div className="row">
              <img src={lgimg} alt="" className="lgimg  col-12 pe-4" />
              <div className="imgs d-flex justify-content-center mt-3 col-12 gap-2">
                <img src={smImg} alt="" className="col-2" />
                <img src={smImg} alt="" className="col-2" />
                <img src={smImg} alt="" className="col-2" />
                <img src={smImg} alt="" className="col-2" />
                <img src={smImg} alt="" className="col-2" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 ">
            <div className="text text-black">
              <p className="text-black text-start">
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus. Nulla quis lorem ut libero malesuada feugiat.
                Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Vestibulum ac diam sit
                amet quam vehicula elementum sed sit am
              </p>
              <p className="text-black text-start">
                Suscipit tortor eget felis porttitor volutpat. Quisque velit
                nisi, pretium ut lacinia in, elementum id enim. Vivamus magna
                justo, lacinia eget consectetur sed, convallis at tellus.orem
                ipsum dolor si.
              </p>
              <p className="text-black text-start">
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Vivamus magna justo, lac inia eget consectetur sed, convallis at
                tellus.
              </p>
              <p className="text-black text-start">
                Suscipit tortor eget felis porttitor volutpat. Quisque velit
                nisi, pretium ut lacinia in, elementum id enim. Vivamus magna
                justo, lacinia eget consectetur sed, convallis at tellus.orem
                ipsum dolor si.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ourcompany;
