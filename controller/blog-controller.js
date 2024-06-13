const blogServices = require("../services/blog-service.js");
const db = require("../models");
const blog = db.blog;

class BlogController {
  constructor() {
    this.blog = new blogServices();
    this.blogShow = this.blogShow.bind(this);
    this.blogPutin = this.blogPutin.bind(this);
  }

  // console.log(this.author)
  async blogShow(req, res) {
    console.log("blogShow:", this);
    console.log("blogShow blog:", this.blog);
    const result = await this.blog.blogShow();
    console.log("WWW");
    res.json(result);
  }

  async blogPutin(req, res) {
    console.log("blogPutin:", this);
    console.log("blogPutin blog:", this.blog);
    const { author_id, title, content } = req.body;
    const result = await this.blog.blogPutin(author_id, title, content);
    res.json("Blog HAS BEEN ADDED", result);
  }
}

module.exports = BlogController;
