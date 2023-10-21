const express = require('express')
const cors = require('cors')
const app = require("./app");


require('dotenv').config()
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000



app.use(express.json())
app.use(cors())
console.log()





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})