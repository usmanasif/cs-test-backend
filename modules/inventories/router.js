'use strict'

const express = require('express')
const inventoriesController = require('./inventories.controller')

const router = express.Router()

router.get('/', inventoriesController.findAll)

module.exports = router
