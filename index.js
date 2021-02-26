const express = require("express");

const app = express();

const cors = require("cors");

//*------= Middleware =------*\\

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static("public"));

//*------= Start Routes =------*\\
app.get("/", (req, res) => {
  // res.render("index.html");
  res.send("index.js get working");
});

const giftRouter = require("./controllers/gifts");
app.use("/gifts", giftRouter);

//*------= End Routes =------*\\

//*------= Start App =------*\\
app.set("port", process.env.PORT || 4500);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
