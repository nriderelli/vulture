import produce from 'immer';
import { DASHBOARD_INCOME_DATA } from './constants';

// The initial state of the App
const initialState = {
  income: []
};

const dashboard = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DASHBOARD_INCOME_DATA:
        console.log(':: reducer ',action)
        return draft;
        break;
      default:
        return state;
    }
  });

export default dashboard;