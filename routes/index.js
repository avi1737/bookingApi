const express = require("express");
const router = express.Router();
const user = require("../controllers/user");
const verify = require("../middlewares/vetify");

// user authentication goes here
router.post("/login", user.login);
router.post("/register", user.register);
router.get("auth", verify.verifyToken);

router.get("/auth/users", user.getUsers);

module.exports = router;
