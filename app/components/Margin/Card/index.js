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

  renderGraph() {
    switch(this.state.selectedSubHeader) {
      case 'márgenesInDoller':
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
              data: [10000, 11340, 12100, 11147],
            }, {
              label: 'Santa Digna',
              backgroundColor: '#8da9db',
              borderColor: '#8da9db',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [8550, 9200, 9870, 9207],
            }, {
              label: 'El Gobemador',
              backgroundColor: '#a4a4a4',
              borderColor: '#a4a4a4',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [10800, 11020, 11200, 11007],
            }
          ]
        };
        break;
      case 'márgenesInPercent':
        return {
          type: 'line',
          labels: ['2015', '2016', '2017', 'Promedio'],
          datasets: [
            {
              label: 'Las Mulas',
              backgroundColor: '#1f3764',
              borderColor: '#1f3764',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [51, 54, 55, 53],
            }, {
              label: 'Santa Digna',
              backgroundColor: '#8da9db',
              borderColor: '#8da9db',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [45, 46, 47, 46],
            }, {
              label: 'El Gobemador',
              backgroundColor: '#a4a4a4',
              borderColor: '#a4a4a4',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [60, 58, 56, 58],
            }
          ]
        };
        break;
      case 'mgAcumulados':
        return {
          labels: ['Las Mulas', 'Santa Digna', 'El Gobemador', 'Total'],
          datasets: [
            {
              label: '',
              backgroundColor: '#1f3864',
              borderColor: '#1f3864',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [33440, 27620, 33020, 94080],
            },
          ]
        };
        break;
      case 'mixPercentMg':
        return {
          type: 'line',
          labels: ['2015', '2016', '2017', 'Promedio'],
          datasets: [
            {
              label: 'Las Mulas',
              backgroundColor: '#1f3764',
              borderColor: '#1f3764',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [34, 36, 36, 36],
            }, {
              label: 'Santa Digna',
              backgroundColor: '#8da9db',
              borderColor: '#8da9db',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [29, 30, 29, 29],
            }, {
              label: 'El Gobemador',
              backgroundColor: '#a4a4a4',
              borderColor: '#a4a4a4',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [37, 35, 34, 35],
            }
          ]
        };
        break;
        break;
      case 'concentraciónDeMg':
      case 'recurrenciaDeClientes':
        return {
          labels: ['<10%', '10% -< 30%', '30% -< 50%', '50% -< 80%', '80% -< 100%'],
          datasets: [
            {
              label: '',
              backgroundColor: '#1f3764',
              borderColor: '#1f3764',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [5, 25, 30, 25, 15],
            }, {
              label: '',
              backgroundColor: '#8da9db',
              borderColor: '#8da9db',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [10, 35, 30, 25, 15],
            }
          ]
        };
        break;
      case 'recurrenciaDeEBITDA':
        return {
          labels: ['80 -< 100%', '80% -< 50%', '50% -< 30%', '30% -< 10%', '-< 10%'],
          datasets: [
            {
              label: '',
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
      
      
    }
  }
  renderTable() {
    switch(this.state.selectedSubHeader) {
      case 'márgenesInDoller':
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
                <td>13,4%</td>
                <td>6,7%</td>
                <td>10,0%</td>
              </tr>
              <tr>
                <th>Santa Digna</th>
                <td>7,6%</td>
                <td>7,3%</td>
                <td>7,4%</td>
              </tr>
              <tr>
                <th>El Gobemador</th>
                <td>2,0%</td>
                <td>1,6%</td>
                <td>1,8%</td>
              </tr>
              <TTotal>
                <th>Total</th>
                <td>7,5%</td>
                <td>5,1%</td>
                <td>6,3%</td>
              </TTotal>
            </tbody>
          </table>
        );
        break;
      case 'márgenesInPercent':
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
                <td>8,0%</td>
                <td>1,9%</td>
                <td>4,9%</td>
              </tr>
              <tr>
                <th>Santa Digna</th>
                <td>2,2%</td>
                <td>2,2%</td>
                <td>2,2%</td>
              </tr>
              <tr>
                <th>El Gobemador</th>
                <td>-3,3%</td>
                <td>-3,4%</td>
                <td>-3,4%</td>
              </tr>
              <TTotal>
                <th>Total</th>
                <td>2,7%</td>
                <td>0,1%</td>
                <td>1,1%</td>
              </TTotal>
            </tbody>
          </table>
        );
        break;
      case 'mgAcumulados':
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
                <th>% Del Total</th>
                <td>36%</td>
                <td>29%</td>
                <td>35%</td>
                <td>100%</td>
              </tr>
            </tbody>
          </table>
        );
        break;
      case 'mixPercentMg':
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
      case 'concentraciónDeMg':
        break;
      case 'recurrenciaDeClientes':
        break;
      case 'recurrenciaDeEBITDA':
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


            <FilterContainer>
              <table className="table">
                <tbody>
                  <tr>
                    <th>
                      Tipo de Mg.
                    </th>
                    <th>
                      Apertura de negocios
                    </th>
                    <th>
                      Flitro de negocios
                    </th>
                    <th>
                      Flitro de costos
                    </th>
                    <th>
                      Plazo
                    </th>
                    <th>
                      Opciones
                    </th>
                  </tr>
                  <tr>
                    <td className=''>
                      <div className='row'>
                        <div className='col-12 row'>
                          <div className="form-group col-12">
                            <select className="form-control">
                              <option>EBITDA</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </td>
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
                      <div className='row'>
                        <div className='col-10 row'>
                          <div className="form-group col-12">
                            <select className="form-control">
                              <option>Centro de costos</option>
                            </select>
                          </div>
                          <div className="form-group col-12">
                            <select className="form-control">
                              <option>Todos</option>
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
