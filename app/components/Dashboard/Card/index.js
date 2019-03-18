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
import TH from './TH';

/* eslint-disable react/prefer-stateless-function */
class DashboardCard extends React.Component {
  render() {
    return (
      <CardContainer className="card shdow_box x-flow" key={this.props.index}>
        <div className="card-body">
          <table className="table dassbrd_tble alert_tbl_dash">
            <thead>
              <tr>
                <TH scope="col">
                  <Button className="rslt_btn_one" background="#006e82">ALERTS</Button>
                  <TextHead>#</TextHead>
                </TH>
                <TH scope="col">
                  <TextHead>
                    <select className="form-control" />
                  </TextHead>
                  <TextHead>Company</TextHead>
                </TH>
                <TH scope="col">
                  <TextHead>
                    <select className="form-control" />
                  </TextHead>
                  <TextHead>Result Center</TextHead>
                </TH>
                <TH scope="col">
                  <TextHead />
                  <TextHead># Alerts</TextHead>
                </TH>
                <TH scope="col">
                  <TextHead />
                  <TextHead>Imapct on EBITDA (M CLP)</TextHead>
                </TH>
                <TH scope="col">
                  <TextHead />
                  <TextHead>See Details</TextHead>
                </TH>
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
