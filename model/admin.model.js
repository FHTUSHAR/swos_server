const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    name: String,
    role: String,
    password: String,
})
module.exports = adminSchema