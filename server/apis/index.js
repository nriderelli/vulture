'use strict';

var express = require('express');
var controller = require('./controllers/income.controller');

var router = express.Router();

/* ==> INCOME */
router.get('/income/dashboard/:year/:month', controller.dashboard);

router.post('/income', controller.create);

module.exports = router;