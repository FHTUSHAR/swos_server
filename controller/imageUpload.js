const express = require('express')
const router = express.Router()
const upload = require('../middleware/multer')
const mongoose = require('mongoose');



router.post('/upload', upload.single('image'), (req, res) => {
    // Access the uploaded file object
    const file = req.file;

    // Perform any additional processing if needed
    // For example, you can access the Cloudinary URL of the uploaded file
    const imageUrl = file.path;
    // Send a response to the client
    const kittySchema = new mongoose.Schema({
        image_url: String
    });
    const Kitten = mongoose.model('User_info_image', kittySchema);
    const silence = new Kitten({ image_url: imageUrl });
    silence.save();
    res.json({ imageUrl: imageUrl });
});


module.exports = router;