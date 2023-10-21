const mongoose = require('mongoose');

const bannerSchema = mongoose.Schema({
    image: String,
    date: String
})
module.exports = bannerSchema