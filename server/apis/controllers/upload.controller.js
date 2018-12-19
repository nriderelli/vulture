'use strict';

const AccountGroup = require('../models/accountGroup.model');
const Incomes = require('../models/income.model');
const IncomeOutcome = require('../models/incomeOutcome.model');
const IndirectCost = require('../models/indirectCost.model');
const DirectCost = require('../models/directCost.model');
const Metrics = require('../models/metrics.model');
const MainMetrics = require('../models/mainMetrics.model');

// post income
exports.incomeCreate = function (req, res) {
    try {
        console.log(':: req.body ',req.body && req.body.income  ? req.body.income.length : 'no data')
        if(req.body && req.body.income && req.body.income.length !== 0){
            req.body.income.forEach(val => {
                const data = new Incomes(val);
                data.save((error, response) => {
                    if (error) {
                        console.log(error);
                        
                    } else {
                        console.log('response ',response ? 'done': 'not done')
                    }
                });
            })
            
            res.status(200).json({
                status: 'done',
                data: 'done'
            });
            return null;
        }
        res.status(200).json({
            status: 'failed',
            data: 'no data found'
        });
        return null;
    } catch (err) {
        console.log(':: err in get enquiry ',err)
        res.status(422).json({ status: 'failed', data: err });
        return null;
    }
};


// post account group
exports.accountGroupCreate = function (req, res) {
    try {
        if(req.body && req.body.accountGroup && req.body.accountGroup.length !== 0){
            req.body.accountGroup.forEach(val => {
                const data = new AccountGroup(val);
                data.save((error, response) => {
                    if (error) {
                        console.log(error);
                        
                    } else {
                        console.log('response ',response ? 'done': 'not done')
                    }
                });
            });
            res.status(200).json({
                status: 'done',
                data: 'done'
            });
            return null;
        }
        res.status(200).json({
            status: 'failed',
            data: 'no data found'
        });
        return null;
    } catch (err) {
        console.log(':: err in get enquiry ',err)
        res.status(422).json({ status: 'failed', data: err });
        return null;
    }
};


// post income outcome
exports.incomeOutcomeCreate = function (req, res) {
    try {
        console.log(':: req.body ',req.body && req.body.incomeOutcome  ? req.body.incomeOutcome.length : 'no data')
        if(req.body && req.body.incomeOutcome && req.body.incomeOutcome.length !== 0){
            req.body.incomeOutcome.forEach(val => {
                const data = new IncomeOutcome(val);
                data.save((error, response) => {
                    if (error) {
                        console.log(error);
                        
                    } else {
                        console.log('response ',response ? 'done': 'not done')
                    }
                });
            });
            res.status(200).json({
                status: 'done',
                data: 'done'
            });
            return null;
        }
        res.status(200).json({
            status: 'failed',
            data: 'no data found'
        });
        return null; 
    } catch (err) {
        console.log(':: err in get enquiry ',err)
        res.status(422).json({ status: 'failed', data: err });
        return null;
    }
};


// post indirect cost
exports.indirectCostCreate = function (req, res) {
    try {
        if(req.body && req.body.indirectCost && req.body.indirectCost.length !== 0){
            req.body.indirectCost.forEach(val => {
                const data = new IndirectCost(val);
                data.save((error, response) => {
                    if (error) {
                        console.log(error);
                        
                    } else {
                        console.log('response ',response ? 'done': 'not done')
                    }
                });
            });
            res.status(200).json({
                status: 'done',
                data: 'done'
            });
            return null;
        }
        res.status(200).json({
            status: 'failed',
            data: 'no data found'
        });
        return null; 
    } catch (err) {
        console.log(':: err in get enquiry ',err)
        res.status(422).json({ status: 'failed', data: err });
        return null;
    }
};


// post direct cost
exports.directCostCreate = function (req, res) {
    try {
        if(req.body && req.body.directCost && req.body.directCost.length !== 0){
            req.body.directCost.forEach(val => {
                const data = new DirectCost(val);
                data.save((error, response) => {
                    if (error) {
                        console.log(error);
                        
                    } else {
                        console.log('response ',response ? 'done': 'not done')
                    }
                });
            });
            res.status(200).json({
                status: 'done',
                data: 'done'
            });
            return null;
        }
        res.status(200).json({
            status: 'failed',
            data: 'no data found'
        });
        return null;
    } catch (err) {
        console.log(':: err in get enquiry ',err)
        res.status(422).json({ status: 'failed', data: err });
        return null;
    }
};


// post metrics
exports.metricsCreate = function (req, res) {
    try {
        if(req.body && req.body.metrics && req.body.metrics.length !== 0){
            req.body.metrics.forEach(val => {
                const data = new Metrics(val);
                data.save((error, response) => {
                    if (error) {
                        console.log(error);
                        
                    } else {
                        console.log('response ',response ? 'done': 'not done')
                    }
                });
            });
            res.status(200).json({
                status: 'done',
                data: 'done'
            });
            return null;
        }
        res.status(200).json({
            status: 'failed',
            data: 'no data found'
        });
        return null; 
    } catch (err) {
        console.log(':: err in get enquiry ',err)
        res.status(422).json({ status: 'failed', data: err });
        return null;
    }
};


// post main metrics
exports.mainMetricsCreate = function (req, res) {
    try {
        if(req.body && req.body.mainMetrics && req.body.mainMetrics.length !== 0){
            req.body.mainMetrics.forEach(val => {
                const data = new MainMetrics(val);
                data.save((error, response) => {
                    if (error) {
                        console.log(error);
                        
                    } else {
                        console.log('response ',response ? 'done': 'not done')
                    }
                });
            });
            res.status(200).json({
                status: 'done',
                data: 'done'
            });
            return null;
        }
        res.status(200).json({
            status: 'failed',
            data: 'no data found'
        });
        return null; 
    } catch (err) {
        console.log(':: err in get enquiry ',err)
        res.status(422).json({ status: 'failed', data: err });
        return null;
    }
};

