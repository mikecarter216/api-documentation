const express = require('express');
const router = express.Router();
const controller = require('../controllers/theme.controller');

router.get('/', controller.getAllThemes);
router.get('/:themeName', controller.getThemeByName);
router.post('/', controller.createTheme);
router.put('/:themeName', controller.updateTheme);
router.delete('/:themeName', controller.deleteTheme);

module.exports = router;
