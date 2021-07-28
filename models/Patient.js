module.exports = (sequelize, Sequelize) => {
  const Patient = sequelize.define(
    "patient",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: {
        type: Sequelize.STRING,
      },
      last_name: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      created_date: {
        type: Sequelize.DATEONLY,
      },
      updated_date: {
        type: Sequelize.DATEONLY,
      },
      age: {
        type: Sequelize.INTEGER,
      },
      weight: {
        type: Sequelize.FLOAT,
      },
    },
    {
      timestamps: false,
    }
  );

  Patient.associate = function (models) {
    Patient.hasMany(models.appointment);
  };

  return Patient;
};
