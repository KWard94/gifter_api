const mongoose = require("./connection");
const Gift = require("../db/models/gift");
const data = require("./seed.json");

const Attribute = require("../db/models/attribute");
const attData = require("./attribute.json");

const runSeeds = () => {
  Gift.deleteMany({})
    .then(() => {
      return Gift.insertMany(data);
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
      process.exit();
    });

  Attribute.deleteMany({})
    .then(() => {
      return Attribute.insertMany(attData);
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
      process.exit();
    });
};

runSeeds();
