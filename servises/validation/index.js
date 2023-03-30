const {
  validationPatch,
  validationPost,
  validationPut,
} = require("./contactValidation");
const registerValidation = require("./registerValidation");

module.exports = {
  validationPatch,
  validationPost,
  validationPut,
  registerValidation,
};
