import "../styles/_about.container.scss";

import React from "react";
import TextCard from "../components/TextCard";

class AboutPage extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="about">
          <h3 style={{ marginBottom: "0" }}>About</h3>
          <TextCard>
            <p>
              A little background provided by Kyle Imbertson, founder of Radical
              Insight, in January 2019:
            </p>
            <div id="kyle-imbertson-pic">
              <img
                src="/images/kyle-imbertson-400.png"
                alt="Kyle sitting on a couch."
              />
              <p className="caption">
                Kyle in his office, sometime in late 2019.
              </p>
            </div>
          </TextCard>
          <TextCard header="Background">
            <div className="body2">
              <p>
                Many therapists and psychiatrists recommend a daily mood log or
                journal for their patients with bipolar disorder or other mental
                illnesses. These logs can be greatly beneficial for recognizing
                triggers and patterns and predicting episodes of mania or
                depression. However, for these logs to work, the patient must be
                proactive in keeping the logs up to date indefinitely - a task
                much easier said than done. Reasons someone may fall behind or
                become "non-compliant" are as varied as the people themselves.
                Personally, I have had a difficult time keeping the same log in
                the same place for more than a week or two, resulting in many
                scraps of crumpled paper with dates and numbers scribbled on
                them throughout my house and eventually in the recycling bin.
              </p>
              <p>
                Enter modern technology. There are a wealth of mood tracker apps
                available on the iOS App Store and Google Play Store, and some
                of them are quite well designed. Others make users complete a
                five minute survey - turning a simple task into a dreaded chore.
                While others still are too simplistic and even a bit silly
                (choosing an emoji to represent ones day doesn't provide
                meaningful data in the end). All of these apps require a user to
                actively log in or open the app once per day in order to track
                the data. While it sounds simple, it is again easier said than
                done. Minds can wander away and push notifications can be
                ignored. p In my personal quest to find a mood tracker that
                works for me I have found one tool that works and I like. It is
                a simple web service that sends you an SMS each day at whatever
                time you specifiy. You reply to that message with a number
                between one and ten and the service will take care of the rest.
                There is a portal where users can log in and view their data
                points and a simple line graph. In short, I love this particular
                tool.
              </p>
              <p>
                What is the need for Radical Insight? As much as I love the
                service I am using now, I want more from it. While it's free to
                use, the code is proprietary and to my knowledge is not being
                actively updated. I am creating Radical Insight to satisfy my
                own desires for such a service and am open sourcing the code so
                that others may contribute their ideas and build something
                great.
              </p>
            </div>
          </TextCard>
        </div>
      </div>
    );
  }
}

export default AboutPage;
