const Author = require("../models").default;
const BLog = require("../models").default;
const { all } = require("../routes");

class AuthorServices {
  async authorDisplay() {
    return await Author.findAll();
  }

  async authorInput(full_name) {
    return await Author.create({ full_name });
  }
}

module.exports = AuthorServices;
