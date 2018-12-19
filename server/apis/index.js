'use strict';

var express = require('express');
var controller = require('./controllers/dashboard.controller');
var upload = require('./controllers/upload.controller');

var router = express.Router();

/* get dashboard data*/
router.get('/dashboard/:year/:month', controller.dashboard);

/* post income data */
router.post('/income', upload.incomeCreate);

/* post account group data */
router.post('/accountGroup', upload.accountGroupCreate);

/* post income outcome data */
router.post('/incomeOutcome', upload.incomeOutcomeCreate);

/* post indirect cost data */
router.post('/indirectCost', upload.indirectCostCreate);

/* post direct cost data */
router.post('/directCost', upload.directCostCreate);

/* post metrics data */
router.post('/metrics', upload.metricsCreate);

/* post main metrics data */
router.post('/mainMetrics', upload.mainMetricsCreate);

module.exports = router;