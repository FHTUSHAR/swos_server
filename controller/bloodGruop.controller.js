const mongoose = require('mongoose')
const bloodGroupModel = require('../model/bloodgroup.model')
exports.postBloodGroup = async (req, res) => {
    try {
        const data = req.body
        const result = await mongoose.model('BloodDataBase', bloodGroupModel)
        const storedResult = new result(data)
        await storedResult.save();
        res.json({ data });
    } catch (error) {

    }
}
exports.getBloodGroup = async (req, res) => {
    try {

        const result = await mongoose.model('BloodDataBase', bloodGroupModel)
        const storedResult = await result.find()

        res.json({ data: storedResult });
    } catch (error) {

    }
}