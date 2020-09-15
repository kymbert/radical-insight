import "../styles/_logIn.container.scss";

import { reset, updateToken, updateUser } from "../actions";

import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";
import React from "react";
import Submit from "../components/Submit";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(value) {
    this.setState({ email: value });
  }

  handlePasswordChange(value) {
    this.setState({ password: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const body = {
      email: this.state.email,
      password: this.state.password,
    };
    fetch("/api/auth/login", {
      method: "post",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          this.props.updateToken({ token: json.data.token });
          this.props.updateUser(json.data.user);
          window.location = "/";
        });
      } else {
        response.json().then((json) => {
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
      <div id="log-in-page" className="content">
        <h3>Log In</h3>
        <div id="log-in-form">
          <div id="error-text" className="error" />
          <EmailInput onChange={this.handleEmailChange}>email</EmailInput>
          <PasswordInput onChange={this.handlePasswordChange}>
            password
          </PasswordInput>
          <Submit onClick={this.handleSubmit} style={{ float: "right" }} />
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

export default connect(null, mapDispatchToProps)(LogIn);
