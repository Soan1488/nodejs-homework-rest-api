const { servise } = require("../../servises/auth");
const { registerValidation } = require("../../servises/validation");

const login = async (req, res, next) => {
  try {
    await registerValidation.validateAsync(req.body);
    const data = await servise.login(req.body);

    res.status(200).json({ status: "success", code: 200, data });
  } catch (error) {
    if (error.isJoi) {
      res.status(400).json({ message: error.message });
    } else if (error.message === "Email or password is wrong") {
      res.status(401).json({ message: error.message });
    } else {
      next(error);
    }
  }
};

module.exports = login;
