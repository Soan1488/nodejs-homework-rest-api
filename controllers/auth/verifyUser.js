const servise = require("../../servises/auth");

const verifyUser = async (req, res, next) => {
  try {
    const { verificationToken } = req.params;
    const userIsVerify = await servise.verifyUser(verificationToken);
    if (!userIsVerify) {
      throw new Error();
    }
    res.status(200).json({
      status: "success",
      code: 200,
      message: "Verification successful",
    });
  } catch (error) {
    res.status(404).json({ code: 404, message: "User not found" });
  }
};

module.exports = verifyUser;
