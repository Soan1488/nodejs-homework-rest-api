const servise = require("../../servises/auth");

const logout = async (req, res, next) => {
  try {
    const userId = req.user._id;
    await servise.logout(userId);
    res.status(204).json({ code: 204, message: "No content" });
  } catch (error) {
    next(error);
  }
};

module.exports = logout;
