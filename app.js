const express = require("express");
const app = express();
const { sequelize } = require("./models");

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Content-Type", "application/json");
  next();
});

app.use("/api/v1/", require("./routes"));

sequelize.sync().then(() => console.log("created!"));

app.listen(8080, () => console.log(`App is listening at Port : 8080`));
