const Author = require("../models").default;
const Blog = require("../models").default;
const { all } = require("../routes/author-routes");

class AuthorServices {
  async authorDisplay() {
    return await Author.findAll({
      include: Blog,
    });
  }

  async specificauthor(id) {
    return await Author.findByPk(id, {
      include: Blog,
    });
  }

  async blogByauthor(authorId) {
    return await Blog.findAll({
      where: { author_id: authorId },
    });
  }

  async inputAuthor(full_name) {
    return await Author.create({ full_name });
  }

  async updateAuthor(id, full_name) {
    return await Author.update(
      { full_name },
      {
        where: { id },
      }
    );
  }

  async deleteAuthor(id) {
    return await Author.destroy({
      where: { id },
    });
  }
}

module.exports = AuthorServices;
