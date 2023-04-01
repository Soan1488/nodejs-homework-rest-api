const { validationPost } = require("../../servises/validation/");
const { addContact } = require("../../servises/contacts/");
const { checkContact } = require("../../servises/helpers");

const create = async (req, res, next) => {
  try {
    await validationPost.validateAsync(req.body);
    const userId = req.user._id;
    const isExist = await checkContact(req.body, userId);
    if (isExist) {
      throw new Error(`you already have contact with ${isExist} field`);
    }
    const data = await addContact(req.body, userId);
    res.status(201).json({ status: "success", code: 201, data });
  } catch (error) {
    if (error.isJoi) {
      return res
        .status(400)
        .json({ message: "One or more required fields are missing" });
    }
    return res.status(400).json({ code: 400, message: error.message });
  }
};

module.exports = create;
