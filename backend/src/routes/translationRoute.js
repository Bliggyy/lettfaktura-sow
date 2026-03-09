const { getTranslations } = require("../controller/translationController");

const router = require("express").Router();

router.route("/:lang").get(getTranslations);

module.exports = router;
