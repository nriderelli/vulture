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
import Table from 'components/Margin/Table';
import Card from 'components/Margin/Card';
import Text from './Text';
import Header from './Header';
import A from './A';
/* eslint-disable react/prefer-stateless-function */
export class Margin extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
    this.error =
      'Error! There are itmes not assigned in the area of "Classification of area and accounts"';
    this.table = [{
      heading: ['consolidated', 'month', 'ytd', 'forecast'],
      data: [{
        consolidated: 'Total Margins',
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
        consolidated: 'Total Margins',
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
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Margins</title>
          <meta name="Margins" content="Margins of the application" />
        </Helmet>
        <div>
          <Header>
            <Text>
              Values in M CLP
            </Text>
            <A
              background="#006e82"
              float='right'
              data-toggle="collapse"
              role="button"
              aria-expanded="true"
              aria-controls="collapseExample"
              onClick={() => {
                this.setState({
                  isOpen: !this.state.isOpen
                })
              }}
            >
              {
                this.state.isOpen?
                  'Hide Panels'
                :
                  'Show Panels'
              }
            </A>
          </Header>
          <div className={`collapse row ${this.state.isOpen ? 'show' : ''}`} id='collapsePannel'>
            { this.table
              && this.table.length !== 0
              && this.table.map((value, index) => (
                <Table data={value} key={index} />
              ))
            }
          </div>
          <Card />        
        </div>
      </div>
    );
  }
}

export default Margin;
