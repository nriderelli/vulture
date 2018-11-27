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
import CostTable from 'components/Cost/Table';
import Card from 'components/Cost/Card';
import Button from 'components/Button';
import Text from './Text';
import Header from './Header';

/* eslint-disable react/prefer-stateless-function */
export class Cost extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: [],
    };
    this.error =
      'Error! There are itmes not assigned in the area of "Classification of area and accounts"';
    this.table = [{
      heading: ['consolidated', 'month', 'ytd', 'forecast'],
      data: [{
        consolidated: 'Total Costs',
        month: {
          value: '120 4%',
          color: '#ff2951',
        },
        ytd: {
          value: '130 3%',
          color: '#44db5f',
        },
        forecast  : {
          value: '130 3%',
          color: '#44db5f',
        }
        
      }, {
        consolidated: 'Country Sales',
        month: {
          value: '9,500 1.2%',
          color: '#44db5f',
        },
        ytd: {
          value: '9,500 1.2%',
          color: '#44db5f',
        },
        forecast  : {
          value: '130 3%',
          color: '#44db5f',
        }
        
      }, {
        consolidated: 'Total Costs',
        month: {
          value: '120 4%',
          color: '#44db5f',
        },
        ytd: {
          value: '130 3%',
          color: '#ff2951',
        },
        forecast  : {
          value: '130 3%',
          color: '#44db5f',
        }
      }],
      isSeeAll: false
    }, {
      heading: ['best n2', 'month', 'ytd', 'forecast'],
      data: [{
        'best n2': 'Management',
        month: {
          value: '120 4%',
          color: '#fdb72c',
        },
        ytd: {
          value: '130 3%',
          color: '#44db5f',
        },
        forecast  : {
          value: '130 3%',
          color: '#44db5f',
        }
        
      }, {
        'best n2': 'Matrix House',
        month: {
          value: '9,500 1.2%',
          color: '#44db5f',
        },
        ytd: {
          value: '9,500 1.2%',
          color: '#44db5f',
        },
        forecast  : {
          value: '130 3%',
          color: '#44db5f',
        }
        
      }, {
        'best n2': 'Administration',
        month: {
          value: '120 4%',
          color: '#44db5f',
        },
        ytd: {
          value: '130 3%',
          color: '#ff2951',
        },
        forecast  : {
          value: '130 3%',
          color: '#44db5f',
        }
      }],
      isSeeAll: true
    }, {
      heading: ['worst n2', 'month', 'ytd', 'forecast'],
      data: [{
        'worst n2': 'Maintenance',
        month: {
          value: '120 4%',
          color: '#fdb72c',
        },
        ytd: {
          value: '130 3%',
          color: '#ff2951',
        },
        forecast  : {
          value: '130 3%',
          color: '#44db5f',
        }
        
      }, {
        'worst n2': 'Computing',
        month: {
          value: '9,500 1.2%',
          color: '#44db5f',
        },
        ytd: {
          value: '9,500 1.2%',
          color: '#44db5f',
        },
        forecast  : {
          value: '130 3%',
          color: '#44db5f',
        }
        
      }, {
        'worst n2': 'Energy',
        month: {
          value: '120 4%',
          color: '#44db5f',
        },
        ytd: {
          value: '130 3%',
          color: '#ff2951',
        },
        forecast  : {
          value: '130 3%',
          color: '#44db5f',
        }
      }],
      isSeeAll: true
    }];

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
          <title>Costs</title>
          <meta name="Costs" content="Costs of the application" />
        </Helmet>
        <div>
          <Header>
            <Text>
              Values in M CLP
            </Text>
            <Button background="#006e82" float='right'>
              Hide Panels
            </Button>
          </Header>
          <div className='row'>
            { this.table
              && this.table.length !== 0
              && this.table.map((value, index) => (
                <CostTable data={value} key={index} />
              ))
            }
          </div>
          <Card />        
        </div>
      </div>
    );
  }
}

export default Cost;
