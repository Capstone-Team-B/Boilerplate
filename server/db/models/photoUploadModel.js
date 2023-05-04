const mongoose = require('mongoose');

const photoUploadSchema = new mongoose.Schema({
    id: Number,
    photoalbumId: { type: Number, ref: 'Photoalbum' },
    authorId: { type: Number, ref: 'User' },
    image: Buffer,
    caption: String,
    createdAt: Date,
    updatedAt: Date
});
  
const PhotoUpload = mongoose.model('PhotoUpload', photoUploadSchema);


module.exports = PhotoUpload;
