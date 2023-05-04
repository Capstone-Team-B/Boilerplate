const mongoose = require('mongoose');

const photoAlbumSchema = new mongoose.Schema({
    id: Number,
    eventId: { type: Number, ref: 'Event', unique: true },
    title: String,
    description: String,
    createdAt: Date,
    updatedAt: Date
  });

const PhotoAlbum = mongoose.model('PhotoAlbum', photoAlbumSchema);

module.exports = PhotoAlbum;
