/*
 * Dashboard
 *
 * This is the first thing users see of our App, at the '/' route
 */

// imports npm packages
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// import local files
import Errors from 'components/Dashboard/Errors';
import DashboardTable from 'components/Dashboard/Table';
import DashboardCard from 'components/Dashboard/Card';
import LeftCard from 'components/Dashboard/LeftCard';
/* eslint-disable react/prefer-stateless-function */
export class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: [],
    };
    this.error =
      'Error! There are itmes not assigned in the area of "Classification of area and accounts"';
    this.table = [
      {
        type: 'results',
        data: [
          {
            type: 'Income',
            ytd: {
              value: '9,500 1.2%',
              color: '#44db5f',
            },
            forecast: {
              value: '9,500 0.0%',
              color: '#44db5f',
            },
            monthly: {},
            annual: {},
          },
          {
            type: 'Mg. Contribution',
            ytd: {
              value: '9,500 1.2%',
              color: '#44db5f',
            },
            forecast: {
              value: '9,500 1.2%',
              color: '#44db5f',
            },
            monthly: {},
            annual: {},
          },
          ,
          {
            type: 'EBITDA',
            ytd: {
              value: '9,500 1.2%',
              color: '#44db5f',
            },
            forecast: {
              value: '9,500 1.2%',
              color: '#ff2951',
            },
            monthly: {},
            annual: {},
          },
        ],
      },
      {
        type: 'metrics',
        data: [
          {
            type: '#Contracts',
            ytd: {
              value: '9,500 1.2%',
              color: '#44db5f',
            },
            forecast: {
              value: '9,500 0.0%',
              color: '#44db5f',
            },
            monthly: {},
            annual: {},
          },
          {
            type: 'Metric 1',
            ytd: {
              value: '9,500 1.2%',
              color: '#44db5f',
            },
            forecast: {
              value: '9,500 1.2%',
              color: '#ff2951',
            },
            monthly: {},
            annual: {},
          },
          ,
          {
            type: 'Metric 2',
            ytd: {
              value: '9,500 1.2%',
              color: '#44db5f',
            },
            forecast: {
              value: '9,500 1.2%',
              color: '#ff2951',
            },
            monthly: {},
            annual: {},
          },
        ],
      },
    ];

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

  render() {
    return (
      <div>
        <Helmet>
          <title>Dashboard</title>
          <meta name="Dashboard" content="Dashboard of the application" />
        </Helmet>
        <div>
          <Errors error={this.error} />
          <div className="row">
            <div className="col-9">
              {this.table &&
                this.table.length !== 0 &&
                this.table.map((data, index) => (
                  <DashboardTable data={data} key={index} index={index} />
                ))}
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

export default Dashboard;
