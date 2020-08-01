import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { reset } from "../actions";

class LogOut extends React.Component {
  componentDidMount() {
    this.props.reset();
  }

  render() {
    return (
      <div
        id="log-out-page"
        className="content"
        style={{
          marginTop: "15vh",
          height: "80vh",
          fontFamily: "Montserrat",
          textAlign: "center"
        }}
      >
        <h2>Goodbye!</h2>
        <p>Come back soon.</p>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ reset }, dispatch);
}

export default connect(null, mapDispatchToProps)(LogOut);
