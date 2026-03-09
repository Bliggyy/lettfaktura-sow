const { login, logout } = require("../controller/authController");

const router = require("express").Router();

router.route("/login").post(login);
router.route("/logout").post(logout);

module.exports = router;
