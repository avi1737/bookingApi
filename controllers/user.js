const jwt = require("jsonwebtoken");
const sequelize = require("../models");
const bycrypt = require("../middlewares/passwordHash");

class User {
  async login(req, res) {
    console.log("login function start");

    try {
      let email = req.body.email;
      let password = req.body.password;

      if (!email || !password) {
        res.json({ meassage: "Please Provide Required Data!" });
      }

      const User = await sequelize.user.findOne({ where: { email: email } });

      let passwordCheck = await bycrypt.checkPassword(password, User.password);

      if (!passwordCheck) {
        res.json({ message: "Password is wrong , Please try one more time !" });
      }
      if (!User) {
        res.json({ message: "Invalid Credentials !" });
      }

      let authToken = jwt.sign({ email: email }, process.env.TOKEN_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });

      res.json({
        authToken: authToken,
        user: User,
      });
    } catch (err) {
      res.json({
        error: err.message,
      });
    }
  }

  async register(req, res) {
    console.log("register function start");

    try {
      let email = req.body.email;
      let password = req.body.password;
      let role = req.body.user_role;

      if (!email || !password || !role) {
        res.json({ meassage: "Please Provide Required Data!" });
      }

      const User = await sequelize.user.findOne({ where: { email: email } });

      if (User) {
        res.json({
          message: "User is already exit with this email !",
        });
      }

      //hash password using bycrpt
      password = await bycrypt.hashPassword(password);
      const newUser = await sequelize.user.create({
        email: email,
        password: password,
        created_date: new Date(),
      });

      if (!newUser) {
        res.json({
          message: "A Problem occured while creating user!",
        });
      }

      if (role === "doctor") {
        let user_doctor = await sequelize.doctor.create({
          userId: newUser.id,
        });

        res.json({
          message: "User Created Successfully!",
          user: newUser,
          role: "doctor",
        });
      }

      if (role === "patient") {
        let user_patient = await sequelize.patient.create({
          userId: newUser.id,
        });

        res.json({
          message: "User Created Successfully!",
          user: newUser,
          role: "patient",
        });
      }
    } catch (err) {
      res.json({
        error: err.meassage,
      });
    }
  }

  async getUsers(req, res) {
    let users = await sequelize.user.findAll();
    res.json({
      data: users,
    });
  }
}

module.exports = new User();
