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
import Edit from 'images/icons/edit.png';

/* eslint-disable react/prefer-stateless-function */
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHeader: 'costosAperturados',
      selectedSubHeader: 'costosEnElTiempo',
    };
  }
  renderSubHeader() {
    switch(this.state.selectedHeader) {
      case 'costosAperturados':
        return (
          <Container>
            <Button
              background={ this.state.selectedSubHeader === 'costosEnElTiempo'? "#000" : "#e1e1e1"}
              color={ this.state.selectedSubHeader === 'costosEnElTiempo'? '#fff' : '#000'}
              onClick={()=>{
                this.setState({
                  selectedSubHeader: 'costosEnElTiempo'
                })
              }}
            >
              Costos en el tiempo
            </Button>
            <Button
              background={ this.state.selectedSubHeader === 'costosEnElTiempoPercent'? "#000" : "#e1e1e1"}
              color={ this.state.selectedSubHeader === 'costosEnElTiempoPercent'? '#fff' : '#000'}
              onClick={()=>{
                this.setState({
                  selectedSubHeader: 'costosEnElTiempoPercent'
                })
              }}
            >
              Costos en el tiempo %
            </Button>
            <Button
              background={ this.state.selectedSubHeader === 'costosAcumulados'? "#000" : "#e1e1e1"}
              color={ this.state.selectedSubHeader === 'costosAcumulados'? '#fff' : '#000'}
              onClick={()=>{
                this.setState({
                  selectedSubHeader: 'costosAcumulados'
                })
              }}
            >
              Costos acumulados
            </Button>
          </Container>
        )
        break;
      case 'productividad':
        return (
          <Container>
            <Button
              background={ this.state.selectedSubHeader === 'productividad'? "#000" : "#e1e1e1"}
              color={ this.state.selectedSubHeader === 'productividad'? '#fff' : '#000'}
              onClick={()=>{
                this.setState({
                  selectedSubHeader: 'productividad'
                })
              }}
            >
              Productivadad
            </Button>
            <Button
              background={ this.state.selectedSubHeader === 'activacionesYDevengo'? "#000" : "#e1e1e1"}
              color={ this.state.selectedSubHeader === 'activacionesYDevengo'? '#fff' : '#000'}
              onClick={()=>{
                this.setState({
                  selectedSubHeader: 'activacionesYDevengo'
                })
              }}
            >
              Activaciones y devengo
            </Button>
          </Container>
        )
    }
  }
  render() {
    return (
      <div>
        <CardContainer className="card" key={this.props.index}>
          <div className="card-body">
            <Header className='row'>
              <div className='col-11'>
                <DIV
                  color={ this.state.selectedHeader === 'costosAperturados' ? '#fff' : '#000' }
                  background={ this.state.selectedHeader === 'costosAperturados' ? '#006e82' : '#fff' }
                  onClick={() => {
                    this.setState({
                      selectedHeader: 'costosAperturados',
                      selectedSubHeader: 'costosEnElTiempo'
                    })
                  }}
                >
                  <P
                    borderLeft='0px'
                  >
                    Costos aperturados
                  </P>
                </DIV>
                <DIV
                  color={ this.state.selectedHeader === 'productividad' ? '#fff' : '#000' }
                  background={ this.state.selectedHeader === 'productividad' ? '#006e82' : '#fff' }
                  onClick={() => {
                    this.setState({
                      selectedHeader: 'productividad',
                      selectedSubHeader: 'productividad'
                    })
                  }}
                >
                  <P
                    borderLeft={ this.state.selectedHeader === 'total' ? '0px' : '1px' }
                  >
                    Productividad
                  </P>
                </DIV>
              </div>
              <div className='col-1'>
                <img src={Edit} />
              </div>
            </Header>
            {
              this.renderSubHeader()
            }
            
          </div>
        </CardContainer>
      </div>
    );
  }
}

export default Card;
