const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    id: Number,
    eventId: { type: Number, ref: 'Event', unique: true },
    createdAt: Date,
    updatedAt: Date
});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;