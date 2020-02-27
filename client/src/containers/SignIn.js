import { reset, updateToken, updateUser } from "../actions";

import React from "react";
import TextInput from "../components/TextInput";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    event.preventDefault();
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    event.preventDefault();
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const body = {
      email: this.state.email,
      password: this.state.password
    };
    fetch("/api/auth/login", {
      method: "post",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(body)
    }).then(response => {
      if (response.ok) {
        response.json().then(json => {
          this.props.updateToken({ token: json.data.token });
          this.props.updateUser(json.data.user);
          window.location = "/";
        });
      } else {
        response.json().then(json => {
          if (json.status === "error") {
            document.getElementById("error-text").innerText = json.message;
          } else {
            document.getElementById("error-text").innerText = json.data.message;
          }
        });
      }
    });
  }

  render() {
    return (
      <div id="log-in-page">
        <h3>Sign In</h3>
        <div id="log-in-form">
          <div id="error-text" className="error" />
          <TextInput type="email" onChange={this.handleEmailChange}>
            email
          </TextInput>
          <TextInput type="password" onChange={this.handlePasswordChange}>
            password
          </TextInput>
          <div className="submit-buttons">
            <button className="btn-primary" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
          <div style={{ clear: "both" }} />
        </div>
        <div className="need-account">
          Still need an account? <a href="/signup">Create one now.</a>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ reset, updateToken, updateUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(SignIn);
