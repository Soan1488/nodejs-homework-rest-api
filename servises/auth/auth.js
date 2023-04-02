const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const { User } = require("../schemas/");
const { sendVerifyEmail } = require("../helpers");

const register = async ({ email, password }) => {
  const user = new User({ email, password, verificationToken: uuidv4() });
  await user.save();
  sendVerifyEmail(user);
  return { user: { email: user.email, subscription: user.subscription } };
};

const login = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Email or password is wrong");
  }

  if (!user.verify) {
    throw new Error("Please verify your account");
  }
  console.log(await bcrypt.compare(password, user.password));
  if (!(await bcrypt.compare(password, user.password))) {
    throw new Error("Email or password is wrong");
  }

  const token = jwt.sign(
    {
      _id: user.id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
  );
  await User.findByIdAndUpdate({ _id: user.id }, { token });
  return {
    user: { subscription: user.subscription, email: user.email },
    token,
  };
};

module.exports = {
  register,
  login,
};
