const { Author, Blog } = require("../models");
const db = require("../models");

class AuthorServices {
  async authorDisplay() {
    return await Author.findAll({
      include: Blog,
    });
  }

  async authorInput(full_name) {
    return await Author.create({ full_name });
  }
}

module.exports = AuthorServices;
