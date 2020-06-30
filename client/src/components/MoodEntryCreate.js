import React from "react";
import TextCard from "./TextCard";
import TextInput from "./TextInput";
import { connect } from "react-redux";

class MoodEntryCreate extends React.Component {
  render() {
    return (
      <TextCard>
        <TextInput type="number">mood level </TextInput>
        <TextInput type="text">symptoms </TextInput>
        <TextInput type="text">triggers </TextInput>
        <TextInput type="text">notes </TextInput>
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

export default connect(mapStateToProps)(MoodEntryCreate);
