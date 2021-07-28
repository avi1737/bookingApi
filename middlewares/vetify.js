const jwt = require("jsonwebtoken");

class Verify {
  verifyToken(req, res, next) {
    const bearerToken = req.headers["authorization"];
    console.log(bearerToken);
    if (!bearerToken) {
      res.json({
        error: "Unauthenticated",
      });
    } else {
      const bearer_token = bearerToken.split(" ");
      const Token = bearer_token[1];

      try {
        let isVerified = jwt.verify(Token, process.env.TOKEN_SECRET_KEY);
        next();
      } catch (e) {
        res.json({
          error: e.message,
        });
      }
    }
  }
}

module.exports = new Verify();
