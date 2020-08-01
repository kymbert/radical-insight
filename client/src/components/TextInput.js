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
        children={this.props.children}
        onChange={this.props.onChange}
        type="text"
        id={this.id}
        validate={this.props.validate}
        value={this.props.value} />
    );
  }
}

export default TextInput;
