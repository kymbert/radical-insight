import "./MoodEntryForm.scss";
import "react-confirm-alert/src/react-confirm-alert.css";

import Card from "./Card";
import DatePicker from "react-date-picker";
import NumberInput from "./NumberInput";
import React from "react";
import TextInput from "./TextInput";

class MoodEntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleMoodChange = this.handleMoodChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.handleStressorsChange = this.handleStressorsChange.bind(this);
    this.submit = this.submit.bind(this);
    const entryData = {
      date: props.entryData.date || new Date(),
      mood: props.entryData.mood || "",
      note: props.entryData.note || "",
      stressors: props.entryData.stressors || "",
    };
    this.state = {
      entryData: entryData,
      logId: props.logId,
      userId: props.userId,
    };
  }

  handleDateChange(value) {
    this.setState({
      entryData: {
        ...this.state.entryData,
        date: new Date(value),
      },
    });
  }

  handleMoodChange(value) {
    this.setState({
      entryData: {
        ...this.state.entryData,
        mood: value,
      },
    });
  }

  handleNoteChange(value) {
    this.setState({
      entryData: {
        ...this.state.entryData,
        note: value,
      },
    });
  }

  handleStressorsChange(value) {
    this.setState({
      entryData: {
        ...this.state.entryData,
        stressors: value,
      },
    });
  }

  submit(event) {
    event.preventDefault();
    let stressorArray =
      typeof this.state.entryData.stressors === "object"
        ? this.state.entryData.stressors[0].split(",")
        : [];
    stressorArray.forEach((stressor, i) => {
      stressorArray[i] = stressor.trim();
    });

    if (this.state.logId) {
      fetch(
        `/api/moodLogs/user/${this.state.userId}/moodLog/${this.state.logId}`,
        {
          method: "put",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify(this.state.entryData),
        }
      ).then(() => {
        this.setState({
          entryData: {
            date: new Date(),
            mood: "",
            note: "",
            stressors: "",
          },
        });
        this.forceUpdate();
      });
    } else {
      fetch("/api/moodLogs", {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          userId: this.props.userId,
          entryData: this.state.entryData,
        }),
      }).then(() => {
        this.setState({
          entryData: {
            date: new Date(),
            mood: "",
            note: "",
            stressors: "",
          },
        });
        this.forceUpdate();
      });
    }
    this.props.onClose();
  }

  validateDate(value) {
    return Date.now() >= value;
  }

  validateZeroTen(value) {
    return value >= 0 && value <= 10;
  }

  addLeadingZero(number) {
    if (number <= 9) {
      return `0${number}`;
    }
    return number;
  }

  render() {
    return (
      <Card
        header={
          <span>
            <i className="fi-stluxl-pen"></i>&nbsp;&nbsp;{this.props.title}
          </span>
        }
        style={this.props.style}
      >
        <div className="mood-entry-form">
          <div className="input-container">
            <label>date </label>
            <DatePicker
              value={this.state.entryData.date}
              onChange={this.handleDateChange}
            />
          </div>
          <NumberInput
            errorText="Please enter a number between 0 and 10."
            onChange={this.handleMoodChange}
            validate={this.validateZeroTen}
            value={this.state.entryData.mood}
          >
            mood{" "}
          </NumberInput>
          <TextInput
            onChange={this.handleStressorsChange}
            value={this.state.entryData.stressors}
          >
            stressors{" "}
          </TextInput>
          <TextInput
            onChange={this.handleNoteChange}
            value={this.state.entryData.note}
          >
            note{" "}
          </TextInput>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto max-content max-content",
            }}
          >
            <div className="spacer"></div>
            <button className="btn-secondary" onClick={this.props.onClose}>
              Cancel
            </button>
            <button className="btn-primary" onClick={this.submit}>
              {this.props.submitText || "Submit"}
            </button>
          </div>
        </div>
      </Card>
    );
  }
}

export default MoodEntryForm;
