const servise = require("../../servises/auth");

const getCurrentUser = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const currentUser = await servise.getCurrentUser(userId);
    res.status(200).json({
      code: 200,
      current: {
        email: currentUser.email,
        subscription: currentUser.subscription,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getCurrentUser;
