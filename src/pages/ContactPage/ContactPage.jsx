import React, { Component } from "react";
import Landing from "../../Components/Landing/Landing";
import MailForm from "../../Components/MailForm/MailForm";
import OfficeInfo from "../../Components/OfficeInfo/OfficeInfo";
import TextTitle from "../../Components/SubComponents/TextTitle/TextTitle";
import "./ContactPage.css";

import map from "./Map Shape.png";

class ContactPage extends Component {
  state = {};
  render() {
    return (
      <>
        <Landing
          title="CONTACT US"
          desc="Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec sollicitudin."
        />
        <TextTitle
          title="Office Info"
          content="Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec sollicitudin molestie malesuada. 
Donec sollicitudin molue in ipsum"
          className="mt-5"
        />
        <OfficeInfo />
        <TextTitle
          title="You Can Find Us Here"
          content="Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec sollicitudin molestie malesuada. 
          Donec sollicitudin molue in ipsum"
          className="mt-5"
        />
        <img src={map} alt="" className="mb-5 map" />
        <TextTitle title="You Can Find Us Here" className="mt-5" />
        <MailForm />
      </>
    );
  }
}

export default ContactPage;
