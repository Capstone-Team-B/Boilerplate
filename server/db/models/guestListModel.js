const mongoose = require('mongoose');

const guestListSchema = new mongoose.Schema({
    id: Number,
    eventId: { type: Number, ref: 'Event' },
    guestId: { type: Number, ref: 'User' },
    tagId: { type: Number, ref: 'Tag' },
    role: String,
    flightNumber: String,
    arrivalTime: Date,
    departureTime: Date,
    createdAt: Date,
    updatedAt: Date
});

const GuestList = mongoose.model('GuestList', guestListSchema);

module.exports = GuestList;

