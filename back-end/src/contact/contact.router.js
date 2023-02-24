const router = require("express").Router();
const controller = require("./contact.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/new").post(controller.create).all(methodNotAllowed);
router
  .route("/:contact_id")
  .get(controller.read)
  .put(controller.update)
  .all(methodNotAllowed);
router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router;
