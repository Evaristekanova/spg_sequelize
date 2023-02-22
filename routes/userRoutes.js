const express = require("express");
const {
  postUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");
const router = express.Router();

router.route("/users").get(getUsers).post(postUser);
router
  .route("/users/:id")
  .get(getUserById)
  .patch(updateUser)
  .delete(deleteUser);
module.exports = router;
