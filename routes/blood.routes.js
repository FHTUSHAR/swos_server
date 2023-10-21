const express = require('express')
const router = express.Router();
const BloodGroup = require('../controller/bloodGruop.controller')



router.post('/', BloodGroup.postBloodGroup)
router.get('/allBlood', BloodGroup.getBloodGroup)



module.exports = router