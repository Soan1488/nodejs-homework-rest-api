const { Contacts } = require("../schemas/");

const listContacts = async (owner) => {
  return Contacts.find({ owner });
};

const getContactById = async (contactId, owner) => {
  return Contacts.findOne({ _id: contactId, owner });
};

const removeContact = async (contactId, owner) => {
  return Contacts.findByIdAndRemove({ _id: contactId, owner });
};

const addContact = async ({ name, email, phone }, owner) => {
  return Contacts.create({ name, email, phone, owner });
};

const updateContact = async (contactId, body, owner) => {
  return Contacts.findByIdAndUpdate({ _id: contactId, owner }, body, {
    new: true,
  });
};

const updateStatusContact = async (contactId, body, owner) => {
  return Contacts.findByIdAndUpdate({ _id: contactId, owner }, body, {
    new: true,
  });
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
};
