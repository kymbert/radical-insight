const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = {
  validateLoginInput: data => {
    let errors = {};
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    if (!Validator.isEmail(data.email)) {
      errors.email = "Email is invalid";
    }
    if (Validator.isEmpty(data.password)) {
      errors.password = "Password field is required";
    }
    if (Validator.isEmpty(data.email)) {
      errors.email = "Email field is required";
    }
    if (!isEmpty(errors)) {
      errors.message = errors.email + "\n" + errors.password;  
    }

    return {
      errors,
      isValid: isEmpty(errors)
    };
  },

  validateRegisterInput: data => {
    let errors = {};
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    if (Validator.isEmpty(data.name)) {
      errors.name = "Name is required.";
    }
    if (Validator.isEmpty(data.email)) {
      errors.email = "Email is required.";
    }
    if (!Validator.isEmail(data.email)) {
      errors.email = "Email is invalid.";
    }
    if (Validator.isEmpty(data.password)) {
      errors.password = "Password is required.";
    }
    if (Validator.isEmpty(data.password2)) {
      errors.password2 = "Confirm password is required.";
    }
    if (!Validator.equals(data.password, data.password2)) {
      errors.password2 = "Passwords must match";
    }
    return {
      errors,
      isValid: isEmpty(errors)
    };
  }
};
