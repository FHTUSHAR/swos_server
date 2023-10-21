const mongoose = require('mongoose')

const upcomingProgramSchema = mongoose.Schema({
    title: String,
    description: String,
    image: String,
    date: String
})


module.exports = upcomingProgramSchema