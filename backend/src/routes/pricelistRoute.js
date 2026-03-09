const authenticate = require("../middleware/authenticate");
const { getAll, create } = require("../controller/pricelistController");

const router = require("express").Router();

router.route("/").get(authenticate, getAll).post(authenticate, create);

module.exports = router;
