import React from "react";
import { authLink } from "./AuthLink.scss";
import { connect } from "react-redux";

class AuthLink extends React.Component {
  render() {
    if (this.props.token) {
      return (
        <a id="auth-link" className={authLink} href="/logout">
          Sign Out|<i className="fi-xtluxl-sign-out-solid"></i>
        </a>
      );
    }
    return (
      <a id="auth-link" className={authLink} href="/login">
        Sign In|<i className="fi-xtluxl-sign-in-solid"></i>
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

export default connect(mapStateToProps)(AuthLink);
