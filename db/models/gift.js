const mongoose = require("../connection");

const GiftSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: String,
  description: String,
  attributes: {
    type: String,
    enum: [
      "Creative",
      "Curious",
      "Outgoing",
      "Humorous",
      "Outdoorsy",
      "Social",
      "Solitary",
    ],
  },
  image: String,
  url: String,
});

const Gift = mongoose.model("Gift", GiftSchema);

module.exports = Gift;
