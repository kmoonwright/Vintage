const Validator = require('validator');
const validText = require('./valid-text');

function validateLoginInput(data) {
  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    return { message: "Email is invalid", isValid: false };
  }
  if (Validator.isEmpty(data.email)) {
    return { message: "Email cannot be empty", isValid: false };
  }
  if (Validator.isEmpty(data.password)) {
    return { message: "Password field cannot be empty", isValid: false }
  }

  return {
    message: "",
    isValid: true
  }
};

module.exports = validateLoginInput;