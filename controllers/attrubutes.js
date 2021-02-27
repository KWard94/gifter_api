const express = require("express");
const router = express.Router();

const Attribute = require("../db/models/attribute");

router.get("/", (req, res, next) => {
  Attribute.find({})
    .then((gifts) => res.json(gifts))
    .catch((err) => {
      console.error(err);
      next();
    });
});

module.exports = router;
