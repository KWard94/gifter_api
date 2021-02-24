const express = require("express");

const app = express();

const cors = require("cors");

const giftRouter = require("./db/models/gift");

//*------= Middleware =------*\\

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//*------= Start Routes =------*\\
app.get("/", (req, res) => {
  //   res.render("index.html");
  res.send("testing");
});
app.use("/gifts", giftRouter);

//*------= End Routes =------*\\

//*------= Start App =------*\\
app.set("port", process.env.PORT || 4500);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
