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
import Img from './Img';
import Add from 'images/icons/add.png';
import See from 'images/icons/see_details.png';

/* eslint-disable react/prefer-stateless-function */
class Table extends React.Component {
  render() {
    const { data, index } = this.props;
    return (
      <Container className='col-4' key={index}>
        <CardContainer className="card" key={this.props.index} style={{padding: '7px'}}>
          <table style={{width: '100%'}}>
            <thead>
              <TR border='1px'>
                {
                  data.heading
                  && data.heading.length !== 0
                  && data.heading.map((th, i) => (
                    <TH scope="col" key={i}>
                      <div
                        style={{
                          background: '#006e82',
                          textAlign: 'center',
                          color: '#fff',
                          padding: '10px',
                          fontSize: '12px',
                          borderRadius: i === 0 ? '10px 5px 5px 5px' : i === data.heading.length-1 ? '5px 10px 5px 5px' : '5px',
                          marginBottom: '25px'
                        }}
                      >
                        {th.toUpperCase()}
                      </div>
                    </TH>
                  ))
                }
              </TR>
            </thead>
            <tbody>
              {data.data &&
                data.data.length !== 0 &&
                data.data.map((val, i) => (
                     <TR border={i !== data.data.length-1 ?'1px' : '0px'} key={i}>
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
              {
                data && (
                  <TR border='0px'>
                    <TD style={{paddingBottom: '0px'}}>
                    </TD>
                    <TD style={{paddingBottom: '0px'}}>
                    </TD>
                    <TD style={{paddingBottom: '0px'}}>
                    </TD>
                    <TD style={{paddingBottom: '0px'}}>
                      {
                        data.isSeeAll ?
                          <p
                            style={{
                              float: 'right',
                              color: '#000',
                              fontSize: '15px',
                              marginBottom: '0px'
                            }}
                          >
                            See All
                            &nbsp;
                            <Img src={See} />
                          </p>
                        : 
                          <p
                            style={{
                              float: 'right',
                              color: '#000',
                              fontSize: '15px',
                              marginBottom: '0px'
                            }}
                          >
                            <Img src={Add} />
                          </p>
                      }
                    </TD>
                  </TR>
                )
              }
            </tbody>
          </table>
        </CardContainer>
      </Container>
    );
  }
}

export default Table;
