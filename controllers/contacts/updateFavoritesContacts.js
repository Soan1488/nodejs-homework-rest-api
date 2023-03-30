const createError = require("http-errors");

const { updateStatusContact } = require("../../servises/contacts");
const { validationPatch } = require("../../servises/validation");

const updateFavorite = async (req, res, next) => {
  try {
    await validationPatch.validateAsync(req.body);
    const { contactId } = req.params;
    const { _id } = req.user;
    const updatedContact = await updateStatusContact(contactId, req.body, _id);

    res.json({ status: "success", code: 200, data: updatedContact });
  } catch (error) {
    if (error.isJoi) {
      res.status(400).json({ message: "missing field favorite" });
    } else if (error.kind === "ObjectId") {
      createError(404);
      next();
    } else {
      next(error);
    }
  }
};

module.exports = updateFavorite;
