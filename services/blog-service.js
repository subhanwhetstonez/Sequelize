const Blog = require("../models").default;

class BlogService {
  async blogShow() {
    console.log("Woo");
    return await Blog.findAll();
  }

  async specificBlog(id) {
    return await Blog.findByPk(id);
  }

  async specificBlogByUser(authorId) {
    return await Blog.findAll({
      where: { author_id: authorId },
    });
  }

  async blogPutin(author_id, title, content) {
    return await Blog.create({ author_id, title, content });
  }

  async updateBlog(id, title, content) {
    return await Blog.update(
      { title, content },
      {
        where: { id },
      }
    );
  }

  async deleteBlog(id) {
    return await Blog.destroy({
      where: { id },
    });
  }
}

module.exports = BlogService;
