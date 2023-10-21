const express = require("express")
const router = express.Router()
const upload = require('../middleware/multer')
const upcomingProgram = require('../controller/upcomingProgram.controller')

router.get('/', upcomingProgram.getUpcomingProgram)
router.post('/postUpcomingProgram', upload.single('image'), upcomingProgram.postUpcomingProgram)

module.exports = router