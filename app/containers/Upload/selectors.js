import { createSelector } from 'reselect';
import _ from 'lodash';
import { DASHBOARD } from './constants';

const income = state => _.get(state, DASHBOARD);
const makeIncome = () =>
  createSelector(income, list => _.get(list, 'income'));


export { income, makeIncome };