# radical-insight

A service to help people track their day-to-day mood or energy levels, allowing for _radical insight_ into their mental well being.

## Getting started

Radical Insight requires NodeJS 11.6 and NPM version 6.5. Once those prerequisites are installed,

1. clone this repo and run `npm install` to install all dependencies and
1. `npm start` to run the service.
1. Navigate to `http://localhost:3000` to view the web portal.

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

## Getting involved

We (I) are (am) currently looking for developers to help get this project ready for alpha. Please see the [contributing](https://github.com/kymbert/radical-insight/blob/master/CONTRIBUTING.md) guide for details. Soon as we have a working app there will definitely be a need for testers and designers and secure hosting.
