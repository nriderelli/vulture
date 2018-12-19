'use strict';

const AccountGroup = require('../models/accountGroup.model');
const Incomes = require('../models/income.model');
const IncomeOutcome = require('../models/incomeOutcome.model');
const IndirectCost = require('../models/indirectCost.model');
const DirectCost = require('../models/directCost.model');
const Metrics = require('../models/metrics.model');
const MainMetrics = require('../models/mainMetrics.model');

exports.create = function (req, res) {
    try {
       if(req.body && req.body.income && req.body.income.length !== 0){
            // req.body.income.forEach(val=> {
            const data = new Incomes(req.body.income);
            data.save((error, response) => {
                if (error) {
                    console.log(error);
                    
                } else {
                    console.log('response ',response ? 'done': 'not done')
                }
            });
            // })
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

// get data for dashboard
exports.dashboard = function (req, res) {
    try {
        if(req.params.year && req.params.month) {
            let real = 0;
            let budget = 0;
            let remainingBudget = 0;
            let remainingReal = 0;
            let tempYear = []
            let data = ['', '', '', '', '', ''];
            let list = [
                Incomes.find({}, {'Real / Budget': 1, Month: 1, Year: 1, Value: 1}),
                IndirectCost.find({}, {'Account Group': 1, 'Real / Budget': 1, Month: 1, Year: 1, Value: 1}),
                AccountGroup.find({}),
                DirectCost.find({}, {'Real / Budget': 1, Month: 1, Year: 1, Value: 1}),
                MainMetrics.find({}, {'Real / Budget': 1, Month: 1, Year: 1, Value: 1})
            ];
            let contributionMonthlyGraph = [0, 0, 0, 0, 0, 0];
            let contributionYearlyGraph = [0, 0, 0, 0, 0, 0];
            let contributionMonthTemp = {};
            let ebidaMonthlyGraph = [0, 0, 0, 0, 0, 0];
            let ebidaYearlyGraph = [0, 0, 0, 0, 0, 0];
            let ebidaMonthTemp = {};
            let boxesMonthlyGraph = [0, 0, 0, 0, 0, 0];
            let boxesYearlyGraph = [0, 0, 0, 0, 0, 0];
            let boxesMonthTemp = {};
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
            Promise.all(list).then((response) => {
                /* for income data */
                let wholeBudget = 0;
                let tempData = {};
                
                
                let monthlyGraph = [0, 0, 0, 0, 0, 0];
                let count = 0;
                let yearlyGraph = [0,0,0,0,0,0];
                let forecast = 0;
                for(let i=parseFloat(req.params.year)-6; i<parseFloat(req.params.year); i++) {
                    tempYear.push(i.toString());
                }
                response[0].forEach(val=> {
                    let month = parseFloat(val.Month);
                    const index = tempYear.findIndex(y => y === val.Year);
                    if(index !== -1) {
                        if(val['Real / Budget'] === 'Real') {
                            yearlyGraph[index] += parseFloat(val.Value.replace(/\,/g,""));
                        }
                        contributionYearlyGraph[index] += parseFloat(val.Value.replace(/\,/g,""));
                        ebidaYearlyGraph[index] += parseFloat(val.Value.replace(/\,/g,""));
                    }
                    if(val.Year === req.params.year) {
                        if(month >= req.params.month-6 && month < req.params.month) {
                            if(tempData[month]) {
                                if(val['Real / Budget'] === 'Real') 
                                    tempData[month] += parseFloat(val.Value.replace(/\,/g,""));
                            } else {
                                tempData[month] = parseFloat(val.Value.replace(/\,/g,""));
                            }
                            if(contributionMonthTemp[month]) {
                                contributionMonthTemp[month] += parseFloat(val.Value.replace(/\,/g,"")); 
                                ebidaMonthTemp[month] += parseFloat(val.Value.replace(/\,/g,"")); 
                            } else {
                                contributionMonthTemp[month] = parseFloat(val.Value.replace(/\,/g,""));
                                ebidaMonthTemp[month] = parseFloat(val.Value.replace(/\,/g,""));
                            }
                            // data[month-1] = temps[month-1]
                        }
                        if(req.params.month === 1 || month <= req.params.month) {
                            if(val['Real / Budget'] === 'Real') {
                                real += parseFloat(val.Value.replace(/\,/g,""));
                            } else {
                                budget += parseFloat(val.Value.replace(/\,/g,""));
                            }
                        }
                        if(req.params.month !==1 && month > req.params.month) {
                            if(val['Real / Budget'] !== 'Real') {
                                remainingBudget += parseFloat(val.Value.replace(/\,/g,""));
                            } else {
                                remainingReal += parseFloat(val.Value.replace(/\,/g,""));
                            }
                        }
                        if(val['Real / Budget'] !== 'Real') {
                            wholeBudget += parseFloat(val.Value.replace(/\,/g,""));
                        }
                    }
                })
                forecast = real+budget+remainingBudget;
                

                /* for mg. contribution data */
                let totalIndirectCostReal = 0;
                let totalDirectCostReal = 0;
                let totalIndirectCostBudget = 0;
                let totalDirectCostBudget = 0;
                let remainingDirectCostReal = 0;
                let remainingDirectCostBudget = 0;
                
                response[2].forEach(accountGroup => {
                    if(
                        accountGroup['3rd Classification'] === 'Operacional'
                        && accountGroup['4th Classification'] === 'Variable'
                        || accountGroup['4th Classification'] === 'Fijo'
                    ) {
                        const indirectCosts = response[1].filter(
                            val => val['Account Group'] === accountGroup['Account Group']
                        );
                        indirectCosts
                        && indirectCosts.length !== 0
                        && indirectCosts.forEach(indirectCost => {
                            const index = tempYear.findIndex(y =>{
                                if(y < 10)
                                    return `200${y}` === indirectCost.Year;
                                else
                                    return `20${y}` === indirectCost.Year;
                            });
                            if(index !== -1) {
                                contributionYearlyGraph[index] -= parseFloat(indirectCost.Value.replace(/\,/g,""));
                            }
                            if(indirectCost.Year === `20${req.params.year}`) {
                                if(parseFloat(indirectCost.Month) >= req.params.month-6 && parseFloat(indirectCost.Month) < req.params.month) {
                                    if(!contributionMonthTemp[parseFloat(indirectCost.Month)]) {
                                        contributionMonthTemp[parseFloat(indirectCost.Month)] = 0;
                                    }
                                    contributionMonthTemp[parseFloat(indirectCost.Month)] -= parseFloat(indirectCost.Value.replace(/\,/g,""));
                                    // data[month-1] = temps[month-1]
                                }
                                if(req.params.month === 1 || parseFloat(indirectCost.Month) <= req.params.month) {
                                    if(indirectCost['Real / Budget'] === 'Real')
                                        totalIndirectCostReal += parseFloat(indirectCost.Value.replace(/\,/g,""));
                                    else
                                        totalIndirectCostBudget += parseFloat(indirectCost.Value.replace(/\,/g,""));
                                }
                            }
                            
                        })
                    }
                });
                response[3].forEach(directCost => {
                    const index = tempYear.findIndex(y => y === directCost.Year);
                    if(index !== -1) {
                        contributionYearlyGraph[index] -= parseFloat(directCost.Value.replace(/\,/g,""));
                        ebidaYearlyGraph[index] -= parseFloat(directCost.Value.replace(/\,/g,""));
                    }
                    if(directCost.Year === req.params.year){
                        if(parseFloat(directCost.Month) >= req.params.month-6 && parseFloat(directCost.Month) < req.params.month) {
                            if(!contributionMonthTemp[parseFloat(directCost.Month)]) {
                                contributionMonthTemp[parseFloat(directCost.Month)] = 0;
                            }
                            contributionMonthTemp[parseFloat(directCost.Month)] -= parseFloat(directCost.Value.replace(/\,/g,""));
                            ebidaMonthTemp[parseFloat(directCost.Month)] -= parseFloat(directCost.Value.replace(/\,/g,""));
                            // data[month-1] = temps[month-1]
                        }
                        if(req.params.month === 1 || parseFloat(directCost.Month) <= req.params.month) {
                            if(directCost['Real / Budget'] === 'Real')
                                totalDirectCostReal += parseFloat(directCost.Value.replace(/\,/g,""));
                            else
                                totalDirectCostBudget += parseFloat(directCost.Value.replace(/\,/g,""));
                        }
                        if(req.params.month !==1 && parseFloat(directCost.Month) > req.params.month) {
                            if(directCost['Real / Budget'] == 'Real') {
                                remainingDirectCostReal += parseFloat(directCost.Value.replace(/\,/g,""));
                            } else {
                                remainingDirectCostBudget += parseFloat(directCost.Value.replace(/\,/g,""));
                            }
                        }
                    }
                });
                

                /* for ebida data*/
                let totalEbidaIndirectCostReal = 0;
                let totalEbidaIndirectCostBudget = 0;
                let remainingIndirectCostReal = 0;
                let remainingIndirectCostBudget = 0;
                response[2].forEach(accountGroup => {
                    if(
                        accountGroup['3rd Classification'] === 'Operacional'
                    ) {
                        const indirectCosts = response[1].filter(
                            val => val['Account Group'] === accountGroup['Account Group']
                        );
                        indirectCosts
                        && indirectCosts.length !== 0
                        && indirectCosts.forEach(indirectCost => {
                            const index = tempYear.findIndex(y =>{
                                if(y < 10)
                                    return `200${y}` === indirectCost.Year;
                                else
                                    return `20${y}` === indirectCost.Year;
                            });
                            if(index !== -1) {
                                ebidaYearlyGraph[index] -= parseFloat(indirectCost.Value.replace(/\,/g,""));
                            }
                            if(indirectCost.Year === `20${req.params.year}`) {
                                if(parseFloat(indirectCost.Month) >= req.params.month-6 && parseFloat(indirectCost.Month) < req.params.month) {
                                    if(!ebidaMonthTemp[parseFloat(indirectCost.Month)]) {
                                        ebidaMonthTemp[parseFloat(indirectCost.Month)] = 0;
                                    }
                                    ebidaMonthTemp[parseFloat(indirectCost.Month)] -= parseFloat(indirectCost.Value.replace(/\,/g,""));
                                    // data[month-1] = temps[month-1]
                                }
                                if(req.params.month === 1 || parseFloat(indirectCost.Month) <= req.params.month) {
                                    if(indirectCost['Real / Budget'] === 'Real')
                                        totalEbidaIndirectCostReal += parseFloat(indirectCost.Value.replace(/\,/g,""));
                                    else
                                        totalEbidaIndirectCostBudget += parseFloat(indirectCost.Value.replace(/\,/g,""));
                                }
                                if(req.params.month !==1 && parseFloat(indirectCost.Month) > req.params.month) {
                                    if(indirectCost['Real / Budget'] == 'Real') {
                                        remainingIndirectCostReal += parseFloat(indirectCost.Value.replace(/\,/g,""));
                                    } else {
                                        remainingIndirectCostBudget += parseFloat(indirectCost.Value.replace(/\,/g,""));
                                    }
                                }
                            }
                            
                        })
                    }
                });


                /* for boxes data*/
                let boxesReal = 0;
                let boxesBudget = 0;
                let boxesForecast = 0;
                let wholeBoxesBudget = 0;
                let remainingBoxesBudget = 0;
                response[4].forEach(val=> {
                    let month = parseFloat(val.Month);
                    const index = tempYear.findIndex(y => y === val.Year);
                    if(index !== -1) {
                        if(val['Real / Budget'] === 'Real') {
                            boxesYearlyGraph[index] += parseFloat(val.Value.replace(/\,/g,""));
                        }
                    }
                    if(val.Year === req.params.year) {
                        if(month >= req.params.month-6 && month < req.params.month) {
                            if(boxesMonthTemp[month]) {
                                if(val['Real / Budget'] === 'Real') 
                                    boxesMonthTemp[month] += parseFloat(val.Value.replace(/\,/g,""));
                            } else {
                                boxesMonthTemp[month] = parseFloat(val.Value.replace(/\,/g,""));
                            }
                            // data[month-1] = temps[month-1]
                        }
                        if(req.params.month === 1 || month <= req.params.month) {
                            if(val['Real / Budget'] === 'Real') {
                                boxesReal += parseFloat(val.Value.replace(/\,/g,""));
                            } else {
                                boxesBudget += parseFloat(val.Value.replace(/\,/g,""));
                            }
                        }
                        if(req.params.month !==1 && month > req.params.month) {
                            if(val['Real / Budget'] !== 'Real') {
                                remainingBoxesBudget += parseFloat(val.Value.replace(/\,/g,""));
                            } else {
                                remainingBoxesReal += parseFloat(val.Value.replace(/\,/g,""));
                            }
                        }
                        if(val['Real / Budget'] !== 'Real') {
                            wholeBoxesBudget += parseFloat(val.Value.replace(/\,/g,""));
                        }
                    }
                })
                boxesForecast = boxesReal+boxesBudget+remainingBoxesBudget;
                for(let i = req.params.month-6; i< req.params.month;i++ ) {
                    data[count] = temps[i-1];
                    monthlyGraph[count] = tempData[i] || 0;
                    contributionMonthlyGraph[count] = contributionMonthTemp[i] || 0;
                    ebidaMonthlyGraph[count] = ebidaMonthTemp[i] || 0;
                    boxesMonthlyGraph[count] = boxesMonthTemp[i] || 0;
                    count ++;
                }



                res.status(200).json({
                    status: 'success',
                    data:{
                        income: {
                            ytd: {
                                value: real+budget,
                                percentage: `${real && budget ? Number((real/budget)*100).toFixed(2) : 0}%`
                            },
                            forecast: {
                                value: forecast,
                                percentage: `${forecast && wholeBudget ? Number((forecast/wholeBudget)*100).toFixed(2) : 0}%`
                            },
                            monthlyGraph:{
                                value: monthlyGraph,
                                data
                            },
                            annualGraph: {
                                value: yearlyGraph,
                                data: tempYear
                            }
                        },
                        contribution: {
                            ytd: {
                                value: (real+budget)-(totalEbidaIndirectCostReal+totalEbidaIndirectCostBudget)-(totalDirectCostReal+totalDirectCostBudget),
                                percentage: `${Number((real-totalIndirectCostReal-totalDirectCostReal)/(budget-totalIndirectCostBudget-totalDirectCostBudget)*100).toFixed(2)}%`
                            },
                            forecast: {
                                value: ((real+budget)-(totalIndirectCostReal+totalIndirectCostBudget)-(totalDirectCostReal+totalDirectCostBudget)) + (remainingReal+remainingBudget) - (totalIndirectCostReal + totalIndirectCostBudget) - (remainingDirectCostReal + remainingDirectCostBudget),
                                percentage: `${Number((real-totalIndirectCostReal-totalDirectCostReal+remainingReal-totalIndirectCostReal-remainingDirectCostReal)/(budget-totalIndirectCostBudget-totalDirectCostBudget+remainingBudget-totalIndirectCostBudget-remainingDirectCostBudget)*100).toFixed(2)}%`
                            },
                            monthlyGraph:{
                                value: contributionMonthlyGraph,
                                data
                            },
                            annualGraph: {
                                value: contributionYearlyGraph,
                                data: tempYear
                            }
                        },
                        ebida: {
                            ytd: {
                                value: (real+budget)-(totalEbidaIndirectCostReal+totalEbidaIndirectCostBudget)-(totalDirectCostReal+totalDirectCostBudget),
                                percentage: `${Number((real-totalEbidaIndirectCostReal-totalDirectCostReal)/(budget-totalEbidaIndirectCostBudget-totalDirectCostBudget)*100).toFixed(2)}%`
                            },
                            forecast: {
                                value: ((real+budget)-(totalEbidaIndirectCostReal+totalEbidaIndirectCostBudget)-(totalDirectCostReal+totalDirectCostBudget)) + (remainingReal+remainingBudget) - (remainingIndirectCostReal + remainingIndirectCostBudget) - (remainingDirectCostReal + remainingDirectCostBudget),
                                percentage: `${Number((real-totalIndirectCostReal-totalDirectCostReal+remainingReal-remainingIndirectCostReal-remainingDirectCostReal)/(budget-totalIndirectCostBudget-totalDirectCostBudget+remainingBudget-remainingIndirectCostBudget-remainingDirectCostBudget)*100).toFixed(2)}%`
                            },
                            monthlyGraph:{
                                value: ebidaMonthlyGraph,
                                data
                            },
                            annualGraph: {
                                value: ebidaYearlyGraph,
                                data: tempYear
                            }
                        },
                        boxes: {
                           ytd: {
                                value: boxesReal+boxesBudget,
                                percentage: `${boxesReal && boxesBudget ? Number((boxesReal/boxesBudget)*100).toFixed(2) : 0}%`
                            },
                            forecast: {
                                value: boxesForecast,
                                percentage: `${boxesForecast && wholeBoxesBudget ? Number((forecast/wholeBoxesBudget)*100).toFixed(2) : 0}%`
                            },
                            monthlyGraph:{
                                value: boxesMonthlyGraph,
                                data
                            },
                            annualGraph: {
                                value: boxesYearlyGraph,
                                data: tempYear
                            }
                        }
                    }
                });
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