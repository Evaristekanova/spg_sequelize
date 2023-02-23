import { User } from "../models";

const postUser = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    const duplicate = await User.findOne({ where: { email } });
    if (duplicate)
      return res.status(409).json({ error: "Email already exists" });
    const user = await User.create({ firstName, lastName, email });
    res.status(201).json({
      status: "success",
      message: "User created successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({
      status: "success",
      length: users.length,
      users,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json({
      status: "success",
      message: "user found",
      user,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email } = req.body;
    const user = await User.findOne({ where: { id } });
    if (!user) return res.status(404).json({ error: "User not found" });
    if (email || user.email) {
      const duplicate = await User.findOne({ where: { email } });
      if (duplicate)
        return res.status(409).json({ error: "Email already exists" });
      else {
        const aUser = {
          firstName: firstName,
          lastName: lastName,
          email: email,
        };
        await User.update(
          {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
          },
          { where: { id } }
        );
        await user.save();
        res.status(200).json({
          status: "success",
          message: "User updated successfully",
          user: await User.findOne({ where: { id } }),
        });
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });
    if (!user) return res.status(404).json({ error: "User not found" });
    await User.destroy({ where: { id } });
    res.status(200).json({
      status: "success",
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = { postUser, getUsers, getUserById, updateUser, deleteUser };
