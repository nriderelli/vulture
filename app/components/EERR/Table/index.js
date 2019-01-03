// import npm packages
import React from 'react';
import { FormattedMessage } from 'react-intl';

// import local files
import Container from './Container';
import CardContainer from './CardContainer';
import Add from 'images/icons/add.png';
import See from 'images/icons/see_details.png';
import TH from './TH';
import TD from './TD';
import TR from './TR';

/* eslint-disable react/prefer-stateless-function */
class Table extends React.Component {
  constructor(props) {
    super(props);
    this.data = [{
      type: 'INCOME',
      jan: 2817,
      feb: 2845,
      mar: 2874,
      apr: 2902,
      may: 2931,
      jun: 2961,
      jul: 2990,
      aug: 3020,
      sep: 3050,
      oct: 3081,
      nov: 3112,
      dec: 3143,
      total: 35727
    }, {
      type: 'D MONTH / MONTH-1',
      jan: 'twenty',
      feb: 'twenty',
      mar: 'twenty',
      apr: 'twenty',
      may: 'twenty',
      jun: 'twenty',
      jul: 'twenty',
      aug: 'twenty',
      sep: 'twenty',
      oct: 'twenty',
      nov: 'twenty',
      dec: 'twenty',
      total: 'twenty'
    }, {
      type: 'MONTH /',
      jan: 'twenty',
      feb: 'twenty',
      mar: 'twenty',
      apr: 'twenty',
      may: 'twenty',
      jun: 'twenty',
      jul: 'twenty',
      aug: 'twenty',
      sep: 'twenty',
      oct: 'twenty',
      nov: 'twenty',
      dec: 'twenty',
      total: 'twenty'
    }, {
      type: 'YTD /',
      jan: 'twenty',
      feb: 'twenty',
      mar: 'twenty',
      apr: 'twenty',
      may: 'twenty',
      jun: 'twenty',
      jul: 'twenty',
      aug: 'twenty',
      sep: 'twenty',
      oct: 'twenty',
      nov: 'twenty',
      dec: 'twenty',
      total: 'twenty'
    }, {
      type: 'YTD',
      jan: 'twenty',
      feb: 'twenty',
      mar: 'twenty',
      apr: 'twenty',
      may: 'twenty',
      jun: 'twenty',
      jul: 'twenty',
      aug: 'twenty',
      sep: 'twenty',
      oct: 'twenty',
      nov: 'twenty',
      dec: 'twenty',
      total: 'twenty'
    }];
  }
  render() {
    const { data, index } = this.props;
    return (
      <Container className='col-12' key={index}>
        <CardContainer className="card" key={this.props.index}>
          <table>
            <thead>
              <TR style={{background: '#dde7ea'}}>
                <TH>
                </TH>
                <TH>
                  JAN-15
                </TH>
                <TH>
                  FAB-15
                </TH>
                <TH>
                  MAR-15
                </TH>
                <TH>
                  APR-15
                </TH>
                <TH>
                  MAY-15
                </TH>
                <TH>
                  JUN-15
                </TH>
                <TH>
                  JUL-15
                </TH>
                <TH>
                  AUG-15
                </TH>
                <TH>
                  SEP-15
                </TH>
                <TH>
                  OCT-15
                </TH>
                <TH>
                  NOV-15
                </TH>
                <TH>
                  DEC-15
                </TH>
                <TH>
                  TOTAL-15
                </TH>
              </TR>
            </thead>
            <tbody>
              
              {
                this.data
                && this.data.length !== 0
                && this.data.map(val => (
                  <TR>
                    <TH style={{color: '#000'}}>
                      {val.type}
                    </TH>
                    <TD>
                      {val.jan}
                    </TD>
                    <TD>
                      {val.feb}
                    </TD>
                    <TD>
                      {val.mar}
                    </TD>
                    <TD>
                      {val.apr}
                    </TD>
                    <TD>
                      {val.may}
                    </TD>
                    <TD>
                      {val.jun}
                    </TD>
                    <TD>
                      {val.jul}
                    </TD>
                    <TD>
                      {val.aug}
                    </TD>
                    <TD>
                      {val.sep}
                    </TD>
                    <TD>
                      {val.oct}
                    </TD>
                    <TD>
                      {val.nov}
                    </TD>
                    <TD>
                      {val.dec}
                    </TD>
                    <TD>
                      {val.total}
                    </TD>
                  </TR>
                ))
              }
            </tbody>
          </table>
        </CardContainer>
      </Container>
    );
  }
}

export default Table;
