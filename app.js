const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
const uploadImage = require('./controller/imageUpload.js')
const makeAdminRoute = require("./routes/admin.routes")
const bloodGroupRoute = require("./routes/blood.routes.js")
const recentProgramRoute = require("./routes/recentProgram.routes.js")
const upcomingProgramRoute = require("./routes/upcomingProgram.routes.js")
const bannerRoute = require('./routes/banner.routes.js')
require('dotenv').config()



var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors())


async function run() {
    // await mongoose.connect('mongodb://localhost:27017/swos_info', { useNewUrlParser: true, useUnifiedTopology: true });
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.radyzyk.mongodb.net/`, { useNewUrlParser: true, useUnifiedTopology: true });


}
run().catch(err => console.log(err));

app.use('/api/images', uploadImage)
app.use('/api/admin', makeAdminRoute)
app.use('/api/postBlood', bloodGroupRoute)
app.use('/api/getBlood', bloodGroupRoute)
app.use('/api/recentProgram', recentProgramRoute)
app.use('/api/upcoming', upcomingProgramRoute)
app.use('/api/banner', bannerRoute)

app.get('/', async (req, res) => {

    res.send({ "name": "Swos Bro" })

})

module.exports = app;

//Hfyl1OfaexkG8Kkd
//forhudhossain