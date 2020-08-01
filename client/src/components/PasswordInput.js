import Input from "./Input";
import React from "react";

class PasswordInput extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.id || "password-input";
  }

  render() {
    return (
      <Input
        errorText={this.props.errorText}
        validate={this.props.validate}
        id={this.id}
        children={this.props.children}
        onChange={this.props.onChange}
        type="password"
        value={this.props.value} />
    );
  }
}

export default PasswordInput;
