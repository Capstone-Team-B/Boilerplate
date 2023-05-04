const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    id: Number,
    hostId: { type: Number, ref: 'User' },
    guestId: { type: Number, ref: 'User' },
    message: String,
    createdAt: Date,
    updatedAt: Date
});


const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
