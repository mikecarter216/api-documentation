const mongoose = require('mongoose');

const themeSchema = new mongoose.Schema({
  themeName: { type: String, required: true, unique: true },
  color: String,
  layout: String
});

module.exports = mongoose.model('Theme', themeSchema);
