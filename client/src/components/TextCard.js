import React from "react";
import { textCard } from "./TextCard.module.scss";

class TextCard extends React.Component {
  render() {
    return (
      <div
        className={[textCard, "text-card"].join(" ")}
        style={this.props.style}
      >
        <h6>{this.props.header}</h6>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default TextCard;
