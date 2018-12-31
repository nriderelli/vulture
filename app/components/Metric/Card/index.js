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
import TD from './TD';

/* eslint-disable react/prefer-stateless-function */
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHeader: 'métricasOp',
      selectedSubHeader: 'metricasInDoller',
    };
  }
  renderSubHeader() {
    switch(this.state.selectedHeader) {
      case 'métricasOp':
        return (
          <Container>
            <Button
              background={ this.state.selectedSubHeader === 'metricasInDoller'? "#000" : "#e1e1e1"}
              color={ this.state.selectedSubHeader === 'metricasInDoller'? '#fff' : '#000'}
              onClick={()=>{
                this.setState({
                  selectedSubHeader: 'metricasInDoller'
                })
              }}
            >
              Métricas ($)
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
          </Container>
        )
        break;
      case 'metricas':
        return (
          <Container>
            <Button
              background={ this.state.selectedSubHeader === 'metricasDeIngresos'? "#000" : "#e1e1e1"}
              color={ this.state.selectedSubHeader === 'metricasDeIngresos'? '#fff' : '#000'}
              onClick={()=>{
                this.setState({
                  selectedSubHeader: 'metricasDeIngresos'
                })
              }}
            >
              Métricas de ingresos
            </Button>
            <Button
              background={ this.state.selectedSubHeader === 'metricasDeCost'? "#000" : "#e1e1e1"}
              color={ this.state.selectedSubHeader === 'metricasDeCost'? '#fff' : '#000'}
              onClick={()=>{
                this.setState({
                  selectedSubHeader: 'metricasDeCost'
                })
              }}
            >
              Métricas de costos
            </Button>
            <Button
              background={ this.state.selectedSubHeader === 'metricasDeMargenes'? "#000" : "#e1e1e1"}
              color={ this.state.selectedSubHeader === 'metricasDeMargenes'? '#fff' : '#000'}
              onClick={()=>{
                this.setState({
                  selectedSubHeader: 'metricasDeMargenes'
                })
              }}
            >
              Métricas de márgenes
            </Button>
          </Container>
        )
        break;
    }
  }

  renderGraph() {
    switch(this.state.selectedSubHeader) {
      case 'metricasInDoller':
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
              data: [10, 12, 13, 12],
            }, {
              label: 'Santa Digna',
              backgroundColor: '#8da9db',
              borderColor: '#8da9db',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [12, 15, 12, 13],
            }, {
              label: 'El Gobemador',
              backgroundColor: '#a4a4a4',
              borderColor: '#a4a4a4',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [14, 16, 24, 18],
            }
          ]
        };
        break;
      case 'mixPercentMg':
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
      case 'metricasDeIngresos':
        break;
      case 'metricasDeCost':
        break;
      case 'metricasDeMargenes':
        break;
    }
  }
  renderTable() {
    switch(this.state.selectedSubHeader) {
      case 'metricasInDoller':
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
                <td>20,0%</td>
                <td>8,3%</td>
                <td>14,0%</td>
              </tr>
              <tr>
                <th>Santa Digna</th>
                <td>25,0%</td>
                <td>-20,0%</td>
                <td>0,0%</td>
              </tr>
              <tr>
                <th>El Gobemador</th>
                <td>14,3%</td>
                <td>50,0%</td>
                <td>30,9%</td>
              </tr>
              <TTotal>
                <th>Total</th>
                <td>19,4%</td>
                <td>14,0%</td>
                <td>16,7%</td>
              </TTotal>
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
      case 'metricasDeIngresos':
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
      case 'metricasDeCost':
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
      case 'metricasDeMargenes':
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
                  color={ this.state.selectedHeader === 'métricasOp' ? '#fff' : '#000' }
                  background={ this.state.selectedHeader === 'métricasOp' ? '#006e82' : '#fff' }
                  onClick={() => {
                    this.setState({
                      selectedHeader: 'métricasOp',
                      selectedSubHeader: 'metricasInDoller'
                    })
                  }}
                >
                  <P
                    borderLeft='0px'
                  >
                    Métricas op
                  </P>
                </DIV>
                <DIV
                  color={ this.state.selectedHeader === 'metricas' ? '#fff' : '#000' }
                  background={ this.state.selectedHeader === 'metricas' ? '#006e82' : '#fff' }
                  onClick={() => {
                    this.setState({
                      selectedHeader: 'metricas',
                      selectedSubHeader: 'métricasDeIngresos'
                    })
                  }}
                >
                  <P
                    borderLeft={ this.state.selectedHeader === 'total' ? '0px' : '1px' }
                  >
                    Métricas
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
                    <TD width='250px'>
                      <div className='row'>
                        <strong className='col-8'>Metrica</strong>
                        <div className='col-12 row'>
                          <div className="form-group col-12">
                            <Select className="form-control">
                              <option>Headcount</option>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </TD>
                    <TD width='250px'>
                      <div className='row'>
                        <strong className='col-8'>Apertura de negocios</strong>
                        <div className='col-8 row'>
                          <div className="form-group col-12">
                            <Select className="form-control">
                              <option>Marca</option>
                            </Select>
                          </div>
                          <div className="form-group col-12">
                            <Select className="form-control">
                              <option>Sel. multiple...</option>
                            </Select>
                          </div>
                        </div>
                        <div className='col-1'>
                          <img src={Add} />
                        </div>
                      </div>
                    </TD>
                      
                    <TD width='250px'>
                      <div className='row'>
                        <strong className='col-8'>Flitro de negocios</strong>
                        <div className='col-8 row'>
                          <div className="form-group col-12">
                            <Select className="form-control">
                              <option>Pais</option>
                            </Select>
                          </div>
                          <div className="form-group col-12">
                            <Select className="form-control">
                              <option>Chile, Peru</option>
                            </Select>
                          </div>
                        </div>
                        <div className='col-1'>
                          <img src={Add} />
                        </div>
                      </div>
                    </TD>

                    <TD width='250px'>
                      <div className='row'>
                        <strong className='col-8'>Flitro de costos</strong>
                        <div className='col-8 row'>
                          <div className="form-group col-12">
                            <Select className="form-control">
                              <option>Centro de costos</option>
                            </Select>
                          </div>
                          <div className="form-group col-12">
                            <Select className="form-control">
                              <option>Todos</option>
                            </Select>
                          </div>
                        </div>
                        <div className='col-1'>
                          <img src={Add} />
                        </div>
                      </div>
                    </TD>

                    <TD width='250px'>
                      <div className='col-12 row'>
                        <strong className='col-8'>Plazo</strong>
                        <div className="form-group col-12">
                          <Select className="form-control">
                            <option>Fencha inicio</option>
                          </Select>
                        </div>
                        <div className="form-group col-12">
                          <Select className="form-control">
                            <option>Fencha termino</option>
                          </Select>
                        </div>
                      </div>
                    </TD>

                    <TD width='250px'>
                      <strong className='col-8'>Opciones</strong>
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
                    </TD>
                  </tr>

                  


                </tbody>
              </table>
            </FilterContainer>



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
