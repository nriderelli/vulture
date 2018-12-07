import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_DASHBOARD_INCOME } from './constants';
import { dashboardIncome } from './actions';
import url from 'api/urls.json';
import request from 'utils/request';

export function* getIncome() {
	console.log(":: saga")
  const requestURL = `${url.mainUrl}${url.getDashboardIncome}`;
  console.log(':: requestURL ',requestURL)
  try {
    const tenants = yield call(request, requestURL);
    yield put(dashboardIncome(tenants.data));
  } catch (err) {
  	console.log(err)
    yield put(tenantsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* getIncomeData() {
  yield takeLatest(GET_DASHBOARD_INCOME, getIncome);
}
