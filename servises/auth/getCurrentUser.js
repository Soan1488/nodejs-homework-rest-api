const { User } = require("../schemas");

const current = async (userId) => {
  const user = await User.findById({ _id: userId });
  return user;
};

module.exports = current;
