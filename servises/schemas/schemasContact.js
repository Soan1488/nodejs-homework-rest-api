const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contact = new Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: Object,
    ref: "user",
    required: true,
  },
});

const Contact = mongoose.model("contact", contact);

module.exports = Contact;
