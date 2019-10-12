import React from 'react';

class LandingPage extends React.Component {
    render() {
        return (
            <div className="landing-page">
                <div className="section" id="hero">
                    <div className="heading">
                        <h1>Radical Insight</h1>
                        <h2>track your mood & energy<br />
                        gain <span className="em">radical insight</span></h2>
                    </div>
                    <p className="small-text">photo by <a href="https://www.pexels.com/@abhiram2244" target="_blank" rel="noopener noreferrer">Abhiram Prakash</a> from Pexels</p>
                </div>
                <div className="section" id="what" style={{
                    height: "auto",
                    paddingBottom: "3em"
                 }}>
                    <p>Radical Insight (will be) a service to make mood tracking easy. You can keep tabs on your mood in multiple ways including email and SMS (text), with the potential for many other integrations.</p>
                    <p>Mood journals are critical for anyone looking to find trends and triggers in their moods, but they're only helpful when they're consistent.</p>
                </div>
                <div className="section" id="why">
                    <p style={{color: "white" }}>By sending reminders and letting you respond wherever you happen to be, Radical Insight (will make) mood tracking second nature.</p>
                </div>
                <div className="section" id="how">
                    <p>Radical Insight is still in its infancy and I (Kyle) am the sole designer, developer, and tester, so there are many ways you can help out.</p>
                    <ul id="get-involved">
                        <li>Technical folks can head over to <a href="https://github.com/kymbert/radical-insight" target="_blank" rel="noopener noreferrer">GitHub</a> and join the project.</li>
                        <li><a href="mailto:kymbert@protonmail.com?Subject=Radical%20Insight%20Feedback">Click here</a> to send me some direct feedback.</li>
                        <li>You can also <a href="https://www.paypal.com/paypalme2/kymbert/5" target="_blank" rel="noopener noreferrer" style={{color: "indianred"}}>buy me a cup of coffee</a> to show your support and help me keep the server on.</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default LandingPage;
