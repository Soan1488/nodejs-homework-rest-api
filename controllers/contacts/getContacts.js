const { listContacts } = require("../../servises/contacts/contacts");

const get = async (req, res, next) => {
  try {
    const userId = req.user._id;
    res.json({
      status: "success",
      code: 200,
      data: await listContacts(userId),
    });
  } catch (error) {
    next();
  }
};

module.exports = get;
