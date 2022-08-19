
'use strict';
const express = require("express");
const router = express.Router();
const authcontroller = require('./authentication.controller');

router.post('/login', authcontroller.login);

module.exports = router;
