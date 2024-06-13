module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define("author", {
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
      Validate: {
        notEmpty: true,
      },
    },
  });

  return Author;
};
