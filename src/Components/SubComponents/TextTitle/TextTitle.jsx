import React, { Component } from "react";

class TextTitle extends Component {
  state = {};
  render() {
    return (
      <div className="container text-center col-lg-7">
        <h2 className="fs-4">{this.props.title}</h2>
        <p className="text-black-50">{this.props.content}</p>
      </div>
    );
  }
}

export default TextTitle;
