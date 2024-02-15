const express = require('express')
const router = new express.Router()
const studentController=require('../Controller/studentController')

//register api
router.post('/register',studentController.register)

//getallstudentdetails api
router.get('/getallstudentdetails',studentController.getAllStudentDetails)

module.exports = router