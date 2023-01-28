import React, { Component } from "react";
import Features from "../../Components/Features/Features";
import Landing from "../../Components/Landing/Landing";
import ServicesSection from "../../Components/ServicesSection/ServicesSection";
import Button from "../../Components/SubComponents/Button/Button";
import TextTitle from "../../Components/SubComponents/TextTitle/TextTitle";

class ServicesPage extends Component {
  state = {};
  render() {
    return (
      <>
        <Landing
          title="Our Services"
          desc="Vivamus magna justo, lacinia eget consectetur sed, convallis at
          tellus. Donec sollicitudin."
        />
        <ServicesSection />
        <Features />
        <div className="contact container mb-5">
          <TextTitle
            title="Feel free to contact us for custom plans"
            content="Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec sollicitudin molestie malesuada. 
            Donec sollicitudin molue in ipsum"
          />
          <Button name="Contact Us" className="button" />
        </div>
      </>
    );
  }
}

export default ServicesPage;
