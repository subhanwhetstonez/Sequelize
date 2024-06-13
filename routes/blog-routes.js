const express = require("express");
const BlogController = require("../controller/blog-controller.js");

const router = express.Router();
const blogController = new BlogController();

router.route("/").get(blogController.blogShow).post(blogController.blogPutin);

module.exports = router;
