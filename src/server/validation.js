const Joi = require("joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    first: Joi.string().min(2).required(),
    last: Joi.string().min(2).required(),
    username: Joi.string().min(4).required(),
    email: Joi.string().required().email(),
    password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{4,30}$')),
    // repeat_password: Joi.ref('password)
  });

  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(4).required(),
    password: Joi.string().required(),
  });

  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
