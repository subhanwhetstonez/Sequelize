const express = require("express");
const app = express();
const Allauthorroute = require("./routes/author-routes.js");
const Allblogroute = require("./routes/blog-routes.js");

const db = require("./models");
const { author } = require("./models");

app.use(express.json());
app.use("/author", Allauthorroute);
app.use("/blog", Allblogroute);

app.use("/", (req, res) => {
  res.send("Server up");
});

db.sequelize.sync().then((req) => {
  app.listen(3020, () => {
    console.log(" SERVER UP AND RUNNING ON PORT 3020");
  });
});
