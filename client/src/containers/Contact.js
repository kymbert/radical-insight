import "../styles/_contact.container.scss";

import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: "",
      email: "",
      comment: ""
    };
  }

  handleNameChange(event) {
    event.preventDefault();
    this.setState({ name: event.target.value });
  }

  handleEmailChange(event) {
    event.preventDefault();
    this.setState({ email: event.target.value });
  }

  handleCommentChange(event) {
    event.preventDefault();
    this.setState({ comment: event.target.value });
  }

  handleCancel(event) {
    event.preventDefault();
    window.location = "/";
  }

  handleSubmit(event) {
    event.preventDefault();
    window.alert("submit!");
  }

  render() {
    return (
      <div id="contact-page" className="content">
        <div className="contact-form">
          <h3>Contact</h3>
          <p>
            My name is{" "}
            <input type="text" name="name" onChange={this.handleNameChange} />,
          </p>
          <p>
            and my email is{" "}
            <input
              type="email"
              name="email"
              onChange={this.handleEmailChange}
            />
            .
          </p>
          <p>This is what I want to say:</p>
          <textarea name="comment" onChange={this.handleCommentChange} />
          <div className="submit-buttons">
            <button className="btn-secondary" onClick={this.handleCancel}>
              Cancel
            </button>
            <button className="btn-primary" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
