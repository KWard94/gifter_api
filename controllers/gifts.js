const express = require("express");
const router = express.Router();

const Gift = require("../db/models/gift");

// router.get("/", (req, res, next) => {
//   Gift.find({})
//     .then((gifts) => res.json(gifts))
//     .catch((err) => {
//       console.error(err);
//       next();
//     });
// });

router.get("/:id", (req, res, next) => {
  Gift.findById(req.params.id)
    .then((gift) => res.json(gift))
    .catch((err) => {
      console.error(err);
      next();
    });
});

router.post("/", (req, res, next) => {
  Gift.create(req.body)
    .then((gift) => res.json(gift))
    .catch((err) => {
      console.error(err);
      next();
    });
});

router.put("/:id", (req, res, next) => {
  Gift.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((gift) => res.json(gift))
    .catch((err) => {
      console.error(err);
      next();
    });
});

router.delete("/:id", (req, res, next) => {
  Gift.findByIdAndDelete(req.params.id)
    // .then(() => res.redirect('/gifts'))
    .then(() => res.send("DELETED SUCCESSFULLY!"))
    .catch((err) => {
      console.error(err);
      next();
    });
});

module.exports = router;
