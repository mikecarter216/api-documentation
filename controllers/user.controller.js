const User = require('../models/user.model');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get users' });
  }
};

exports.getUserByUsername = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get user' });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { username, fullName, email } = req.body;
    const user = new User({ username, fullName, email });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: 'User creation failed' });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updated = await User.findOneAndUpdate(
      { username: req.params.username },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update user' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const result = await User.findOneAndDelete({ username: req.params.username });
    if (!result) return res.status(404).json({ error: 'User not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
};
