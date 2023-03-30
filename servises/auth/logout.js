const { User } = require("../schemas");

const logout = async (userId) => {
  await User.findByIdAndUpdate({ _id: userId }, { token: null });
};

module.exports = logout;
