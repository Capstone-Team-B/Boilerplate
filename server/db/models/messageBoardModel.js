const mongoose = require('mongoose');

const messageBoardSchema = new mongoose.Schema({
    id: Number,
    eventId: { type: Number, ref: 'Event', unique: true },
    authorId: { type: Number, ref: 'User' },
    message: String,
    createdAt: Date,
    updatedAt: Date
});

const MessageBoard = mongoose.model('MessageBoard', messageBoardSchema);

module.exports = MessageBoard;