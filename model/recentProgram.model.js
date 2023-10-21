const mongoose = require('mongoose')
const recentProgramSchema = mongoose.Schema({
    title: String,
    description: String,
    image: String,
    date: String
})
module.exports = recentProgramSchema