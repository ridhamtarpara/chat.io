const express = require('express');
const chatController = require('./chat.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
    .get(chatController.GetConversations)
    .post(chatController.CreateNewConversation);

router.route('/:userId')
    .get(chatController.GetConversation)
    .put(chatController.UpdateConversation);


module.exports = router;
