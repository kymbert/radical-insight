import React from "react";
// import NavMenu from "./NavMenu";
import TopNav from "./TopNav";
// import { Menu, Navbar, PreviewBlock } from "react-lite-ui";
// import { header } from "./Header.module.scss";

// const MenuIcon = () => (
//       <svg xmlns="http://www.w3.org/2000/svg" height="20px" id="Layer_1"  version="1.1" viewBox="0 0 32 32" width="20px"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
// );

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState(prevState => ({
      toggled: !prevState.toggled
    }));
  }

  render() {
    return (
      <div>
        <TopNav />
      </div>
    );
  }
}

export default Header;
