/*
 *
 * TenantDashboard actions
 *
 */

import { GET_DASHBOARD_INCOME, DASHBOARD_INCOME_DATA } from './constants';

export function dashboardIncome() {
	console.log(':: actions')
  return {
    type: GET_DASHBOARD_INCOME
  };
}


export function incomeLoaded(income) {
  return {
    type: DASHBOARD_INCOME_DATA,
    income
  };
}