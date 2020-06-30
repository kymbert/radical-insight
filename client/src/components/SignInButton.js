import React from "react";
import { connect } from "react-redux";
import { authBtn } from "./SignInButton.module.scss";

class SignInButton extends React.Component {
  render() {
    if (this.props.token) {
      return (
        <a id="auth-btn" className={authBtn} href="/logout">
          {this.props.user.name}|Sign Out
        </a>
      );
    }
    return (
      <a id="sign-in" className={authBtn} href="/login">
        Sign In|Sign Up
      </a>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.token,
    user: state.user
  };
}

export default connect(mapStateToProps)(SignInButton);
