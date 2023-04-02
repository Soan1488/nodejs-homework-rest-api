const servise = require("../../servises/auth");

const repeatVerify = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      throw new Error("missing required field email");
    }
    const userIsVerify = await servise.repeatVerify(email);
    if (!userIsVerify) {
      throw new Error("Verification has already been passed");
    }
    res.status(200).json({
      status: "success",
      code: 200,
      message: "Verification email sent",
    });
  } catch (error) {
    if (
      error.message === "missing required field email" ||
      error.message === "Verification has already been passed"
    ) {
      return res.status(400).json({ code: 400, message: error.message });
    }
    next(error);
  }
};

module.exports = repeatVerify;
