module.exports = (sequelize, Sequelize) => {
  const Appointment = sequelize.define(
    "appointment",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      comment_by_doctor: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      comment_by_patient: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      start_time: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      end_time: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  Appointment.associate = function (models) {
    Appointment.belongsTo(models.doctor);

    Appointment.belongsTo(models.patient);
  };

  return Appointment;
};
