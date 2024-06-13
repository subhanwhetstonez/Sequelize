module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define("blog", {
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      Validate: {
        notEmpty: true,
      },
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      Validate: {
        notEmpty: true,
      },
    },
  });

  return Blog;
};
