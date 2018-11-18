// import npm packages
import React from 'react';
import { FormattedMessage } from 'react-intl';

// import local files
import Button from '../../Button';
import CardContainer from './CardContainer';
import TextHead from './TextHead';
import TextTD from './TextTD';
import Icon from './Icon';
/* eslint-disable react/prefer-stateless-function */
class DashboardTable extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <CardContainer className="card" key={this.props.index}>
        <div className="card-body">
          {
            this.props.index === 0 ?
                <h5 className="card-title">Values in M CLP</h5>
            :
              ''
          }
          <Icon
            color="#006e82"
            className="fa fa-pencil-square-o"
            aria-hidden="true"
          />
          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  <Button left="0" background="#006e82">
                    {data.type.toUpperCase()}
                  </Button>
                </th>
                <th scope="col">
                  <TextHead>YTD</TextHead>
                  <TextHead>Ago-2018</TextHead>
                </th>
                <th scope="col">
                  <TextHead>FORECAST</TextHead>
                  <TextHead>2018</TextHead>
                </th>
                <th scope="col">
                  <TextHead>MONTHLY</TextHead>
                  <TextHead>TREND</TextHead>
                </th>
                <th scope="col">
                  <TextHead>ANNUAL</TextHead>
                  <TextHead>TREND</TextHead>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.data &&
                data.data.length !== 0 &&
                data.data.map((val, i) => (
                    <tr key={i}>
                      <th scope="row">{val.type}</th>
                      <TextTD>
                        {val.ytd.value}
                        &nbsp;&nbsp;
                        <Icon
                          color={val.ytd.color}
                          className="fa fa-circle col-1"
                          aria-hidden="true"
                          size='8px'
                        >
                        </Icon>
                      </TextTD>
                      <TextTD>
                        {val.forecast.value}
                        &nbsp;&nbsp;
                        <Icon
                          color={val.forecast.color}
                          className="fa fa-circle col-1"
                          aria-hidden="true"
                          size='8px'
                        >
                        </Icon>
                      </TextTD>
                      <TextTD>
                        {val.monthly.value}
                      </TextTD>
                      <TextTD>
                        {val.annual.value}
                      </TextTD>

                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </CardContainer>
    );
  }
}

export default DashboardTable;
