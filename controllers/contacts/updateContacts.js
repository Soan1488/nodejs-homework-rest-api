const createError = require("http-errors");
const { updateContact } = require("../../servises/contacts/contacts");
const {
  validationPut,
} = require("../../servises/validation/contactValidation");
const update = async (req, res, next) => {
  try {
    await validationPut.validateAsync(req.body);
    const { contactId } = req.params;
    const { _id } = req.user;
    const updatedContact = await updateContact(contactId, req.body, _id);
    res.json({ status: "success", code: 200, data: updatedContact });
  } catch (error) {
    if (error.isJoi) {
      res.status(400).json({ message: "missing fields" });
    } else if (error.kind === "ObjectId") {
      createError(404);
      next();
    } else {
      next(error);
    }
  }
};

module.exports = update;
