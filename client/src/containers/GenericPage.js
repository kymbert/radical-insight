import React from "react";

class GenericPage extends React.Component {
  render() {
    return (
      <div className="content">
        <div id="title">
          <h1 style={{ marginBottom: "0" }}>{this.props.title}</h1>
          <h3 style={{ marginTop: "0" }}>{this.props.subtitle}</h3>
        </div>
        <div className="body">{this.props.body}</div>
      </div>
    );
  }
}

export default GenericPage;
