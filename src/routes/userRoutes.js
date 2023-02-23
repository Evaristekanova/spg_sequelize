import express from "express";
import {
  postUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userControllers";
const router = express.Router();

router.route("/users").get(getUsers).post(postUser);
router
  .route("/users/:id")
  .get(getUserById)
  .patch(updateUser)
  .delete(deleteUser);
module.exports = router;
