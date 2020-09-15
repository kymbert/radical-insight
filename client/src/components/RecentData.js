import "./RecentData.scss";
import "react-confirm-alert/src/react-confirm-alert.css";

import Card from "./Card";
import MoodEntryForm from "./MoodEntryForm";
import React from "react";
import ReactDOM from "react-dom";
import { confirmAlert } from "react-confirm-alert";
import { connect } from "react-redux";

class RecentData extends React.Component {
  constructor(props) {
    super(props);
    this.deleteLog = this.deleteLog.bind(this);
    this.editLog = this.editLog.bind(this);
  }

  componentDidMount() {
    fetch(`/api/moodLogs/user/${this.props.user.id}?orderBy=desc&limit=5`, {
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

  deleteLog(event) {
    event.preventDefault();
    const logId = event.currentTarget.getAttribute("data-id");
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="modal confirm">
            <p>Are you sure you want to delete this entry?</p>
            <div className="btn-row">
              <div className="spacer"></div>
              <button className="btn-secondary" onClick={onClose}>
                No
              </button>
              <button
                className="btn-primary"
                onClick={() => {
                  fetch(
                    `/api/moodLogs/user/${this.props.user.id}/moodLog/${logId}`,
                    {
                      method: "delete",
                      headers: {
                        Accept: "application/json",
                        Authorization: "this.props.token",
                        "Content-type": "application/json",
                      },
                    }
                  ).then((res) => {
                    res.json().then((json) => {
                      this.fillLogTable(json.logs);
                    });
                  });
                  onClose();
                }}
              >
                Yes
              </button>
            </div>
          </div>
        );
      },
    });
  }

  editLog(event) {
    event.preventDefault();
    const logId = event.currentTarget.getAttribute("data-id");
    fetch(`/api/moodLogs/user/${this.props.user.id}/moodLog/${logId}`, {
      method: "get",
      headers: {
        Accept: "application/json",
        Authorization: "this.props.token",
        "Content-type": "application/json",
      },
    }).then((res) => {
      res.json().then((logData) => {
        confirmAlert({
          customUI: ({ onClose }) => {
            return (
              <div className="modal">
                <MoodEntryForm
                  entryData={logData}
                  submitText="Update"
                  logId={logId}
                  userId={this.props.user.id}
                  title="update"
                  onClose={onClose}
                />
              </div>
            );
          },
        });
      });
    });
  }

  fillLogTable(logs) {
    const logRows = [
      <span className="log-date header" key="header-date">
        date
      </span>,
      <span className="log-mood-value header" key="header-value">
        mood
      </span>,
      <span className="log-mood-note header" key="header-note">
        note
      </span>,
      <span key="header-edit"></span>,
      <span key="header-delete"></span>,
    ];
    logs.forEach((log) => {
      logRows.push(
        <span className="log-date" key={`${log._id}-date`}>
          {this.formatDate(log.date)}
        </span>
      );
      logRows.push(
        <span className="log-value" key={`${log._id}-mood`}>
          {log.mood}
        </span>
      );
      logRows.push(
        <span className="log-note" key={`${log._id}-note`}>
          {log.note}
        </span>
      );
      logRows.push(
        <span
          className="icon action edit"
          key={`${log._id}-edit`}
          data-id={log._id}
          onClick={this.editLog}
        >
          <img src="/images/svg/edit-solid.svg" alt="edit" />
        </span>
      );
      logRows.push(
        <span
          className="icon action delete"
          key={`${log._id}-delete`}
          data-id={log._id}
          onClick={this.deleteLog}
        >
          <img src="/images/svg/delete.svg" alt="delete" />
        </span>
      );
    });
    ReactDOM.render(
      <div className="the-grid">{logRows}</div>,
      document.getElementById("recent-logs")
    );
  }

  formatDate(date) {
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

  render() {
    return (
      <Card
        header={
          <span>
            <i className="fi-stluxl-unordered-list-solid"></i>
            &nbsp;&nbsp;your recent logs
          </span>
        }
      >
        <div id="recent-logs"></div>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.token,
    user: state.user,
  };
}

export default connect(mapStateToProps)(RecentData);
