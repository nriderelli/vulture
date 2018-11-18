// import npm packages
import React from 'react';
import { FormattedMessage } from 'react-intl';

// import local files
import Button from '../../Button';
import CardContainer from './CardContainer';
import TextHead from './TextHead';
import Text from './Text';
import Icon from './Icon';
import TD from './TD';
import IconContainer from './IconContainer';
/* eslint-disable react/prefer-stateless-function */
class DashboardCard extends React.Component {
  render() {
    return (
      <CardContainer className="card" key={this.props.index}>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  <Button left="50px" background="#006e82">
                    ALERTS
                  </Button>
                  <TextHead>#</TextHead>
                </th>
                <th scope="col">
                  <TextHead>
                    <select className="form-control" />
                  </TextHead>
                  <TextHead>Company</TextHead>
                </th>
                <th scope="col">
                  <TextHead>
                    <select className="form-control" />
                  </TextHead>
                  <TextHead>Result Center</TextHead>
                </th>
                <th scope="col">
                  <TextHead />
                  <TextHead># Alerts</TextHead>
                </th>
                <th scope="col">
                  <TextHead />
                  <TextHead>Imapct on EBITDA (M CLP)</TextHead>
                </th>
                <th scope="col">
                  <TextHead />
                  <TextHead>See Details</TextHead>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Text background="#ff2951">01</Text>
                </td>
                <TD>Ecotecnos</TD>
                <TD>UDEC</TD>
                <TD>two</TD>
                <TD>1.235</TD>
                <TD>
                  <IconContainer>
                    <i className="fa fa-arrow-right" aria-hidden="true" />
                  </IconContainer>
                </TD>
              </tr>
              <tr>
                <td>
                  <Text background="#ffb802">01</Text>
                </td>
                <TD>Biotech</TD>
                <TD>Physical Ocenography</TD>
                <TD>two</TD>
                <TD>1.235</TD>
                <TD>
                  <IconContainer>
                    <i className="fa fa-arrow-right" aria-hidden="true" />
                  </IconContainer>
                </TD>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContainer>
    );
  }
}

export default DashboardCard;
