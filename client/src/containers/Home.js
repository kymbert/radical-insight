import "../styles/_home.container.scss";

import Card from "../components/Card";
import MoodEntryForm from "../components/MoodEntryForm";
import React from "react";
import RecentData from "../components/RecentData";
import { confirmAlert } from "react-confirm-alert";
import { connect } from "react-redux";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.newLog = this.newLog.bind(this);
  }

  newLog(event) {
    event.preventDefault();
    confirmAlert({
      customUI: ({ onClose }) => (
        <div className="modal">
          <MoodEntryForm
            title="new entry"
            entryData={{}}
            userId={this.props.user.id}
            onClose={onClose}
          />
        </div>
      ),
    });
  }

  render() {
    return (
      <div className="home-page content">
        <div id="hero">
          <div id="hero-overlay">
            <div className="heading">
              <h2>Welcome, {this.props.user.name}.</h2>
              <div className="grid">
                <Card id="new-log">
                  <div id="new-log" />
                  <button className="btn-primary" onClick={this.newLog}>
                    track mood now
                  </button>
                </Card>
                <RecentData />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    moodEntryFormDidSubmit: state.moodEntryFormDidSubmit,
    token: state.token,
    user: state.user,
  };
}

export default connect(mapStateToProps)(HomePage);
