import { messages } from '../models';
const postMessage = async (req, res) => { 
    try {
        const { message, userId } = req.body;
        await messages.create({ message, userId });
        res.status(201).json({
        status: 'success',
        message: 'Message created successfully',
        data:message
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const getMessages = async (req, res) => { 
    try {
        const allMessages = await messages.findAll();
        res.status(200).json({
          status: 'success',
          length: allMessages.length,
          data: allMessages,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const getMessageById = async (req, res) => { 
    const { id } = req.params;
    try {
        const message = await messages.findOne({ where: { id } });
        if (!message) return res.status(404).json({ error: 'Message not found' });
        res.status(200).json({
            status: 'success',
            message: 'Message found',
            data: message
        });
    } catch (error) { 
        res.status(500).json({ error: error.message });
    }
}
const updateMessage = async (req, res) => { 
    const { id } = req.params;
    try {
        const message = await messages.findOne({ where: { id } });
        if (!message) return res.status(404).json({ error: 'Message not found' });
        const aMessage = {
            message: req.body.message
        };
        await Message.update(aMessage, { where: { id } });
        res.status(200).json({
            status: 'success',
            message: 'Message updated successfully',
            data: aMessage
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const deleteMessage = async (req, res) => { 
    const { id } = req.params;
    try {
        const message = await messages.findOne({ where: { id } });
        if (!message) return res.status(404).json({ error: 'Message not found' });
        await messages.destroy({ where: { id } });
        res.status(200).json({
            status: 'success',
            message: 'Message deleted successfully',
            data: message
        });
    } catch (error) { 
        res.status(500).json({ error: error.message });
    }
}
module.exports = { postMessage, getMessages, getMessageById, updateMessage, deleteMessage };