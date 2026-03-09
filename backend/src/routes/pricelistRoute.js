const authenticate = require("../middleware/authenticate");
const { getAll, create, remove } = require("../controller/pricelistController");

const router = require("express").Router();

router.route("/").get(authenticate, getAll).post(authenticate, create);
router.route("/:id").delete(authenticate, remove);

module.exports = router;
