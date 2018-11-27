// import npm packages
import React from 'react';
import { FormattedMessage } from 'react-intl';

// import local files
import Button from './Button';
import CardContainer from './CardContainer';
import Icon from './Icon';
import Header from './Header';
import DIV from './DIV';
import P from './P';
import Container from './Container';
import COL from './COL';
import HeaderCol from './HeaderCol';
import Select from './Select';
import Row from './Row';

/* eslint-disable react/prefer-stateless-function */
class Card extends React.Component {
  render() {
    const { active } = this.props;
    return (
      <div>
        <CardContainer className="card" key={this.props.index}>
          <div className="card-body">
            <Header className='row'>
              <div className='col-11'>
                <DIV
                  color={ active === 'total' ? '#fff' : '#000' }
                  background={ active === 'total' ? '#006e82' : '#fff' }
                >
                  <P
                    borderLeft='0px'
                  >
                    TOTAL COSTS
                  </P>
                </DIV>
                <DIV
                  color={ active === 'metrics' ? '#fff' : '#000' }
                  background={ active === 'metrics' ? '#006e82' : '#fff' }
                >
                  <P
                    borderLeft={ active === 'total' ? '0px' : '1px' }
                  >
                    METRICS
                  </P>
                </DIV>
                <DIV
                  color={ active === 'average' ? '#fff' : '#000' }
                  background={ active === 'average' ? '#006e82' : '#fff' }
                >
                  <P
                    borderLeft={ active === 'metrics' ? '0px' : '1px' }
                  >
                    AVERAGE TICKET
                  </P>
                </DIV>
                <DIV
                  color={ active === 'new' ? '#fff' : '#000' }
                  background={ active === 'new' ? '#006e82' : '#fff' }
                >
                  <P
                    borderLeft={ active === 'average' ? '0px' : '1px' }
                  >
                    NEW
                  </P>
                </DIV>
              </div>
              <div className='col-1'>
                edit
              </div>
            </Header>
            
            <Container>
              <Button  background="#000" color='#fff'>
                Growth $
              </Button>
              <Button  background="#e1e1e1" color='#000'>
                Increase %
              </Button>
              <Button  background="#e1e1e1" color='#000'>
                Concertration
              </Button>
              <Button  background="#e1e1e1" color='#000'>
                Change of Mix
              </Button>
            </Container>
          </div>
        </CardContainer>

        <CardContainer className="card" key={this.props.index}>
          <div className="card-body row">
            <COL className='col-2'>
              <HeaderCol className='col-12'>
                APRETURA DE NEGOCIO
              </HeaderCol>
              <Row className='row'>
                <div className='col-9'>
                  <div className='form-group'>
                    <Select className="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Select>

                    <Select className="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Select>
                  </div>
                </div>
                <div className='col-2'>
                  plus
                </div>
              </Row>
            </COL>
            <COL className='col-2'>
              <HeaderCol className='col-12'>
                APRETURA DE COSTOS
              </HeaderCol>
              <Row className='row'>
                <div className='col-9'>
                  <div className='form-group'>
                    <Select className="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Select>

                    <Select className="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Select>
                  </div>
                </div>
                <div className='col-2'>
                  plus
                </div>
              </Row>
            </COL>
            <COL className='col-2'>
              <HeaderCol className='col-12'>
                FILTRO DE NEGOCIO
              </HeaderCol>
              <Row className='row'>
                <div className='col-9'>
                  <div className='form-group'>
                    <Select className="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Select>

                    <Select className="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Select>
                  </div>
                </div>
                <div className='col-2'>
                  plus
                </div>
              </Row>
            </COL>
            <COL className='col-2'>
              <HeaderCol className='col-12'>
                FILTRO NEGOCIO
              </HeaderCol>
              <Row className='row'>
                <div className='col-9'>
                  <div className='form-group'>
                    <Select className="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Select>

                    <Select className="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Select>
                  </div>
                </div>
                <div className='col-2'>
                  plus
                </div>
              </Row>
            </COL>
            <COL className='col-2'>
              <HeaderCol className='col-12'>
                DATES / FREQUENCY
              </HeaderCol>
              <Row className='row'>
                <div className='form-group col-12'>
                  <Select className="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Select>

                  <Select className="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Select>

                  <Select className="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Select>
                </div>
              </Row>
            </COL>
            <COL className='col-2'>
              <HeaderCol className='col-12'>
                OPTIONS
              </HeaderCol>
              <Row className='row'>
                <div className='col-12'>
                  <Select className="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Select>
                </div>
              </Row>
            </COL>
            
          </div>
        </CardContainer>
      </div>
    );
  }
}

export default Card;
