# radical-insight
A service for people to track their day-to-day mood or energy levels, allowing
for _radical insight_ into their mental well being.

## Prerequisites
Radical Insight is or will be built with the following frameworks.
* Spring (Java) for backend service.
* React.js for frontend web portal.
* Twilio integration for SMS messaging (very open to suggestions).
* Gradle for build and dependency management.

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
