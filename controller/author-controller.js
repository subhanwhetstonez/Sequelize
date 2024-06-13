const authorServices = require("../services/author-service.js");

class AuthorController {
  constructor() {
    this.author = new authorServices();
    this.authorShow = this.authorShow.bind(this);
    this.authorPutin = this.authorPutin.bind(this);
  }

  // console.log(this.author)
  async authorShow(req, res) {
    console.log("authorShow:", this);
    console.log("authorShow author:", this.author);
    const result = await this.author.authorDisplay();
    console.log("WWW");
    res.json(result);
  }

  async authorPutin(req, res) {
    console.log("authorPutin:", this);
    console.log("authorPutin author:", this.author);
    const { full_name } = req.body;
    const result = await this.author.authorInput(full_name);
    res.json("Author HAS BEEN ADDED", result);
  }
}

module.exports = AuthorController;
