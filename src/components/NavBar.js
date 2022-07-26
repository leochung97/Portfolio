import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
    )
  }
}

export default NavBar;