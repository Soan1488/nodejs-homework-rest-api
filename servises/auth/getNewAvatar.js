const path = require("path");
const { User } = require("../schemas");
const fs = require("fs").promises;
const jimp = require("jimp");

const AVATAR_PATH = path.resolve("public/avatars");

const getNewAvatar = async (userId, file) => {
  jimp.read(file.path, (err, avatar) => {
    if (err) {
      throw new Error(err.message);
    }
    avatar.resize(250, 250).write(`${AVATAR_PATH}/${userId}.png`);
  });
  const avatarURL = `http://localhost:3000/avatars/${userId}.png`;
  await User.findByIdAndUpdate({ _id: userId }, { avatarURL });
  await fs.unlink(file.path);
  return avatarURL;
};

module.exports = getNewAvatar;
