const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: 'dundurjhp',
    api_key: '344878823715527',
    api_secret: 'x6f97pxAqthURvC_IdLE8IOneUQ',
});
module.exports = cloudinary



//
// const express = require('express');
// const multer = require('multer');
// const cloudinary = require('cloudinary').v2;
// const { CloudinaryStorage } = require('multer-storage-cloudinary');

// // Configure Cloudinary
// cloudinary.config({
//     cloud_name: 'dundurjhp',
//     api_key: '344878823715527',
//     api_secret: 'x6f97pxAqthURvC_IdLE8IOneUQ',
// });

// // Configure multer storage for Cloudinary
// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//         folder: 'uploads', // Optional destination folder in Cloudinary
//         allowed_formats: ['jpg', 'png'],
//         resource_type: 'auto' // Assuming the file type is auto-detected
//     }
// });

// // Create multer instance with the configured storage
// const upload = multer({ storage: storage });

// const app = express();

// // Handle POST request to /upload using the multer middleware
// app.post('/upload', upload.single('image'), (req, res) => {
//     // Access the uploaded file object
//     const file = req.file;

//     // Perform any additional processing if needed
//     // For example, you can access the Cloudinary URL of the uploaded file
//     const imageUrl = file.path;

//     // Send a response to the client
//     res.json({ imageUrl: imageUrl });
// });

// // Start the server
// app.listen(5000, () => {
//     console.log('Server started on port 5000');
// });
