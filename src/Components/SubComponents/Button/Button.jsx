import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  state = {};
  render() {
    return (
      <>
        <button className="button py-2 border border-0 rounded px-3 fs-7 text-white ">
          {this.props.name}
        </button>
      </>
    );
  }
}

export default Button;
