const authenticate = require("../middleware/authenticate");
const { login, logout } = require("../controller/authController");

const router = require("express").Router();

router.route("/login").post(login);
router.route("/logout").post(authenticate, logout);

module.exports = router;
