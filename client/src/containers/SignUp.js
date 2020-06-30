import { reset, updateToken, updateUser } from "../actions";

import React from "react";
import TextInput from "../components/TextInput";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
const nameformat = /^[\w\s-']+$/;

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
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePassword2Change = this.handlePassword2Change.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    event.preventDefault();
    if (!event.target.value.match(nameformat)) {
      document.getElementById("name-error").innerText =
        "Name is required. Feel free to use a pseudonym, though.";
    } else {
      document.getElementById("name-error").innerText = "";
      this.setState({ name: event.target.value });
    }
  }

  handleEmailChange(event) {
    event.preventDefault();
    if (!event.target.value.match(mailformat)) {
      document.getElementById("email-error").innerText = "Email must be valid.";
    } else {
      document.getElementById("email-error").innerText = "";
      this.setState({ email: event.target.value });
    }
  }

  handlePasswordChange(event) {
    event.preventDefault();
    if (event.target.value.length < 12) {
      document.getElementById("password-error").innerText =
        "Password must be at least 12 characters.";
    } else {
      document.getElementById("password-error").innerText = "";
      this.setState({ password: event.target.value });
    }
  }

  handlePassword2Change(event) {
    event.preventDefault();
    if (event.target.value !== this.state.password) {
      document.getElementById("password2-error").innerText =
        "Passwords must match.";
    } else {
      document.getElementById("password2-error").innerText = "";
      this.setState({ password2: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const body = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    fetch(process.env.REACT_APP_BASE_API_PATH + "/auth/register", {
      method: "post",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(body)
    }).then(response => {
      if (response.ok) {
        response.json().then(json => {
          fetch(process.env.REACT_APP_BASE_API_PATH + "/auth/login", {
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

  render() {
    return (
      <div id="sign-up-page">
        <h3>Create an Account</h3>
        <div id="sign-up-form">
          <span id="name-error" className="error error-field" />
          <TextInput type="text" onChange={this.handleNameChange}>
            name
          </TextInput>
          <span id="email-error" className="error error-field" />
          <TextInput type="email" onChange={this.handleEmailChange}>
            email
          </TextInput>
          <span id="password-error" className="error error-field" />
          <TextInput type="password" onChange={this.handlePasswordChange}>
            password
          </TextInput>
          <span id="password2-error" className="error error-field" />
          <TextInput type="password" onChange={this.handlePassword2Change}>
            confirm password
          </TextInput>
          <div className="submit-buttons">
            <button
              className="btn-primary btn-submit"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ reset, updateUser, updateToken }, dispatch);
}

export default connect(null, mapDispatchToProps)(SignUp);
