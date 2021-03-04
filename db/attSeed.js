const Attribute = require("../db/models/attribute");
const attData = require("./attribute.json");

Attribute.deleteMany({})
  .then(() => {
    return Attribute.insertMany(attData);
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });
