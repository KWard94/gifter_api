const mongoose = require("../connection");

const GiftSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: String,
  description: String,
  attribute: {
    type: String,
    enum: [
      "Creative",
      "Curious",
      "Adventurous",
      "Humorous",
      "Outdoorsy",
      "Social",
      "Solitary",
      "Laid-Back",
      "Crafty",
    ],
  },
  image: String,
  url: String,
});

const Gift = mongoose.model("Gift", GiftSchema);

module.exports = Gift;
