const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const auth = require("../middlewares/auth");
const validate = require("../middlewares/validateInputs");
const schemas = require("../rules/schemas");

const controller = new UserController();

router.post("/register", validate(schemas.registerSchema), controller.register);
router.post("/login", validate(schemas.loginSchema), controller.login);
router.get("/user", auth, controller.user);

module.exports = router;
