const servise = require("./auth");
const logout = require("./logout");
const getCurrentUser = require("./getCurrentUser");
const getNewAvatar = require("./getNewAvatar");
const verifyUser = require("./verifyUser");
const repeatVerify = require("./repeatVerify");

module.exports = {
  servise,
  logout,
  getCurrentUser,
  getNewAvatar,
  verifyUser,
  repeatVerify,
};
