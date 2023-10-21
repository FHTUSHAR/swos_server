const mongoose = require("mongoose")
const BannerModel = require('../model/banner.model')

exports.postBanner = async (req, res) => {
    try {
        const imageFile = req.file
        const date = new Date().toISOString().split('T')[0];

        // Perform any additional processing if needed
        // For example, you can access the Cloudinary URL of the uploaded file
        const img = imageFile.path;

        const bannerdata = {
            image: img,
            date
        }
        console.log('banner', bannerdata)

        // Send a response to the client
        const program = mongoose.model('Banner', BannerModel);
        const banner = new program(bannerdata);
        await banner.save();
        res.json({ data });
    } catch (error) {

    }
}
exports.getBanner = async (req, res) => {
    try {

        // Send a response to the client
        const program = mongoose.model('Banner', BannerModel);
        const result = await program.find();
        const banner = result[result.length - 1]

        res.json(banner);
    } catch (error) {

    }
}