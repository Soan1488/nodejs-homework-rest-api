const { Contacts } = require("../schemas");

const checkContact = async ({ phone, email, name }, owner) => {
  console.log("email", email);
  const isPhone = await Contacts.findOne({ phone, owner });
  const isEmail = await Contacts.findOne({ email, owner });
  const isName = await Contacts.findOne({ name, owner });
  if (isPhone) {
    return phone;
  } else if (isName) {
    return name;
  } else if (isEmail) {
    return email;
  } else {
    return false;
  }
};

module.exports = checkContact;
