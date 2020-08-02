import Input from "./Input";
import React from "react";

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id || "text-input";
  }

  render() {
    return (
      <Input
        errorText={this.props.errorText}
        onChange={this.props.onChange}
        type="text"
        id={this.id}
        validate={this.props.validate}
        value={this.props.value}
      >
        {this.props.children}
      </Input>
    );
  }
}

export default TextInput;
