const express = require('express')

//controller functions
const {signupUser,loginUser} = require('../controllers/userController')

const router = express.Router()

router.use(express.json())

//user login
router.post('/login',loginUser)

//user signup
router.post('/signup',signupUser)

module.exports = router