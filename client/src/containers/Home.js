import MoodEntryCreate from "../components/MoodEntryCreate";
import React from "react";
import TextCard from "../components/TextCard";
import { connect } from "react-redux";

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div id="hero">
          <div id="hero-overlay">
            <div className="heading">
              <h2>Welcome, {this.props.user.name}.</h2>
              <div className="grid">
                <TextCard>
                  <p>Your recent records.</p>
                </TextCard>
                <MoodEntryCreate />
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
    user: state.user
  };
}

export default connect(mapStateToProps)(HomePage);
