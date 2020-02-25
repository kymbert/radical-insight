import React from "react";
import { reset } from "../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class LogOut extends React.Component {
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

export default connect(null, mapDispatchToProps)(LogOut);
