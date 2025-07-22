const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller');

router.get('/', controller.getAllUsers);
router.get('/:username', controller.getUserByUsername);
router.post('/', controller.createUser);
router.put('/:username', controller.updateUser);
router.delete('/:username', controller.deleteUser);

module.exports = router;
