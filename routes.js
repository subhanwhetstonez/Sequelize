const express = require("express");
const authorController = require("./controller/author-controller.js");

const router = express.Router();

router.route("/").get(authorController.authorShow);

module.exports = router;
