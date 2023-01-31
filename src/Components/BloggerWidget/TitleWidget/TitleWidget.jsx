import React, { Component } from "react";
import "./TitleWidget.css";
class TitleWidget extends Component {
  state = {};
  render() {
    return (
      <>
        <h1 className="title-widget fs-4 mb-4">{this.props.title}</h1>
      </>
    );
  }
}

export default TitleWidget;
