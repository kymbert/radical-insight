import React from "react";
import { textInput, textInputLabel } from "./TextInput.module.scss";

class TextInput extends React.Component {
  render() {
    return (
      <div>
        <span className={textInputLabel}>{this.props.children}</span>
        <span className={textInput}>
          <input type={this.props.type} onChange={this.props.onChange} />
        </span>
      </div>
    );
  }
}

export default TextInput;
