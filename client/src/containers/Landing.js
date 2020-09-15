import "../styles/_landing.container.scss";

import React from "react";
import Card from "../components/Card";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <div id="hero">
          <div id="hero-overlay">
            <div className="heading">
              <h1>Radical Insight</h1>
            </div>
          </div>
        </div>
        <div className="section" id="what">
          <Card>
            <p>
              Radical Insight (will be) a service to make mood tracking easy.
              You can keep tabs on your mood in multiple ways including email
              and SMS (text), with the potential for many other integrations.
            </p>
            <p>
              Mood journals are critical for anyone looking to find trends and
              triggers in their moods, but they're only helpful when they're
              consistent.
            </p>
          </Card>
        </div>
        <div className="section" id="why">
          <Card className="landing-content">
            <p>
              By sending reminders and letting you respond wherever you happen
              to be, Radical Insight (will make) mood tracking second nature.
            </p>
          </Card>
        </div>
        <div className="section" id="how">
          <Card>
            <p>
              Radical Insight is still in its infancy and I (Kyle) am the sole
              designer, developer, and tester, so there are many ways you can
              help out.
            </p>
            <ul id="get-involved">
              <li>
                Head over to{" "}
                <a
                  href="https://github.com/kymbert/radical-insight"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>{" "}
                and join the project.
              </li>
              <li>
                <a href="mailto:kymbert@protonmail.com?Subject=Radical%20Insight%20Feedback">
                  Click here
                </a>{" "}
                to send me some direct feedback.
              </li>
              <li>
                Or{" "}
                <a
                  href="https://www.paypal.com/paypalme2/kymbert/5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  buy me a cup of coffee
                </a>{" "}
                to show your support and help me keep the servers on.
              </li>
            </ul>
          </Card>
        </div>
      </div>
    );
  }
}

export default LandingPage;
