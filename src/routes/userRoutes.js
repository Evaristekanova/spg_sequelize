import express from "express";
import {
  postUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  allAboutUser
} from "../controllers/userControllers";
const router = express.Router();

router.route("/users").get(getUsers).post(postUser);
router
  .route("/users/:id")
  .get(getUserById)
  .patch(updateUser)
  .delete(deleteUser);

router.route('/users/:id/message').get(allAboutUser);
module.exports = router;
