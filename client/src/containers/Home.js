import "../styles/_home.container.scss";

import MoodEntryForm from "../components/MoodEntryForm";
import React from "react";
import ReactDOM from "react-dom";
import TextCard from "../components/TextCard";
import { connect } from "react-redux";

class HomePage extends React.Component {
  componentDidMount() {
    fetch(`/api/user_logs/${this.props.user.id}`, {
      method: "get",
      headers: {
        Accept: "application/json",
        Authorization: this.props.token,
      },
    }).then((res) => {
      res.json().then((json) => {
        if (json.logs.length === 0) {
          ReactDOM.render(
            <p>No recent data to display.</p>,
            document.getElementById("recent-logs")
          );
        } else {
          this.fillLogTable(json.logs.slice(0, 5));
        }
      });
    });
  }

  _formatDate(date) {
    const d = new Date(date);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${months[d.getMonth()]} ${d.getDate()}`;
  }

  fillLogTable(logs) {
    const logRows = [
      <span className="log-date header" key="header-date">
        Date
      </span>,
      <span className="log-mood-value header" key="header-value">
        Value
      </span>,
      <span className="log-mood-note header" key="header-note">
        Note
      </span>,
    ];
    logs.forEach((log) => {
      logRows.push(
        <span className="log-date">{this._formatDate(log.date)}</span>
      );
      logRows.push(<span className="log-mood-value">{log.mood.value}</span>);
      logRows.push(<span className="log-mood-note">{log.mood.note}</span>);
    });
    ReactDOM.render(
      <div className="the-grid">{logRows}</div>,
      document.getElementById("recent-logs")
    );
  }

  render() {
    return (
      <div className="home-page content">
        <div id="hero">
          <div id="hero-overlay">
            <div className="heading">
              <h2>Welcome, {this.props.user.name}.</h2>
              <div className="grid">
                <MoodEntryForm header="Log Your Mood" />
                <TextCard
                  header={
                    <span>
                      <i className="fi-stluxl-unordered-list-solid"></i>
                      &nbsp;&nbsp;your recent entries
                    </span>
                  }
                >
                  <div id="recent-logs"></div>
                </TextCard>
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
    token: state.token,
    user: state.user,
  };
}

export default connect(mapStateToProps)(HomePage);
