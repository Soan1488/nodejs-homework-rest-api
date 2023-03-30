const jwt = require("jsonwebtoken");
const { User } = require("../servises/schemas");

const authMiddleware = async (req, res, next) => {
  try {
    const [, token] = req.headers.authorization.split(" ");

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
    res.status(401).json({ code: 401, message: "Not authorized" });
  }
};

module.exports = authMiddleware;
