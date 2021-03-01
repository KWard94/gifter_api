const Suggested = require("../db/models/suggested");
const suggestData = require("./suggested.json");

Suggested.deleteMany({})
  .then(() => {
    return Suggested.insertMany(suggestData);
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });
