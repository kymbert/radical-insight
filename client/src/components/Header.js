import "./Header.scss";

import AuthLink from "./AuthLink";
import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(event) {
    event.preventDefault();
    document.getElementById("header").classList.toggle("responsive");
    const elems = event.currentTarget.getElementsByTagName("i");
    Array.from(elems).forEach(element => {
      if (element.style.display === "none") {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });

    // document.getElementById("menu-icon").classList.toggle("fi-xnluxl-three-bars");
    // document.getElementById("menu-icon").classList.toggle("fi-xnluxl-times");

  }

  render() {
    return (
      <div id="header">
        <span className="icon" onClick={this.toggleMenu}>
          <i className="fi-xnluxl-three-bars"></i>
          <i className="fi-xnluxl-times" style={{ display: "none" }}></i>
        </span>
        <a id="home" href="/">
          Home
        </a>
        <a id="about" href="/about">
          About
        </a>
        <a id="resources" href="/resources">
          Resources
        </a>
        <a id="contact" href="/contact">
          Contact
        </a>
        <AuthLink />
      </div>
    );
  }
}

export default Header;
