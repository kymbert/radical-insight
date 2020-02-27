import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div id="footer-grid">
          <div
            className="item-1"
            style={{ overflow: "visible", whiteSpace: "nowrap" }}
          >
            <p className="small-text">
              &copy; {new Date().getFullYear()} Kyle Imbertson
            </p>
          </div>
          <div className="item-2"></div>
          <div className="item-3"></div>
          <div className="item-4"></div>
          <div style={{ clear: "both" }} />
        </div>
      </div>
    );
  }
}

export default Footer;
