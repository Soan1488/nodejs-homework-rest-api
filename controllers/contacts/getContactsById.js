const createError = require("http-errors");
const { getContactById } = require("../../servises/contacts/contacts");

const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const userId = req.user._id;
    const data = await getContactById(contactId, userId);
    if (data) {
      return res.json({ status: "success", code: 200, data });
    }
    createError(404);
    next();
  } catch (error) {
    next();
  }
};

module.exports = getById;
