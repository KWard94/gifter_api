const mongoose = require("../connection");

const SuggestedSchema = new mongoose.Schema({
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
    ],
  },
  image: String,
  url: String,
});

const Suggested = mongoose.model("Suggested", SuggestedSchema);

module.exports = Suggested;
