import "./Input.scss";

import React from "react";
import { v4 as uuid } from "uuid";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.id = props.id || "input-" + uuid().slice(0, 5);
    this.validate = props.validate || function() { return true; };
    this.state = {
      value: props.value || ""
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.value !== prevState.value) {
      return { value: nextProps.value };
    } else {
      return null;
    }
  }

  handleChange(event) {
    event.preventDefault();
    const isValid = this.validate(event.target.value);
    if (isValid) {
      document.querySelector(`div#${this.id} span.error-text`).innerText = "";
      this.props.onChange(event.target.value);
    } else {
      document.querySelector(`div#${this.id} span.error-text`).innerText = this.props.errorText;
    }
  }

  render() {
    return (
      <div className="input-container" id={this.id}>
        <label className="input-field-label">{this.props.children}</label>
        <span className="input-field">
          <input type={this.props.type} onChange={this.handleChange} value={this.state.value} />
        </span>
        <span className="error-text"></span>
      </div>
    );
  }
}

export default Input;
