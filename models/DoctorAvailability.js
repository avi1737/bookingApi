module.exports = (sequelize, Sequelize) => {
  const DoctorAvailability = sequelize.define("doctorAvailability", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    day_of_week: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    start_time: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    end_time: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    open_for_day: {
      type: Sequelize.BOOLEAN,
    },
    minutes_per_patient: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
    },
    updated_at: {
      type: Sequelize.DATE,
    },
  });

  return DoctorAvailability;
};
