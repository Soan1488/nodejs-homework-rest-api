const get = require("./getContacts");
const getById = require("./getContactsById");
const create = require("./createContacts");
const remove = require("./removeContacts");
const update = require("./updateContacts");
const updateFavorite = require("./updateFavoritesContacts");

module.exports = {
  get,
  getById,
  create,
  remove,
  update,
  updateFavorite,
};
