const mongoose = require('mongoose');

const bloodGroupSchema = mongoose.Schema({
    name: String,
    blood: String,
    phone: String,
    address: String
})
module.exports = bloodGroupSchema