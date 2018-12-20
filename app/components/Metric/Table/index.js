// import npm packages
import React from 'react';
import { FormattedMessage } from 'react-intl';

// import local files
import Button from '../../Button';
import CardContainer from './CardContainer';
import Icon from './Icon';
import Container from './Container';
import TD from './TD';
import TR from './TR';
import TH from './TH';
import Text from './Text';
import P from './P';

/* eslint-disable react/prefer-stateless-function */
class Table extends React.Component {
  render() {
    const { data, index } = this.props;
    return (
      <Container className='col-4' key={index}>
        <CardContainer className="card" key={this.props.index}>
          <table className="table">
            <thead>
              <TR>
                {
                  data.heading
                  && data.heading.length !== 0
                  && data.heading.map((th, i) => (
                    <TH scope="col" key={i}>
                      <Button left="0" background="#006e82">
                        {th.toUpperCase()}
                      </Button>
                    </TH>
                  ))
                }
              </TR>
            </thead>
            <tbody>
              {data.data &&
                data.data.length !== 0 &&
                data.data.map((val, i) => (
                    <TR key={i}>
                      <th>
                        {val[data.heading[0]]}
                      </th>
                      <TD>
                        <Text>
                          {val.month.value}
                        </Text>
                        <Icon
                          color={val.month.color}
                          className="fa fa-circle col-1"
                          aria-hidden="true"
                          size='8px'
                        />
                      </TD>
                      <TD>
                        <Text>
                          {val.ytd.value}
                        </Text>
                        <Icon
                          color={val.ytd.color}
                          className="fa fa-circle col-1"
                          aria-hidden="true"
                          size='8px'
                        />
                      </TD>
                      <TD>
                        <Text>
                          {val.forecast.value}
                        </Text>
                        <Icon
                          color={val.forecast.color}
                          className="fa fa-circle col-1"
                          aria-hidden="true"
                          size='8px'
                        />
                      </TD>

                    </TR>
                  ))}
            </tbody>
          </table>
          <div>
            {
              data.isSeeAll ?
                <P>
                  See All
                  <Icon
                    color='#006e81'
                    className="fa fa-arrow-circle-o-right"
                    aria-hidden="true"
                    size='8px'
                  />
                </P>
              : 
                <P>Plus</P>
            }
          </div>
        </CardContainer>
      </Container>
    );
  }
}

export default Table;
