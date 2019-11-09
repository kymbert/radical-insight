import React from "react";
import { Link } from "react-router-dom";

class SiteHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onTop: true
    };
  }

  render() {
    return (
      <div id="site-header">
        <div className="item-1">
          <Link to={"/"}>Radical Insight</Link>
        </div>
        <div className="item-2"></div>
        <div className="item-3">
          <Link to={"/resources"}>resources</Link>
        </div>
        <div className="item-4">
          <Link to={"/"} className="inactive">
            sign in
          </Link>
        </div>
        <div style={{ clear: "both" }} />
      </div>
    );
  }
}

export default SiteHeader;
