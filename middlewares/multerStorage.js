const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve("./tmp"));
  },
  filename: (req, file, cb) => {
    const [fileName, extension] = file.originalname.split(".");
    cb(null, `${fileName}${extension}`);
  },
});
const avatarMiddleware = multer({ storage });

module.exports = avatarMiddleware;
