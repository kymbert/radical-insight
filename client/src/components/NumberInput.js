import Input from "./Input";
import React from "react";

class NumberInput extends React.Component {
  render() {
    return (
      <Input
        type="number"
        id={this.props.id}
        errorText={this.props.errorText}
        onChange={this.props.onChange}
        children={this.props.children}
        validate={this.props.validate}
        value={this.props.value} />
    );
  }
}

export default NumberInput;
