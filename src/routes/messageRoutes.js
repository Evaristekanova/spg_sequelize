import express from 'express';
import {
    postMessage,
    getMessages,
    getMessageById,
    updateMessage,
    deleteMessage
} from '../controllers/messageControllers'

const router = express.Router();

router.route('/messages').post(postMessage).get(getMessages);
router.route('/messages/:id').get(getMessageById).put(updateMessage).delete(deleteMessage);
export default router;