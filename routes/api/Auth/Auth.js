const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  getNewAvatar,
  verifyUser,
  repeatVerify,
} = require("../../../controllers/auth");
const { authMiddleware, avatarMiddleware } = require("../../../middlewares");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/verify/:verificationToken", verifyUser);
router.post("/verify", repeatVerify);

router.use(authMiddleware);
router.patch("/avatars", avatarMiddleware.single("avatar"), getNewAvatar);
router.post("/logout", logoutUser);
router.get("/current", getCurrentUser);

module.exports = router;
