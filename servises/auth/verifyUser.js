const { User } = require("../schemas");

const verifyUser = async (verificationToken) => {
  const isExist = await User.findOneAndUpdate(
    { verificationToken },
    {
      verify: true,
      verificationToken: null,
    }
  );
  if (!isExist) {
    return false;
  }
  return Boolean(isExist);
};

module.exports = verifyUser;
