const express = require('express')
const { userSignup, userLogin } = require('../controllers/auth.controllers')

const router = express.Router()

router.route('/signup').post(userSignup)
router.route('/login').post(userLogin)

module.exports = router
