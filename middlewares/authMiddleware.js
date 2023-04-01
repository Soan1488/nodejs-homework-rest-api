const jwt = require("jsonwebtoken");
const { User } = require("../servises/schemas");

const authMiddleware = async (req, res, next) => {
  try {
    const [tokenType, token] = req.headers.authorization.split(" ");
    if (tokenType !== "Baryer") {
      throw new Error("Invalid token type");
    }
    const user = jwt.decode(token, process.env.JWT_SECRET);
    if (!user) {
      throw new Error();
    }
    const findedUser = await User.findById({ _id: user._id });

    if (!findedUser.token) {
      throw new Error();
    }
    req.user = findedUser;
    req.token = token;
    next();
  } catch (error) {
    if (error.message === "Invalid token type") {
      return res.status(401).json({ code: 401, message: error.message });
    }
    res.status(401).json({ code: 401, message: "Not authorized" });
  }
};

module.exports = authMiddleware;
