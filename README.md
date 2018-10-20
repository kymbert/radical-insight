# radical-insight
A service for people to track their day-to-day mood or energy levels, allowing
for _radical insight_ into their mental well being.

## Background
Many therapists and psychiatrists recommend a daily mood log or journal for their
patients with bipolar disorder or other mental illnesses. These logs can be
greatly beneficial for recognizing triggers and patterns and predicting episodes
of mania or depression. However, for these logs to work, the patient must be
proactive in keeping the logs up to date indefinitely - a task much easier said
than done. Reasons someone may fall behind or become "non-compliant" are as
varied as the people themselves. Personally, I have had a difficult time keeping
the same log in the same place for more than a week or two, resulting in many
scraps of crumpled paper with dates and numbers scribbled on them throughout my
house and in the recycling bin.

Enter modern technology. There are a wealth of mood tracker apps available on
the Apple App Store and Google Play Store, and some of them are quite well
designed. Others make users complete a five minute survey turning a simple task
into a dreaded chore. While others still are too simplistic and even a bit silly
(choosing an emoji to represent ones day doesn't provide meaningful data in the
end). All of these apps require a user to actively log in or open the app once
per day in order to track the data. While it sounds simple, it is again easier
said than done. Minds can wander away and push notifications can be ignored.

In my personal quest to find a mood tracker that works for me I have found one
service that works and I like. It is a simple web app that sends you an SMS each
day at whatever time you specifiy. You reply to that message with a number
between one and ten and the service will take care of the rest. There is a portal
where users can log in and view their data points and a simple line graph. In
short, I love this particular service.

What is the need for Radical Insight? As much as I love the service I am using
now, I want more from it. While it's free to use, the code is proprietary and
to my knowledge is not being actively updated. I am creating Radical Insight to
satisfy my own desires for such a service and am open sourcing the code so that
others may contribute their ideas and build something great.

## Goals
There are a number of immediate, near term, and long term goals for the project.
The long term goals are especially lofty and I don't actually expect to ever have
them implemented.

### Immediate goals
* Service
  - Send one message per day to each user at a time preference indicated by the user.
  - Recieve one message per day from each user, parse the number 1 through 10 and store in database with timestamp.
* Web portal
  - Authentication.
  - Add and edit data entries.
  - View data log with pagination.
  - View line graph with date range selection.

### Near term goals
* Service
  - Receive int and text: parse int to data point, text into a note (e.g. `10 my son was born!!1! :-)`).
* Web portal
  - Display running three or five day average on line graph.
  - Export data as csv and Excel files.
  - Links to resources for those who may be manic or depressed.

### Lofty, long term goals
* Service
  - Allow users to submit data multiple times per day. This could benefit those with rapid cycling bipolar or identify "morning dread."
* Web portal
  - Track behaviors (drinking/drug use, excessive spending, self-harm, etc.).
  - Support journal entries.
  - Localization.
