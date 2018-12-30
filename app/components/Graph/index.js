// import npm packages
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Bar } from 'react-chartjs-2';

// import local files
import GraphContainer from './GraphContainer';

/* eslint-disable react/prefer-stateless-function */
class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHeader: 'métricasOp',
      selectedSubHeader: 'metricasInDoller',
    };
  }
  render() {
    return (
      <GraphContainer>
        <Bar
          data={this.props.data}
          options={{
            maintainAspectRatio: false
          }}
        />
      </GraphContainer>
    );
  }
}

export default Graph;
