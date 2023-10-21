const express = require("express")
const router = express.Router()
const upload = require('../middleware/multer')
const recentProgram = require('../controller/recentProgram.controller')

router.get('/', recentProgram.getRecentProgram)
router.post('/postRecentProgram', upload.single('image'), recentProgram.postRecentProgram)
module.exports = router