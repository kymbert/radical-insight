import "./TextCard.scss";

import React from "react";

class TextCard extends React.Component {
  render() {
    return (
      <div
        className={["text-card", this.props.additionalClassName].join(" ")}
        style={this.props.style}
      >
        <h3 className="card-heading">{this.props.header}</h3>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default TextCard;
