'use strict';

const Income = require('../models/income.model');


// get user list
exports.create = function (req, res) {
    try {
       if(req.body && req.body.income && req.body.income.length !== 0){
            req.body.income.forEach(val=> {
                const data = new Income(val);
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
    } catch (err) {
        console.log(':: err in get enquiry ',err)
        res.status(422).json({ status: 'failed', data: err });
        return null;
    }
};


// get income for dashboard
exports.dashboard = function (req, res) {
    try {
        if(req.params.year && req.params.month) {
            Income.find({}, {'Real / Budget': 1, Month: 1, Year: 1, Value: 1}, function (err, response) {
                if (err) res.status(422).json({ status: 'failed', error: 'Requirement fetching failed' });
                else {
                    let real = 0;
                    let budget = 0;
                    let remainingBudget = 0;
                    let wholeBudget = 0;
                    let tempData = {};
                    let temps = [
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December'
                    ];
                    let data = ['', '', '', '', '', ''];
                    let monthlyGraph = [0, 0, 0, 0, 0, 0];
                    let count = 0;
                    let tempYear = []
                    let yearlyGraph = [0,0,0,0,0,0];
                    for(let i=parseInt(req.params.year)-6; i<parseInt(req.params.year); i++) {
                        tempYear.push(i.toString());
                    }
                    response.forEach(val=> {
                        let month = parseInt(val.Month);
                        const index = tempYear.findIndex(y => y === val.Year);
                        if(index !== -1) {
                            if(val['Real / Budget'] === 'Real') {
                                yearlyGraph[index] += parseInt(val.Value);
                            }
                        }
                        if(val.Year === req.params.year) {
                            if(month >= req.params.month-6 && month < req.params.month) {
                                if(tempData[month]) {
                                    if(val['Real / Budget'] === 'Real') 
                                        tempData[month] += parseInt(val.Value);
                                } else {
                                    tempData[month] = parseInt(val.Value);
                                }
                                // data[month-1] = temps[month-1]
                            }
                            if(req.params.month === 1 || month <= req.params.month) {
                                if(val['Real / Budget'] === 'Real') {
                                    real += parseInt(val.Value);
                                } else {
                                    budget += parseInt(val.Value);
                                }
                            }
                            if(req.params.month !==1 && month > req.params.month) {
                                if(val['Real / Budget'] !== 'Real') {
                                    remainingBudget += parseInt(val.Value);
                                }
                            }
                            if(val['Real / Budget'] !== 'Real') {
                                wholeBudget += parseInt(val.Value);
                            }
                        }
                    })
                    const forecast = real+budget+remainingBudget;
                    for(let i = req.params.month-6; i< req.params.month;i++ ) {
                        data[count] = temps[i-1];
                        monthlyGraph[count] = tempData[i] || 0;
                        count ++;
                    }
                    res.status(200).json({
                        status: 'success',
                        data:{
                            ytd: `${real+budget}    ${real && budget ? Number((real/budget)*100).toFixed(2) : 0}%`,
                            forecast: `${forecast}    ${forecast && wholeBudget ? Number((forecast/wholeBudget)*100).toFixed(2) : 0}%`,
                            monthlyGraph:{
                                value: monthlyGraph,
                                data
                            },
                            annualGraph: {
                                value: yearlyGraph,
                                data: tempYear
                            }
                        }
                    });
                }
            });
            return null;
        }
        res.status(422).json({ status: 'failed', error: 'Data fetching failed' });
        return null;
    } catch (err) {
        console.log(':: err in get enquiry ',err)
        res.status(422).json({ status: 'failed', data: err });
        return null;
    }
};