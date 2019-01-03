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
import Table from 'components/EERR/Table';
import Card from 'components/EERR/Card';
import Text from './Text';
import Header from './Header';
import A from './A';
import Button from './Button';

/* eslint-disable react/prefer-stateless-function */
export class EERR extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
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
            <Card />
          </div>     
        </div>
        <div style={{display: 'block', height: '65px'}}>
          <Button
            background='#dde7e9'
            color='#2b6d81'
            float='right'
            height='50px'
            width='50px'
          >
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button
            background='#dde7e9'
            color='#2b6d81'
            float='right'
            height='50px'
            width='50px'
          >
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button
            background='#dde7e9'
            color='#2b6d81'
            float='right'
            height='50px'
            width='50px'
          >
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button
            background='#dde7e9'
            color='#2b6d81'
            float='right'
            height='50px'
            width='50px'
          >
            <i className="fa fa-minus-circle" aria-hidden="true"></i>
          </Button>
        </div>
        <Table />
      </div>
    );
  }
}

export default EERR;
