import React, { Component } from "react";
import "./HomePage.css";
import DomainSearch from "../../Components/DomainSearch/DomainSearch";
import Header from "../../Components/Header/Header";
import Plan from "../../Components/Plans/Plan";
import Service from "../../Components/Services/Service";
import TextTitle from "../../Components/SubComponents/TextTitle/TextTitle";
import Button from "../../Components/SubComponents/Button/Button";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <>
        <div>
          <Header />
          <Service />
          <DomainSearch />
          <div className="container container-plan">
            <div className="row gap-4 justify-content-center">
              <Plan
                className="col-3"
                status="BASIC"
                price="9,99"
                storage="10"
                mailAccounts="500"
                databases="10"
                rams="512MB"
              />
              <Plan
                className="col-3"
                status="PRO"
                price="19,99"
                storage="20"
                mailAccounts="1000"
                databases="20"
                rams="1GB"
              />
              <Plan
                className="col-3"
                status="PREMIUM"
                price="29,99"
                storage="50"
                mailAccounts="5000"
                databases="50"
                rams="2GB"
              />
              <Plan
                className="col-3"
                status="ULTRA"
                price="49,99"
                storage="100"
                mailAccounts="1000"
                databases="100"
                rams="4GB"
              />
            </div>
          </div>
          <div className="contact container mb-5">
            <TextTitle
              title="Feel free to contact us for custom plans"
              content="Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec sollicitudin molestie malesuada. 
            Donec sollicitudin molue in ipsum"
            />
            <Button name="Contact Us" className="button" />
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
