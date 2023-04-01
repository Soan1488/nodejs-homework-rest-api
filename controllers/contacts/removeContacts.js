const createError = require("http-errors");
const { removeContact } = require("../../servises/contacts/contacts");

const remove = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { userId } = req.user._id;
    const isSuccess = await removeContact(contactId, userId);
    if (isSuccess) {
      res.json({ status: "success", code: 200, message: "contact deleted" });
    } else {
      createError(404);
      next();
    }
  } catch (error) {
    next();
  }
};

module.exports = remove;
