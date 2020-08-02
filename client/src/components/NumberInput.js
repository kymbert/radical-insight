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
        validate={this.props.validate}
        value={this.props.value}
      >
        {this.props.children}
      </Input>
    );
  }
}

export default NumberInput;
