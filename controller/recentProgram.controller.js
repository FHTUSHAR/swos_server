const mongoose = require("mongoose")
const recentProgramModel = require('../model/recentProgram.model')

exports.postRecentProgram = async (req, res) => {
    try {
        const { name, description } = req.body
        const imageFile = req.file
        const date = new Date().toISOString().split('T')[0];

        // Perform any additional processing if needed
        // For example, you can access the Cloudinary URL of the uploaded file
        const img = imageFile.path;

        const updata = {
            title: name,
            description,
            image: img,
            date
        }


        // Send a response to the client
        const program = mongoose.model('UpComingProgram', recentProgramModel);
        const upcoming = new program(updata);
        await upcoming.save();
        res.json({ data });
    } catch (error) {

    }
}
exports.getRecentProgram = async (req, res) => {
    try {

        // Send a response to the client
        const program = mongoose.model('RecentProgram', recentProgramModel);
        const result = await program.find();

        res.json(result);
    } catch (error) {

    }
}