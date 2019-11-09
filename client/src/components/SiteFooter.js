import React from "react";

class SiteFooter extends React.Component {
  render() {
    return (
      <div id="site-footer">
        <hr />
        <div id="footer-grid">
          <div
            className="item-1"
            style={{ overflow: "visible", "white-space": "nowrap" }}
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

export default SiteFooter;
