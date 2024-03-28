const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.post("/", UserController.createUser);
router.patch("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUsers);

module.exports = router;
