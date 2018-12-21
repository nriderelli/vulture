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
      selectedHeader: 'márgenes',
      selectedSubHeader: 'márgenesInDoller',
    };
  }
  renderSubHeader() {
    switch(this.state.selectedHeader) {
      case 'márgenes':
        return (
          <Container>
            <Button
              background={ this.state.selectedSubHeader === 'márgenesInDoller'? "#000" : "#e1e1e1"}
              color={ this.state.selectedSubHeader === 'márgenesInDoller'? '#fff' : '#000'}
              onClick={()=>{
                this.setState({
                  selectedSubHeader: 'márgenesInDoller'
                })
              }}
            >
              Márgenes ($)
            </Button>
            <Button
              background={ this.state.selectedSubHeader === 'márgenesInPercent'? "#000" : "#e1e1e1"}
              color={ this.state.selectedSubHeader === 'márgenesInPercent'? '#fff' : '#000'}
              onClick={()=>{
                this.setState({
                  selectedSubHeader: 'márgenesInPercent'
                })
              }}
            >
              Márgenes (% sobre ingresos)
            </Button>
          </Container>
        )
        break;
      case 'mix':
        return (
          <Container>
            <Button
              background={ this.state.selectedSubHeader === 'mgAcumulados'? "#000" : "#e1e1e1"}
              color={ this.state.selectedSubHeader === 'mgAcumulados'? '#fff' : '#000'}
              onClick={()=>{
                this.setState({
                  selectedSubHeader: 'mgAcumulados'
                })
              }}
            >
              Mg. acumulados
            </Button>
            <Button
              background={ this.state.selectedSubHeader === 'mixPercentMg'? "#000" : "#e1e1e1"}
              color={ this.state.selectedSubHeader === 'mixPercentMg'? '#fff' : '#000'}
              onClick={()=>{
                this.setState({
                  selectedSubHeader: 'mixPercentMg'
                })
              }}
            >
              Mix % mg
            </Button>
            <Button
              background={ this.state.selectedSubHeader === 'concentraciónDeMg'? "#000" : "#e1e1e1"}
              color={ this.state.selectedSubHeader === 'concentraciónDeMg'? '#fff' : '#000'}
              onClick={()=>{
                this.setState({
                  selectedSubHeader: 'concentraciónDeMg'
                })
              }}
            >
              Concentración de mg
            </Button>
            <Button
              background={ this.state.selectedSubHeader === 'concentraciónDeVolumen'? "#000" : "#e1e1e1"}
              color={ this.state.selectedSubHeader === 'concentraciónDeVolumen'? '#fff' : '#000'}
              onClick={()=>{
                this.setState({
                  selectedSubHeader: 'concentraciónDeVolumen'
                })
              }}
            >
              Concentración de volumen
            </Button>
          </Container>
        )
        break;
      case 'comportamiento':
        return (
          <Container>
            <Button
              background={ this.state.selectedSubHeader === 'recurrenciaDeClientes'? "#000" : "#e1e1e1"}
              color={ this.state.selectedSubHeader === 'recurrenciaDeClientes'? '#fff' : '#000'}
              onClick={()=>{
                this.setState({
                  selectedSubHeader: 'recurrenciaDeClientes'
                })
              }}
            >
              Recurrencia de clientes
            </Button>
            <Button
              background={ this.state.selectedSubHeader === 'recurrenciaDeEBITDA'? "#000" : "#e1e1e1"}
              color={ this.state.selectedSubHeader === 'recurrenciaDeEBITDA'? '#fff' : '#000'}
              onClick={()=>{
                this.setState({
                  selectedSubHeader: 'recurrenciaDeEBITDA'
                })
              }}
            >
              Recurrencia de EBITDA
            </Button>
          </Container>
        )
        break;
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
                  color={ this.state.selectedHeader === 'márgenes' ? '#fff' : '#000' }
                  background={ this.state.selectedHeader === 'márgenes' ? '#006e82' : '#fff' }
                  onClick={() => {
                    this.setState({
                      selectedHeader: 'márgenes',
                      selectedSubHeader: 'márgenesInDoller'
                    })
                  }}
                >
                  <P
                    borderLeft='0px'
                  >
                    Márgenes
                  </P>
                </DIV>
                <DIV
                  color={ this.state.selectedHeader === 'mix' ? '#fff' : '#000' }
                  background={ this.state.selectedHeader === 'mix' ? '#006e82' : '#fff' }
                  onClick={() => {
                    this.setState({
                      selectedHeader: 'mix',
                      selectedSubHeader: 'mgAcumulados'
                    })
                  }}
                >
                  <P
                    borderLeft={ this.state.selectedHeader === 'total' ? '0px' : '1px' }
                  >
                    Mix
                  </P>
                </DIV>
                <DIV
                  color={ this.state.selectedHeader === 'comportamiento' ? '#fff' : '#000' }
                  background={ this.state.selectedHeader === 'comportamiento' ? '#006e82' : '#fff' }
                  onClick={() => {
                    this.setState({
                      selectedHeader: 'comportamiento',
                      selectedSubHeader: 'recurrenciaDeCliente'
                    })
                  }}
                >
                  <P
                    borderLeft={ this.state.selectedHeader === 'total' ? '0px' : '1px' }
                  >
                    Comportamiento
                  </P>
                </DIV>
              </div>
              <div className='col-1'>
                <img src={Edit} />
              </div>
            </Header>
            {this.renderSubHeader()}
            
          </div>
        </CardContainer>
      </div>
    );
  }
}

export default Card;
