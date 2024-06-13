const AuthorServices = require("../services/author-service.js");

class AuthorController {
  constructor() {
    this.author = new AuthorServices();
  }

  async authorShow(req, res) {
    const result = await this.author.authorDisplay();
    res.json(result);
  }

  async authorPutin(req, res) {
    const { full_name } = req.body;
    const result = await this.author.authorInput(full_name);
    res.json("Author HAS BEEN ADDED", result);
  }
}

module.exports = AuthorController;
