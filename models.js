const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: Number,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  createdAt: Date,
  updatedAt: Date
});

const eventSchema = new mongoose.Schema({
  id: Number,
  hostId: { type: Number, ref: 'User' },
  name: String,
  description: String,
  date: Date,
  location: String,
  createdAt: Date,
  updatedAt: Date
});

const guestlistSchema = new mongoose.Schema({
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

const tagSchema = new mongoose.Schema({
    id: Number,
    eventId: { type: Number, ref: 'Event', unique: true },
    createdAt: Date,
    updatedAt: Date
});

const notificationSchema = new mongoose.Schema({
    id: Number,
    hostId: { type: Number, ref: 'User' },
    guestId: { type: Number, ref: 'User' },
    message: String,
    createdAt: Date,
    updatedAt: Date
});

const messageboardSchema = new mongoose.Schema({
    id: Number,
    eventId: { type: Number, ref: 'Event', unique: true },
    authorId: { type: Number, ref: 'User' },
    message: String,
    createdAt: Date,
    updatedAt: Date
});

const photoAlbumSchema = new mongoose.Schema({
    id: Number,
    eventId: { type: Number, ref: 'Event', unique: true },
    title: String,
    description: String,
    createdAt: Date,
    updatedAt: Date
  });
  
const photoUploadSchema = new mongoose.Schema({
    id: Number,
    photoalbumId: { type: Number, ref: 'Photoalbum' },
    authorId: { type: Number, ref: 'User' },
    image: Buffer,
    caption: String,
    createdAt: Date,
    updatedAt: Date
});
  

const Photoalbum = mongoose.model('PhotoAlbum', photoAlbumSchema);
const Photoupload = mongoose.model('PhotoUpload', photoUploadSchema);
const Tag = mongoose.model('Tag', tagSchema);
const Notification = mongoose.model('Notification', notificationSchema);
const Messageboard = mongoose.model('Messageboard', messageboardSchema);
const User = mongoose.model('User', userSchema);
const Event = mongoose.model('Event', eventSchema);
const Guestlist = mongoose.model('Guestlist', guestlistSchema);
