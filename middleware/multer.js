const multer = require('multer')
const cloudinary = require('../utils/cloudinary.config');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config()

// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.API_KEY,
//     api_secret: process.env.API_SECRET,
// });


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads', // Optional destination folder in Cloudinary
        allowed_formats: ['jpg', 'png', 'jpeg'],
        resource_type: 'auto' // Assuming the file type is auto-detected
    }
});

// Create multer instance with the configured storage
const upload = multer({ storage: storage });
module.exports = upload