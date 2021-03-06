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
import EERRComponent from 'components/EERR';
// import Card from 'components/EERR/Card';
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
          <title>EERR</title>
          <meta name="EERR" content="EERR of the application" />
        </Helmet>
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
        <EERRComponent isOpen={this.state.isOpen} />
      </div>
    );
  }
}

export default EERR;
