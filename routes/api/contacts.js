const express = require("express");
const router = express.Router();
const contactsCntrl = require("../../controllers/contacts");
const { authMiddleware } = require("../../middlewares");

router.use(authMiddleware);

router.get("/", contactsCntrl.get);

router.get("/:contactId", contactsCntrl.getById);

router.post("/", contactsCntrl.create);

router.delete("/:contactId", contactsCntrl.remove);

router.put("/:contactId", contactsCntrl.update);

router.patch("/:contactId/favorite", contactsCntrl.updateFavorite);

module.exports = router;
