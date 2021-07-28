const Doctor = require("./Doctor");
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  User.associate = function (models) {
    User.hasOne(models.doctor);

    User.hasOne(models.patient);
  };

  return User;
};
