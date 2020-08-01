import Input from "./Input";
import React from "react";

class EmailInput extends React.Component {
  validate(value) {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(value);
  }

  render() {
    return (
      <Input
        children={this.props.children}
        errorText="A valid email address is required."
        id="email-input"
        onChange={this.props.onChange}
        type="email"
        validate={this.validate}
        value={this.props.value} />
    );
  }
}

export default EmailInput;
