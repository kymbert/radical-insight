import React from "react";

class Submit extends React.Component {
  render() {
    return (
      <button className="btn-primary"
         style={{
           ...this.props.style,
           marginBottom: "0",
           marginRight: "0"
         }}
         onClick={this.props.onClick}>
        Submit
      </button>
    )
  }
}

export default Submit;
