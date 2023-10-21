const express = require('express')
const router = express.Router();
const makeAdmin = require('../controller/admin.controller')


router.get('/allAdmin', makeAdmin.getAdmin)
router.post('/', makeAdmin.postAdmin)


module.exports = router