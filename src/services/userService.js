const emailValidator = require("email-validator");
const mongoose = require("mongoose");
const User = mongoose.model("users");

class UserService {
  /**
   * findUserIdBy - Find a user's id with an arbitrary query.
   *
   * This method will validate an email address if that parameter is found,
   * but no other validation is provided at this time.
   *
   * @todo    Sanitize and validate the input query.
   * @param   {Object} query  A `Query`-like object to be passed to the
   *          mongoose `find()` method.
   * @returns {String}        The user's id.
   */
  findUserIdBy(query) {
    const response = User.findOne(query)
      .then(user => {
        return {
          status: 200,
          body: user.id
        };
      })
      .catch(err => {
        if (query.hasOwnProperty("email")) {
          let wellFormedEmail = emailValidator.validate(query.email);
          if (!wellFormedEmail) {
            return {
              status: 400,
              body: "That's not a valid email address."
            };
          } else {
            return {
              status: 404,
              body: { name: err.name, body: err.message }
            };
          }
        }
      });
    return response;
  }

  saveUser(user) {
    return new User(user)
      .save({ validateBeforeSave: true })
      .then(user => {
        return {
          status: 200,
          body: user
        };
      })
      .catch(err => {
        return {
          status: 500,
          body: {
            name: err.name,
            message: err.message
          }
        };
      });
  }
}

module.exports = new UserService();
