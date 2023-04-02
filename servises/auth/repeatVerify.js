const { User } = require("../schemas");
const { sendVerifyEmail } = require("../helpers");

const repeatVerify = async (email) => {
  const user = await User.findOne({ email });
  if (user.verify) {
    return false;
  }
  await sendVerifyEmail(user);
  return Boolean(user);
};

module.exports = repeatVerify;
