import React, { Component } from "react";
import Nav from "./Nav/Nav";
import Subnavbar from "./Subnavbar/Subnavbar";
import "./Navbar.css";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <>
        <Subnavbar />
        <Nav />
      </>
    );
  }
}

export default Navbar;
