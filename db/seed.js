const mongoose = require("./connection");
const Gift = require("../db/models/gift");
const data = require("./seed.json");

Gift.deleteMany({})
  .then(() => {
    return Gift.insertMany(data);
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });
