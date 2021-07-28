const bycrpt = require("bcryptjs");

class PasswordHandler {
  async hashPassword(password) {
    let securePassword = await bycrpt.hash(password, 10);
    return securePassword;
  }

  async checkPassword(password, databasePassword) {
    let check = await bycrpt.compare(password, databasePassword);
    return check;
  }
}

module.exports = new PasswordHandler();
