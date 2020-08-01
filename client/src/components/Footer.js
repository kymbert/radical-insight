import "./Footer.scss";

import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div></div>
        <div>
          <div className="img-credit">
            Background image by <a href="https://unsplash.com/@isaacdavis" target="_blank" rel="noopener noreferrer">Isaac Davis</a>.
          </div>
          <div className="icon-credit">
            Icons by <a href="https://friconix.com" target="_blank" rel="noopener noreferrer">Friconix</a>.
          </div>
          <div className="copyright">
            Radical Insight &copy; {new Date().getFullYear()} <a href="http://www.kylecancode.com" target="_blank" rel="noopener noreferrer">Kyle Imbertson</a>.
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
