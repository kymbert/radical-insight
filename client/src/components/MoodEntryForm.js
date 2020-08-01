import "./MoodEntryForm.scss";

import NumberInput from "./NumberInput";
import React from "react";
import Submit from "./Submit";
import TextCard from "./TextCard";
import TextInput from "./TextInput";
import { connect } from "react-redux";
import theme from "../theme";

class MoodEntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleMoodChange = this.handleMoodChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.handleSymptomsChange = this.handleSymptomsChange.bind(this);
    this.handleTriggersChange = this.handleTriggersChange.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      data: {
        note: "",
        symptoms: "",
        triggers: "",
        value: ""
      },
      showAllInputs: props.showAllInputs || false
    }
  }

  handleMoodChange(value) {
    this.setState({
      data: {
        ...this.state.data,
        value: value
      }
    });
  }

  handleNoteChange(value) {
    this.setState({
      data: {
        ...this.state.data,
        note: value
      }
    });
  }

  handleSymptomsChange(value) {
    this.setState({
      data: {
        ...this.state.data,
        symptoms: value
      }
    });
  }

  handleTriggersChange(value) {
    this.setState({
      data: {
        ...this.state.data,
        triggers: value
      }
    });
  }

  submit(event) {
    event.preventDefault();
    let symptomArray = this.state.data.symptoms.split(",");
    symptomArray.forEach((symptom, i) => {
      symptomArray[i] = symptom.trim();
    });
    let triggerArray = this.state.data.triggers.split(",");
    triggerArray.forEach((trigger, i) => {
      triggerArray[i] = trigger.trim();
    });

    fetch("/api/user_logs", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: this.props.user.id,
        data: this.state.data
      })
    }).then(res => {
      this.setState({
        data: {
          note: "",
          symptoms: [],
          triggers: [],
          value: ""
        },
        showAllInputs: false
      });
      this.forceUpdate();
    });
  }

  toggleMore() {
      return (
        <div className="action-container">
          <button
            style={{
              backgroundColor: "inherit",
              border: "none",
              color: theme.palette.primary.main,
              textAlign: "center"
            }}
            onClick={() => {
              this.setState({showAllInputs: !this.state.showAllInputs});
          }}>
            {this.state.showAllInputs ? "less" : "more"}
          </button>
        </div>
      )
  }

  validateMood(value) {
    return value >= 1 && value <= 10;
  }

  render() {
    const symptoms = this.state.showAllInputs ? (
      <TextInput
        onChange={this.handleSymptomsChange}
        value={this.state.data.symptoms}>symptoms </TextInput>
      ) : null;
    const triggers = this.state.showAllInputs ? (
      <TextInput
        onChange={this.handleTriggersChange}
        value={this.state.data.triggers}>triggers </TextInput>) : null;

    return (
      <TextCard header={
        <span>
          <i className="fi-stluxl-pen"></i>&nbsp;&nbsp;new entry
        </span>
        } style={this.props.style}>
        <div className="mood-entry-form">
          <NumberInput
            errorText="Please enter a number between 1 and 10."
            onChange={this.handleMoodChange}
            validate={this.validateMood}
            value={this.state.data.value}>mood </NumberInput>
          <TextInput
            onChange={this.handleNoteChange}
            value={this.state.data.note}>note </TextInput>
          {symptoms}
          {triggers}
          {this.toggleMore()}
          <div className="action-container">
            <div></div>
            <Submit onClick={this.submit} />
          </div>
        </div>
      </TextCard>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.token,
    user: state.user
  };
}

export default connect(mapStateToProps)(MoodEntryForm);
