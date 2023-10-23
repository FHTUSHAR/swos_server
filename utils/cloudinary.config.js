const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config()

// cloudinary.config({
//     cloud_name: 'dundurjhp',
//     api_key: '344878823715527',
//     api_secret: 'x6f97pxAqthURvC_IdLE8IOneUQ',
// });
// module.exports = cloudinary



cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});
module.exports = cloudinary
//
// const express = require('express');
// const multer = require('multer');
// const cloudinary = require('cloudinary').v2;
// const { CloudinaryStorage } = require('multer-storage-cloudinary');



