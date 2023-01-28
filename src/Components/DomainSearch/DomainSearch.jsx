import React, { Component } from "react";
import Button from "../SubComponents/Button/Button";
import TextTitle from "../SubComponents/TextTitle/TextTitle";
import "./DomainSearch.css";

class DomainSearch extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container text-center pt-5 pb-5">
          <TextTitle
            title="Check your domain name"
            content="Enter the domain name to register or transfer"
          />
          <form
            action=""
            className="col-12 domain-search m-auto d-flex  justify-content-center align-items-center rounded mt-4"
          >
            <select className="me-3 select-domain text-end rounded bg-transparent">
              <option value="">.com</option>
              <option value="">.net</option>
              <option value="">.org</option>
            </select>
            <Button name="Search Domain" />
          </form>
        </div>
      </>
    );
  }
}

export default DomainSearch;
