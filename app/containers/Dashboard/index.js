
 /* Dashboard
 *
 * This is the first thing users see of our App, at the '/' route
 */

// imports npm packages
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

// import local files
import Errors from 'components/Dashboard/Errors';
import DashboardTable from 'components/Dashboard/Table';
import DashboardCard from 'components/Dashboard/Card';
import LeftCard from 'components/Dashboard/LeftCard';
import url from 'api/urls.json';

// import saga from './saga';
// import { DASHBOARD } from './constants';
// import { incomeLoaded, dashboardIncome } from './actions';
// import { makeIncome } from './selectors';
// import injectReducer from 'utils/injectReducer';
// import injectSaga from 'utils/injectSaga';
// import reducer from './reducer';

/* eslint-disable react/prefer-stateless-function */
export default class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      incomeYtd: {},
      incomeForecast: {},
      incomeMonthlyGraph: {},
      incomeAnnualGraph: {},
      contributionYtd: {},
      contributionForecast: {},
      contributionMonthlyGraph: {},
      contributionAnnualGraph: {},
      ebidaYtd: {},
      ebidaForecast: {},
      ebidaMonthlyGraph: {},
      ebidaAnnualGraph: {},
      boxesYtd: {},
      boxesForecast: {},
      boxesMonthlyGraph: {},
      boxesAnnualGraph: {}
    };
    

    this.data = [
      {
        color: '#44db5f',
        number: 45,
        text: '% of EBITDA compliance',
      },
      {
        color: '#44db5f',
        number: 72,
        text: '% of box sold (according to budget)',
      },
      {
        color: '#ff2951',
        number: 29,
        text: '% of box produced (according to budget)',
      },
      {
        color: '#44db5f',
        number: 45,
        text: '% of EBITDA compliance',
      },
      {
        color: '#ffb802',
        number: 72,
        text: '% of box sold (according to budget)',
      },
      {
        color: '#ff2951',
        number: 29,
        text: '% of box produced (according to budget)',
      },
    ];
  }
  componentWillMount() {
    // this.props.getDashboardIncome();
    const currentYear = 12; //new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const requestURL = `${url.mainUrl}${url.getDashboardIncome}/${currentMonth === 1? currentYear-1 : currentYear}/${currentMonth}`;
    console.log(':: requestURL ',requestURL )
    fetch(
        requestURL,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
    .then(response => response.json())
    .then(responseData => {
      if(responseData.status !== 'success') {
        this.setState({
          error: responseData.error || 'Data fetching failed'
        });
      } else {
        this.setState({
          error: null,
          incomeYtd: {
            value: responseData.data.income.ytd,
            color: '#44db5f',
          },
          incomeForecast: {
            value: responseData.data.income.forecast,
            color: '#44db5f',
          },
          incomeMonthlyGraph: responseData.data.income.monthlyGraph,
          incomeAnnualGraph: responseData.data.income.annualGraph,
          contributionYtd: {
            value: responseData.data.contribution.ytd,
            color: '#44db5f',
          },
          contributionForecast: {
            value: responseData.data.contribution.forecast,
            color: '#44db5f',
          },
          contributionMonthlyGraph: responseData.data.contribution.monthlyGraph,
          contributionAnnualGraph: responseData.data.contribution.annualGraph,
          ebidaYtd: {
            value: responseData.data.ebida.ytd,
            color: '#44db5f',
          },
          ebidaForecast: {
            value: responseData.data.ebida.forecast,
            color: '#44db5f',
          },
          ebidaMonthlyGraph: responseData.data.ebida.monthlyGraph,
          ebidaAnnualGraph: responseData.data.ebida.annualGraph,
          boxesYtd: {
            value: responseData.data.boxes.ytd,
            color: '#44db5f',
          },
          boxesForecast: {
            value: responseData.data.boxes.forecast,
            color: '#44db5f',
          },
          boxesMonthlyGraph: responseData.data.boxes.monthlyGraph,
          boxesAnnualGraph: responseData.data.boxes.annualGraph
        })
      }

    })
    .catch(err => {
      this.setState({
        error: responseData.error || 'Data fetching failed'
      });
    });
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Dashboard</title>
          <meta name="Dashboard" content="Dashboard of the application" />
        </Helmet>
        <div>
          <Errors error={this.state.error} />
          <div className="row">
            <div className="col-9">
              <DashboardTable
                results={{
                  income: {
                    ytd: this.state.incomeYtd,
                    forecast: this.state.incomeForecast,
                    monthly: this.state.incomeMonthlyGraph,
                    annual: this.state.incomeAnnualGraph,
                  },
                  contribution: {
                    ytd: this.state.contributionYtd,
                    forecast: this.state.contributionForecast,
                    monthly: this.state.contributionMonthlyGraph,
                    annual: this.state.contributionAnnualGraph,
                  },
                  ebida: {
                    ytd: this.state.ebidaYtd,
                    forecast: this.state.ebidaForecast,
                    monthly: this.state.ebidaMonthlyGraph,
                    annual: this.state.ebidaAnnualGraph,
                  },
                  boxes: {
                    ytd: this.state.boxesYtd,
                    forecast: this.state.boxesForecast,
                    monthly: this.state.boxesMonthlyGraph,
                    annual: this.state.boxesAnnualGraph,
                  }
                }}
              />

              <DashboardCard />
            </div>
            <div className="col-3">
              <LeftCard data={this.data} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*export function mapDispatchToProps(dispatch) {
  console.log(':: mapDispatchToProps')
  return {
    getDashboardIncome: () => dispatch(dashboardIncome())
  };
}

const mapStateToProps = createStructuredSelector({
  income: makeIncome()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: DASHBOARD, reducer });
const withSaga = injectSaga({ key: DASHBOARD, saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Dashboard); */