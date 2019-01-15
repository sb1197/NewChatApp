const express = require('express');
const router = express.Router();
const userController = require('../controller/user_controller');
const chatController = require('../controller/chat_controller');

// const chatController = require('../controller/user_controller');
router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.post('/dashboard', chatController.dashboard);

module.exports = router;