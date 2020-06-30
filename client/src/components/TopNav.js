import React from "react";
import SignInButton from "./SignInButton";

class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(event) {
    event.preventDefault();
    document.getElementById("top-nav").classList.toggle("responsive");
    document.getElementById("menu-icon").classList.toggle("fa-bars");
    document.getElementById("menu-icon").classList.toggle("fa-times");
  }

  render() {
    return (
      <div id="top-nav">
        <span className="icon" onClick={this.toggleMenu}>
          <i id="menu-icon" className="fas fa-bars"></i>
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
        <SignInButton />
      </div>
    );
  }
}

export default TopNav;
