'use strict'

const express = require('express')

const authcontroller = require('./authentication.controller')
const middleware = require('../../utils/middleware')

const router = express.Router()

router.post('/login', middleware.auth, authcontroller.login)

module.exports = router
