const Joi = require("joi");

const registerValidation = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),
});
module.exports = registerValidation;
