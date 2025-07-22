const Theme = require('../models/theme.model');

exports.getAllThemes = async (req, res) => {
  try {
    const themes = await Theme.find();
    res.status(200).json(themes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get themes' });
  }
};

exports.getThemeByName = async (req, res) => {
  try {
    const theme = await Theme.findOne({ themeName: req.params.themeName });
    if (!theme) return res.status(404).json({ message: 'Theme not found' });
    res.status(200).json(theme);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get theme' });
  }
};

exports.createTheme = async (req, res) => {
  try {
    const { themeName, color, layout } = req.body;
    const theme = new Theme({ themeName, color, layout });
    await theme.save();
    res.status(201).json(theme);
  } catch (err) {
    res.status(400).json({ error: 'Theme creation failed' });
  }
};

exports.updateTheme = async (req, res) => {
  try {
    const updated = await Theme.findOneAndUpdate(
      { themeName: req.params.themeName },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: 'Theme not found' });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update theme' });
  }
};

exports.deleteTheme = async (req, res) => {
  try {
    const result = await Theme.findOneAndDelete({ themeName: req.params.themeName });
    if (!result) return res.status(404).json({ error: 'Theme not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete theme' });
  }
};
