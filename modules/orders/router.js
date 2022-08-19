'use strict'

const ordersController = require('./orders.controller')
const express = require('express')
const router = express.Router()

router.get('', (req, res) => {
  ordersController.findAll(req, res)
})

module.exports = router
