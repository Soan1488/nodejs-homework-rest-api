const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
} = require("../../../controllers/auth");
const { authMiddleware } = require("../../../middlewares");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.use(authMiddleware);
router.post("/logout", logoutUser);
router.get("/current", getCurrentUser);

module.exports = router;
