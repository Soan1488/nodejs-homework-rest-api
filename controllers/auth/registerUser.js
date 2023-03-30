const { servise } = require("../../servises/auth");
const { registerValidation } = require("../../servises/validation");

const register = async (req, res, next) => {
  try {
    await registerValidation.validateAsync(req.body);
    const userData = await servise.register(req.body);
    res.status(201).json({ status: "success", code: 201, userData });
  } catch (error) {
    if (error.isJoi) {
      res.status(400).json({ message: error.message });
    } else if (error.code === 11000) {
      res.status(409).json({ message: "Email in use" });
    } else {
      next(error);
    }
  }
};

module.exports = register;
