const mongoose = require("../connection");

const AttributeSchema = new mongoose.Schema({
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
});

const Attribute = mongoose.model("Attribute", AttributeSchema);

module.exports = Attribute;
