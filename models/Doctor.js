module.exports = (sequelize, Sequelize) => {
  const Doctor = sequelize.define(
    "doctor",
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
      degree: {
        type: Sequelize.STRING,
      },
      about: {
        type: Sequelize.TEXT,
      },
      fees: {
        type: Sequelize.FLOAT,
        default: 0.0,
      },
    },
    {
      timestamps: false,
    }
  );

  Doctor.associate = function (models) {
    Doctor.hasMany(models.appointment);

    Doctor.hasMany(models.doctorAvailability);
  };

  return Doctor;
};
