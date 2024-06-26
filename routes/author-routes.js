const express = require("express");
const AuthorController = require("../controller/author-controller.js");

const router = express.Router();
const authorController = new AuthorController();

router
  .route("/")
  .get(authorController.authorShow)
  .post(authorController.authorPutin);

router.route("/:id").get();

module.exports = router;
