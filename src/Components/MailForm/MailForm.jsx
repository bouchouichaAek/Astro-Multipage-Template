import React, { Component } from "react";
import Button from "../SubComponents/Button/Button";
import "./MailForm.css";

class MailForm extends Component {
  state = {};
  render() {
    return (
      <div className="contact-form mb-5 mt-5">
        <div class="container">
          <form action="" className="mx-auto">
            <div class="d-flex justify-content-start align-items-center">
              <div className="name d-flex flex-column justify-content-center align-items-center">
                <label htmlFor="" className="align-self-start">
                  Name <span> *</span>
                </label>
                <input
                  className="rounded p-2"
                  type="text"
                  name=""
                  id=""
                  placeholder="your name here"
                />
              </div>
              <div className="email-lable d-flex flex-column justify-content-center align-items-center">
                <label htmlFor="" className="align-self-start">
                  Email<span> *</span>
                </label>
                <input
                  className="rounded p-2"
                  type="email"
                  name=""
                  id=""
                  placeholder="your mail here"
                />
              </div>
              <div className="message mt-3">
                <label htmlFor="">
                  Message<span> *</span>
                </label>
                <textarea
                  className="rounded p-2 message"
                  cols="30"
                  rows="10"
                  placeholder="your message here"
                ></textarea>
              </div>
            </div>
            <Button name="Send Message" className="button" />
          </form>
        </div>
      </div>
    );
  }
}

export default MailForm;
