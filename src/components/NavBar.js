import React, { Component } from "react";
import "../scss/navbar.scss"

class NavBar extends Component {  
  render() {
    return (
      <nav>
        <div className="navbar-menu">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar;