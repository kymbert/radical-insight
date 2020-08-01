import { reset, updateToken, updateUser } from "../actions";

import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";
import React from "react";
import Submit from "../components/Submit";
import TextCard from "../components/TextCard";
import TextInput from "../components/TextInput";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import theme from "../theme";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassword1Change = this.handlePassword1Change.bind(this);
    this.handlePassword2Change = this.handlePassword2Change.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validatePassword2 = this.validatePassword2.bind(this);
  }

  handleNameChange(value) {
    this.setState({ name: value });
  }

  handleEmailChange(value) {
    this.setState({ email: value });
  }

  handlePassword1Change(value) {
    this.setState({ password: value });
  }

  handlePassword2Change(value) {
    this.setState({ password2: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const body = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    fetch("/api/auth/register", {
      method: "post",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(body)
    }).then(response => {
      if (response.ok) {
        response.json().then(() => {
          fetch("/api/auth/login", {
            method: "post",
            headers: {
              "Content-type": "application/json",
              Accept: "application/json"
            },
            body: JSON.stringify({
              email: this.state.email,
              password: this.state.password
            })
          }).then(response => {
            if (response.ok) {
              response.json().then(json => {
                this.props.updateToken({ token: json.token });
                this.props.updateUser({ ...json.user });
              });
              window.location = "/";
            }
          });
        });
      } else {
        response.json().then(json => {
          document.getElementById("name-error").innerText = json.name || "";
          document.getElementById("email-error").innerText = json.email || "";
          document.getElementById("password-error").innerText =
            json.password || "";
          document.getElementById("password-error").innerText =
            json.password2 || "";
        });
      }
    });
  }

  validateName(value) {
    return value.match(/^[\w\s-']+$/);
  }

  validatePassword1(value) {
    return value.length >= 12;
  }

  validatePassword2(value) {
    return value === this.state.password;
  }

  render() {
    return (
      <div id="sign-up-page" className="content">
        <h3>Create an Account</h3>
        <TextCard style={{
          backgroundColor: theme.palette.primary.transparent,
        }}>
          <TextInput
            id="name-input"
            errorText="Name is required. Feel free to use a pseudonym, though."
            onChange={this.handleNameChange}
            validate={this.validateName}>
            name
          </TextInput>
          <EmailInput onChange={this.handleEmailChange}>
            email
          </EmailInput>
          <PasswordInput
            id="password-1"
            errorText="Password must be at least 12 characters."
            validate={this.validatePassword1}
            onChange={this.handlePassword1Change}>
            password
          </PasswordInput>
          <PasswordInput
            id="password-2"
            errorText="Passwords must match."
            validate={this.validatePassword2}
            onChange={this.handlePassword2Change}>
            confirm password
          </PasswordInput>
          <Submit onClick={this.handleSubmit} style={{ float: "right" }} />
          <div style={{ clear: "both" }}></div>
        </TextCard>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ reset, updateUser, updateToken }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
