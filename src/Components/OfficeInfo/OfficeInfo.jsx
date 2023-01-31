import React, { Component } from "react";
import "./OfficeInfo.css";

class OfficeInfo extends Component {
  state = {};
  render() {
    return (
      <div className="office-info mt-5 mb-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-12 col-lg-4 col-md-4 mb-4">
              <div className="address">
                <span className="material-symbols-outlined mb-3 fs-4 p-3 rounded-circle text-white ">
                  home
                </span>
                <h1 className="title fs-4">Address:</h1>
                <p className="p-addres text-black-50 fs-6">
                  Some Street , 20 , NY
                </p>
                <p className="text-black-50 fs-6">Some Street , 40 , LA</p>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-4 mb-4">
              <div className="mail">
                <span className="material-symbols-outlined mb-3 fs-4 p-3 rounded-circle text-white">
                  mail
                </span>
                <h1 className="title fs-4">Email:</h1>
                <p className="p-mail text-black-50 fs-6">yourmail@mail.com</p>
                <p className="text-black-50 fs-6">yourmail@mail.com</p>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-4 mb-4">
              <div className="phone">
                <span className="material-symbols-outlined mb-3 fs-4 p-3 rounded-circle text-white">
                  phone
                </span>
                <h1 className="title fs-4">Phone:</h1>
                <p className="p-phone text-black-50 fs-6">(00)11-234-567-89</p>
                <p className="text-black-50 fs-6">11-234-567-890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OfficeInfo;
