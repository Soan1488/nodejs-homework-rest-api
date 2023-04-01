const servise = require("../../servises/auth");

const getNewAvatar = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const avatarPath = await servise.getNewAvatar(userId, req.file);
    res.status(200).json({ status: "success", code: 200, body: avatarPath });
  } catch (error) {
    res
      .status(401)
      .json({ code: 401, message: "Not authorized", new: error.message });
  }
};

module.exports = getNewAvatar;
