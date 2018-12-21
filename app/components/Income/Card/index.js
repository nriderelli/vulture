// import npm packages
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Bar } from 'react-chartjs-2';

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
      selectedHeader: 'ingresos',
      selectedSubHeader: 'ingresos',
    };
  }
  renderSubHeader() {
    switch(this.state.selectedHeader) {
      case 'ingresos':
        return (
          <Container>
            <Button
              background={ this.state.selectedSubHeader === 'ingresos'? "#000" : "#e1e1e1"}
              color={ this.state.selectedSubHeader === 'ingresos'? '#fff' : '#000'}
              onClick={()=>{
                this.setState({
                  selectedSubHeader: 'ingresos'
                })
              }}
            >
              Ingresos
            </Button>
            <Button
              background={ this.state.selectedSubHeader === 'volumen'? "#000" : "#e1e1e1"}
              color={ this.state.selectedSubHeader === 'volumen'? '#fff' : '#000'}
              onClick={()=>{
                this.setState({
                  selectedSubHeader: ''
                })
              }}
            >
              Volumen
            </Button>
            <Button
              background={ this.state.selectedSubHeader === 'cantidad'? "#000" : "#e1e1e1"}
              color={ this.state.selectedSubHeader === 'cantidad'? '#fff' : '#000'}
              onClick={()=>{
                this.setState({
                  selectedSubHeader: 'cantidad'
                })
              }}
            >
              Cantidad de “N”
            </Button>
            <Button
              background={ this.state.selectedSubHeader === 'ticket'? "#000" : "#e1e1e1"}
              color={ this.state.selectedSubHeader === 'ticket'? '#fff' : '#000'}
              onClick={()=>{
                this.setState({
                  selectedSubHeader: 'ticket'
                })
              }}
            >
              Ticket
            </Button>
          </Container>
        )
        break;
      case 'mix':
        return (
          <Container>
            <Button
              background={ this.state.selectedSubHeader === 'ingresosAcumulados'? "#000" : "#e1e1e1"}
              color={ this.state.selectedSubHeader === 'ingresosAcumulados'? '#fff' : '#000'}
              onClick={()=>{
                this.setState({
                  selectedSubHeader: 'ingresosAcumulados'
                })
              }}
            >
              Ingresos acumulados
            </Button>
            <Button
              background={ this.state.selectedSubHeader === 'mixPercentIngresos'? "#000" : "#e1e1e1"}
              color={ this.state.selectedSubHeader === 'mixPercentIngresos'? '#fff' : '#000'}
              onClick={()=>{
                this.setState({
                  selectedSubHeader: 'mixPercentIngresos'
                })
              }}
            >
              Mix % ingresos
            </Button>
            <Button
              background={ this.state.selectedSubHeader === 'mixPercentVolumen'? "#000" : "#e1e1e1"}
              color={ this.state.selectedSubHeader === 'mixPercentVolumen'? '#fff' : '#000'}
              onClick={()=>{
                this.setState({
                  selectedSubHeader: 'mixPercentVolumen'
                })
              }}
            >
              Mix % volumen
            </Button>
            <Button
              background={ this.state.selectedSubHeader === 'concentraciónDeIngresos'? "#000" : "#e1e1e1"}
              color={ this.state.selectedSubHeader === 'concentraciónDeIngresos'? '#fff' : '#000'}
              onClick={()=>{
                this.setState({
                  selectedSubHeader: 'concentraciónDeIngresos'
                })
              }}
            >
              Concentración de ingresos
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
              background={ this.state.selectedSubHeader === 'recurrenciaDeIngresos'? "#000" : "#e1e1e1"}
              color={ this.state.selectedSubHeader === 'recurrenciaDeIngresos'? '#fff' : '#000'}
              onClick={()=>{
                this.setState({
                  selectedSubHeader: 'recurrenciaDeIngresos'
                })
              }}
            >
              Recurrencia de ingresos
            </Button>
            <Button
              background={ this.state.selectedSubHeader === 'estacionalidad'? "#000" : "#e1e1e1"}
              color={ this.state.selectedSubHeader === 'estacionalidad'? '#fff' : '#000'}
              onClick={()=>{
                this.setState({
                  selectedSubHeader: 'estacionalidad'
                })
              }}
            >
              Estacionalidad
            </Button>
            <Button
              background={ this.state.selectedSubHeader === 'attrition'? "#000" : "#e1e1e1"}
              color={ this.state.selectedSubHeader === 'attrition'? '#fff' : '#000'}
              onClick={()=>{
                this.setState({
                  selectedSubHeader: 'attrition'
                })
              }}
            >
              Attrition
            </Button>
          </Container>
        )
        break;
      case 'backlog':
        return (
          <Container>
            <Button
              background={ this.state.selectedSubHeader === 'backlog'? "#000" : "#e1e1e1"}
              color={ this.state.selectedSubHeader === 'backlog'? '#fff' : '#000'}
              onClick={()=>{
                this.setState({
                  selectedSubHeader: 'backlog'
                })
              }}
            >
              Backlog
            </Button>
          </Container>
        )
        break;
    }
  }
  renderGraph() {
    switch(this.state.selectedSubHeader) {
      case 'ingresos':
        return {
          labels: ['2015', '2016', '2017', 'Promedio'],
          datasets: [
            {
              label: 'El Gobemador',
              backgroundColor: '#1f3764',
              borderColor: '#1f3764',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [20000, 21000, 22000, 21000],
            }, {
              label: 'Santa Digna',
              backgroundColor: '#8da9db',
              borderColor: '#8da9db',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [39000, 41000, 43000, 41000],
            }, {
              label: 'Las Mulas',
              backgroundColor: '#a4a4a4',
              borderColor: '#a4a4a4',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [57000, 60000, 63000, 60000],
            }
          ]
        };
        break;
      case 'volumen':
        break;
      case 'cantidad':
        break;
      case 'ticket':
        break;
      case 'ingresosAcumulados':
        break;
      case 'mixPercentIngresos':
        break;
      case 'mixPercentVolumen':
        break;
      case 'concentraciónDeIngresos':
        break;
      case 'concentraciónDeVolumen':
        break;
      case 'recurrenciaDeClientes':
        break;
      case 'recurrenciaDeIngresos':
        break;
      case 'estacionalidad':
        break;
      case 'Attrition':
        break;
      case 'backlog':
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
                  color={ this.state.selectedHeader === 'ingresos' ? '#fff' : '#000' }
                  background={ this.state.selectedHeader === 'ingresos' ? '#006e82' : '#fff' }
                  onClick={() => {
                    this.setState({
                      selectedHeader: 'ingresos',
                      selectedSubHeader: 'ingresos'
                    })
                  }}
                >
                  <P
                    borderLeft='0px'
                  >
                    Ingresos
                  </P>
                </DIV>
                <DIV
                  color={ this.state.selectedHeader === 'mix' ? '#fff' : '#000' }
                  background={ this.state.selectedHeader === 'mix' ? '#006e82' : '#fff' }
                  onClick={() => {
                    this.setState({
                      selectedHeader: 'mix',
                      selectedSubHeader: 'ingresosAcumulados'
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
                      selectedSubHeader: 'recurrenciaDeClientes'
                    })
                  }}
                >
                  <P
                    borderLeft={ this.state.selectedHeader === 'total' ? '0px' : '1px' }
                  >
                    Comportamiento
                  </P>
                </DIV>
                <DIV
                  color={ this.state.selectedHeader === 'backlog' ? '#fff' : '#000' }
                  background={ this.state.selectedHeader === 'backlog' ? '#006e82' : '#fff' }
                  onClick={() => {
                    this.setState({
                      selectedHeader: 'backlog',
                      selectedSubHeader: 'backlog'
                    })
                  }}
                >
                  <P
                    borderLeft={ this.state.selectedHeader === 'total' ? '0px' : '1px' }
                  >
                    Backlog
                  </P>
                </DIV>
              </div>
              <div className='col-1'>
                <img src={Edit} />
              </div>
            </Header>
            {this.renderSubHeader()}

            <Container>
              {
                this.renderGraph() ?
                  <Bar
                    data={this.renderGraph()}
                    options={{
                      maintainAspectRatio: false
                    }}
                  />
                :
                  ''
              }
              
            </Container>
            
          </div>
        </CardContainer>
      </div>
    );
  }
}

export default Card;
