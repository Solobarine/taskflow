const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/TaskController");
const auth = require("../middlewares/auth");
const validate = require("../middlewares/validateInputs");
const schemas = require("../rules/schemas");

const controller = new TaskController();

router.get("/", auth, controller.index);
router.post("/", [auth, validate(schemas.createTaskSchema)], controller.create);
router.patch(
  "/:id",
  [auth, validate(schemas.createTaskSchema)],
  controller.update
);
router.delete("/:id", auth, controller.delete);

module.exports = router;
