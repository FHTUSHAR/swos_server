const express = require('express')
const router = express.Router();
const upload = require('../middleware/multer')
const Banner = require('../controller/banner.controller')



router.post('/postBanner', upload.single('image'), Banner.postBanner)
router.get('/banner', Banner.getBanner)



module.exports = router