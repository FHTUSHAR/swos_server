const mongoose = require('mongoose')
const adminModel = require('../model/admin.model')

exports.postAdmin = async (req, res) => {
    try {
        const data = {
            name: 'admin',
            role: 'director',
            password: 'admin'
        }
        const admin = await mongoose.model('Admin', adminModel)

        console.log(data)
        const user = new admin(data)
        // const Kitten = mongoose.model('User_info_image', kittySchema);
        // const silence = new Kitten({ image_url: imageUrl });
        await user.save();
        res.json({ data });
    } catch (error) {

    }
}
exports.getAdmin = async (req, res) => {
    try {
        const data = req.query

        const admin = await mongoose.model('Admin', adminModel)

        const user = await admin.findOne({ name: data.name, password: data.pass })

        if (user) {
            res.status(200).send(user)
        }
        else {
            res.status(401).send('Not Admin')
        }
        // res.status(200).json({ data: user });
    } catch (error) {

    }
}