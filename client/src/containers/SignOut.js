import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { reset } from "../actions";

class SignOut extends React.Component {
  componentDidMount() {
    this.props.reset();
    window.location = "/";
  }

  render() {
    return (
      <div
        id="log-out-page"
        style={{
          marginTop: "15vh",
          height: "80vh"
        }}
      >
        <h3>Goodbye!</h3>
        <h6>Come back soon.</h6>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ reset }, dispatch);
}

export default connect(null, mapDispatchToProps)(SignOut);
