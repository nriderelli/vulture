// import npm packages
import React from 'react';

// import local files
import Button from './Button';
import CardContainer from './CardContainer';
import Header from './Header';
import DIV from './DIV';
import P from './P';
import Container from './Container';
import Edit from 'images/icons/edit.png';
import THead from './THead';
import TTotal from './TTotal';
import Add from 'images/icons/add.png';
import FilterContainer from './FilterContainer';
import OpcionesContainer from './OpcionesContainer';
import Graph from '../../Graph';

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
                  selectedSubHeader: 'volumen'
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
              label: 'Las Mulas',
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
              label: 'El Gobemador',
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
        return {
          labels: ['2015', '2016', '2017'],
          datasets: [
            {
              label: 'Las Mulas',
              backgroundColor: '#1f3764',
              borderColor: '#1f3764',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [710, 731, 768],
            }, {
              label: 'Santa Digna',
              backgroundColor: '#8da9db',
              borderColor: '#8da9db',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [528, 520, 549],
            }, {
              label: 'El Gobemador',
              backgroundColor: '#a4a4a4',
              borderColor: '#a4a4a4',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [257, 271, 286],
            }
          ]
        };
        break;
      case 'cantidad':
        return {
          labels: ['2015', '2016', '2017', 'Promedio'],
          datasets: [
            {
              label: '',
              backgroundColor: '#1f3864',
              borderColor: '#1f3864',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [2, 4, 4, 3],
            },
          ]
        };
        break;
      case 'ticket':
        break;
      case 'ingresosAcumulados':
        return {
          labels: ['Las Mulas', 'Santa Digna', 'El Gobemador'],
          datasets: [
            {
              backgroundColor: '#1f3864',
              borderColor: '#1f3864',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [63000, 123000, 180000],
            },
          ]
        };
        break;
      case 'mixPercentIngresos':
        return {
          labels: ['2015', '2016', '2017', 'Promedio'],
          datasets: [
            {
              label: 'Las Mulas',
              backgroundColor: '#1f3764',
              borderColor: '#1f3764',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [35, 35, 35, 35],
            }, {
              label: 'Santa Digna',
              backgroundColor: '#8da9db',
              borderColor: '#8da9db',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [33, 33, 33, 33],
            }, {
              label: 'El Gobemador',
              backgroundColor: '#a4a4a4',
              borderColor: '#a4a4a4',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [32, 32, 32, 32],
            }
          ]
        };
        break;
      case 'mixPercentVolumen':
        return {
          labels: ['2015', '2016', '2017', 'Promedio'],
          datasets: [
            {
              label: 'Las Mulas',
              backgroundColor: '#1f3764',
              borderColor: '#1f3764',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [26, 29, 29, 28],
            }, {
              label: 'Santa Digna',
              backgroundColor: '#8da9db',
              borderColor: '#8da9db',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [38, 34, 34, 35],
            }, {
              label: 'El Gobemador',
              backgroundColor: '#a4a4a4',
              borderColor: '#a4a4a4',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [36, 37, 37, 37],
            }
          ]
        };
        break;
      case 'concentraciónDeIngresos':
        break;
      case 'concentraciónDeVolumen':
        break;
      case 'recurrenciaDeClientes':
        break;
      case 'recurrenciaDeIngresos':
        return {
          labels: ['80 -< 100%%', '50% -< 80%', '30% -< 50% ', '10 -< 30%', '< 10%'],
          datasets: [
            {
              backgroundColor: '#1f3764',
              borderColor: '#1f3764',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [30000, 40000, 50000, 40000, 20000],
            }
          ]
        };
        break;
      case 'estacionalidad':
        break;
      case 'Attrition':
        return {
          labels: ['2 meses', '4 meses', '6 meses', '12 meses'],
          datasets: [
            {
              backgroundColor: '#1f3764',
              borderColor: '#1f3764',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [20, 15, 5, 2],
            }
          ]
        };
        break;
      case 'backlog':
        return {
          labels: ['2015', '2016', '2017'],
          datasets: [
            {
              label: 'Ventas',
              backgroundColor: '#1f3764',
              borderColor: '#1f3764',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [30000, 36000, 43200],
            }, {
              label: 'Facturacion',
              backgroundColor: '#8da9db',
              borderColor: '#8da9db',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [25000, 35000, 35000],
            }, {
              label: 'Dif (Ventas - Fact)',
              backgroundColor: '#a4a4a4',
              borderColor: '#a4a4a4',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [5000, 1000, 8200],
            }
          ]
        };
        break;
      
      
    }
  }
  renderTable() {
    switch(this.state.selectedSubHeader) {
      case 'ingresos':
        return (
          <table className="table">
            <THead>
              <tr>
                <th>
                  Marcas
                </th>
                <th>
                  Var. % 2015 - 2016
                </th>
                <th>
                  Var. % 2016 - 2017
                </th>
                <th>
                  CAGR 2015 - 2017
                </th>
              </tr>
            </THead>
            <tbody>
              <tr>
                <th>Las Mulas</th>
                <td>5,0%</td>
                <td>4,8%</td>
                <td>4,9%</td>
              </tr>
              <tr>
                <th>Santa Digna</th>
                <td>5,3%</td>
                <td>5,0%</td>
                <td>5,1%</td>
              </tr>
              <tr>
                <th>El Gobemador</th>
                <td>5,6%</td>
                <td>5,3%</td>
                <td>5,4%</td>
              </tr>
              <TTotal>
                <th>Total</th>
                <td>5,3%</td>
                <td>5,0%</td>
                <td>5,1%</td>
              </TTotal>
            </tbody>
          </table>
        );
        break;
      case 'volumen':
        return (
          <table className="table">
            <THead>
              <tr>
                <th>
                  Marcas
                </th>
                <th>
                  Var. % 2015 - 2016
                </th>
                <th>
                  Var. % 2016 - 2017
                </th>
                <th>
                  CAGR 2015 - 2017
                </th>
              </tr>
            </THead>
            <tbody>
              <tr>
                <th>Las Mulas</th>
                <td>5,0%</td>
                <td>4,8%</td>
                <td>4,9%</td>
              </tr>
              <tr>
                <th>Santa Digna</th>
                <td>5,3%</td>
                <td>5,0%</td>
                <td>5,1%</td>
              </tr>
              <tr>
                <th>El Gobemador</th>
                <td>5,6%</td>
                <td>5,3%</td>
                <td>5,4%</td>
              </tr>
              <TTotal>
                <th>Total</th>
                <td>5,3%</td>
                <td>5,0%</td>
                <td>5,1%</td>
              </TTotal>
            </tbody>
          </table>
        );
        break;
      case 'cantidad':
        return (
          <table className="table">
            <THead>
              <tr>
                <th>
                  Marcas
                </th>
                <th>
                  Var. % 2015 - 2016
                </th>
                <th>
                  Var. % 2016 - 2017
                </th>
                <th>
                  CAGR 2015 - 2017
                </th>
              </tr>
            </THead>
            <tbody>
              <tr>
                <th>Todas</th>
                <td>5,3%</td>
                <td>5,0%</td>
                <td>5,1%</td>
              </tr>
            </tbody>
          </table>
        );
        break;
      case 'ticket':
        return (
          <table className="table">
            <THead>
              <tr>
                <th>
                  Marcas
                </th>
                <th>
                  Var. % 2015 - 2016
                </th>
                <th>
                  Var. % 2016 - 2017
                </th>
                <th>
                  CAGR 2015 - 2017
                </th>
              </tr>
            </THead>
            <tbody>
              <tr>
                <th>Las Mulas</th>
                <td>5,0%</td>
                <td>4,8%</td>
                <td>4,9%</td>
              </tr>
              <tr>
                <th>Santa Digna</th>
                <td>5,3%</td>
                <td>5,0%</td>
                <td>5,1%</td>
              </tr>
              <tr>
                <th>El Gobemador</th>
                <td>5,6%</td>
                <td>5,3%</td>
                <td>5,4%</td>
              </tr>
              <TTotal>
                <th>Total</th>
                <td>5,3%</td>
                <td>5,0%</td>
                <td>5,1%</td>
              </TTotal>
            </tbody>
          </table>
        );
        break;
      case 'ingresosAcumulados':
        return (
          <table className="table">
            <THead>
              <tr>
                <th>
                </th>
                <th>
                  Las Mulas
                </th>
                <th>
                  Santa Digna
                </th>
                <th>
                  El Gobemador
                </th>
                <th>
                  Total
                </th>
              </tr>
            </THead>
            <tbody>
              <tr>
                <th>% Den Total</th>
                <td>35%</td>
                <td>33%</td>
                <td>32%</td>
                <td>100%</td>
              </tr>
            </tbody>
          </table>
        );
        break;
      case 'mixPercentIngresos':
        return (
          <table className="table">
            <THead>
              <tr>
                <th>
                  Marcas
                </th>
                <th>
                  Var. % 2015 - 2016
                </th>
                <th>
                  Var. % 2016 - 2017
                </th>
                <th>
                  CAGR 2015 - 2017
                </th>
              </tr>
            </THead>
            <tbody>
              <tr>
                <th>Las Mulas</th>
                <td>5,0%</td>
                <td>4,8%</td>
                <td>4,9%</td>
              </tr>
              <tr>
                <th>Santa Digna</th>
                <td>5,3%</td>
                <td>5,0%</td>
                <td>5,1%</td>
              </tr>
              <tr>
                <th>El Gobemador</th>
                <td>5,6%</td>
                <td>5,3%</td>
                <td>5,4%</td>
              </tr>
              <TTotal>
                <th>Total</th>
                <td>5,3%</td>
                <td>5,0%</td>
                <td>5,1%</td>
              </TTotal>
            </tbody>
          </table>
        );
        break;
      case 'mixPercentVolumen':
        return (
          <table className="table">
            <THead>
              <tr>
                <th>
                  Marcas
                </th>
                <th>
                  Var. % 2015 - 2016
                </th>
                <th>
                  Var. % 2016 - 2017
                </th>
                <th>
                  CAGR 2015 - 2017
                </th>
              </tr>
            </THead>
            <tbody>
              <tr>
                <th>Las Mulas</th>
                <td>5,0%</td>
                <td>4,8%</td>
                <td>4,9%</td>
              </tr>
              <tr>
                <th>Santa Digna</th>
                <td>5,3%</td>
                <td>5,0%</td>
                <td>5,1%</td>
              </tr>
              <tr>
                <th>El Gobemador</th>
                <td>5,6%</td>
                <td>5,3%</td>
                <td>5,4%</td>
              </tr>
              <TTotal>
                <th>Total</th>
                <td>5,3%</td>
                <td>5,0%</td>
                <td>5,1%</td>
              </TTotal>
            </tbody>
          </table>
        );
        break;
      case 'backlog':
        return (
          <table className="table">
            <THead>
              <tr>
                <th>
                  Marcas
                </th>
                <th>
                  Var. % 2015 - 2016
                </th>
                <th>
                  Var. % 2016 - 2017
                </th>
                <th>
                  CAGR 2015 - 2017
                </th>
              </tr>
            </THead>
            <tbody>
              <tr>
                <th>Dif (ventas-fact)</th>
                <td>-80,0%</td>
                <td>720,0%</td>
                <td>28,1%</td>
              </tr>
            </tbody>
          </table>
        );
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


            <FilterContainer>
              <table className="table">
                <tbody>
                  <tr>
                    <th>
                      Apertura
                    </th>
                    <th>
                      Filtro
                    </th>
                    <th>
                      Plazo
                    </th>
                    <th>
                      Frecuencia
                    </th>
                    <th>
                      Opciones
                    </th>
                  </tr>
                  <tr>
                    <td className=''>
                      <div className='row'>
                        <div className='col-10 row'>
                          <div className="form-group col-12">
                            <select className="form-control">
                              <option>Marca</option>
                            </select>
                          </div>
                          <div className="form-group col-12">
                            <select className="form-control">
                              <option>Sel. multiple...</option>
                            </select>
                          </div>
                        </div>
                        <div className='col-1'>
                          <img src={Add} />
                        </div>
                      </div>
                    </td>
                      
                    <td className=''>
                      <div className='row'>
                        <div className='col-10 row'>
                          <div className="form-group col-12">
                            <select className="form-control">
                              <option>Pais</option>
                            </select>
                          </div>
                          <div className="form-group col-12">
                            <select className="form-control">
                              <option>Chile, Peru</option>
                            </select>
                          </div>
                        </div>
                        <div className='col-1'>
                          <img src={Add} />
                        </div>
                      </div>
                    </td>

                    <td className=''>
                      <div className='col-12 row'>
                        <div className="form-group col-12">
                          <select className="form-control">
                            <option>Fencha inicio</option>
                          </select>
                        </div>
                        <div className="form-group col-12">
                          <select className="form-control">
                            <option>Fencha termino</option>
                          </select>
                        </div>
                      </div>
                    </td>

                    <td className=''>
                      <div className='col-12 row'>
                        <div className="form-group col-12">
                          <select className="form-control">
                            <option>Mensual</option>
                          </select>
                        </div>
                      </div>
                    </td>

                     <td className=''>
                      <div className='col-12 row'>
                        <OpcionesContainer className="col-5">
                          Exportar PPT
                        </OpcionesContainer>

                        <OpcionesContainer className="col-5">
                          Guardar como fav.
                        </OpcionesContainer>
                      </div>

                      <div className='col-12 row'>
                        <OpcionesContainer className="col-5">
                          Exportar XLS
                        </OpcionesContainer>

                        <OpcionesContainer className="col-5">
                          Agregar a mi DB
                        </OpcionesContainer>
                      </div>
                    </td>
                  </tr>

                  


                </tbody>
              </table>
            </FilterContainer>



            <Container>
              {
                this.renderGraph() ?
                  <Graph
                    data={this.renderGraph()}
                  />
                :
                  ''
              }
            </Container>

            <Container>
              {this.renderTable()}
            </Container>
            
          </div>
        </CardContainer>
      </div>
    );
  }
}

export default Card;
