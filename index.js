const express = require("express");
const app = express();
const Allroute = require("./routes.js");

const db = require("./models");
const { author } = require("./models");

app.use(express.json());
app.use("/author", Allroute);

app.use("/");

db.sequelize.sync().then((req) => {
  app.listen(3020, () => {
    console.log(" SERVER UP AND RUNNING ON PORT 3020");
  });
});
