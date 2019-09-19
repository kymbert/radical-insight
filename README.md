# radical-insight

A service to help people track their day-to-day mood or energy levels, allowing for _radical insight_ into their mental well being.

## Getting started

Radical Insight requires NodeJS 11.6 and NPM version 6.5. Once those prerequisites are installed,

1. clone this repo and run `npm install` to install all dependencies and
1. `npm start` to run the service.
1. Navigate to `http://localhost:8080` to view the web portal.

## Project structure

This project is still in its infancy, so there is not much to say in terms of current structure. In the near future, it will be loosely broken into three main components.

1. Database
   - A place to keep track of users and their mood events.
   - MongoDB (using mongoose.js)
1. REST API
   - Simple API for creating and retrieving data points from the DB.
   - Integrate with a web portal, email, and SMS service.
1. Web portal
   - A place for users to view their data and record New mood events.
   - Include a static page for linking to helpful resources for anyone who may be experiencing depression or mania.

## Run the tests

I have mocha integrated with my editor pretty heavily, so I created a `runMocha.sh` script in the `bin` directory to run unit tests. You'll need to create one for yourself. It can be as simple as:

```bash
#!/usr/bin/env bash
npx mocha "./test/unit/**/*.spec.js"
```

Then all you need to do is type `npm test` in your terminal to kick off the unit tests.

To run the end-to-end tests (written with [WebdriverIO](https://webdriver.io)), you'll first need to start the selenium server (via `./etc/startSelenium.sh`) in the background or a separate terminal, then you can run `npm run test:end-to-end` as needed.

## Getting involved

We (I) are (am) currently looking for developers to help get this project ready for alpha. Please see the [contributing](https://github.com/kymbert/radical-insight/blob/master/CONTRIBUTING.md) guide for details. Soon as we have a working app there will definitely be a need for testers and designers and secure hosting.
