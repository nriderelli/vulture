// import npm packages
import React from 'react';

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

  renderGraph() {
    switch(this.state.selectedSubHeader) {
      case 'costosEnElTiempo':
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
              data: [4000, 4200, 4400, 4200],
            }, {
              label: 'Santa Digna',
              backgroundColor: '#8da9db',
              borderColor: '#8da9db',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [3800, 4000, 4200, 4000],
            }, {
              label: 'El Gobemador',
              backgroundColor: '#a4a4a4',
              borderColor: '#a4a4a4',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [3600, 3800, 4000, 3800],
            }
          ]
        };
        break;
      case 'costosEnElTiempoPercent':
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
              data: [35, 35, 35],
            }, {
              label: 'Santa Digna',
              backgroundColor: '#8da9db',
              borderColor: '#8da9db',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [33, 33, 33],
            }, {
              label: 'Deni Amor',
              backgroundColor: '#a4a4a4',
              borderColor: '#a4a4a4',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [32, 32, 32],
            }
          ]
        };
        break;
      case 'costosAcumulados':
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
              data: [63000, 60000, 57000, 180000],
            },
          ]
        };
        break;
      case 'productividad':
        break;
      case 'activacionesYDevengo':
        return {
          labels: ['2015', '2016', '2017', 'Promedio'],
          datasets: [
            {
              label: 'Gasto corriente',
              backgroundColor: '#1f3764',
              borderColor: '#1f3764',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [10000, 11000, 12100, 11033],
            }, {
              label: 'Devengo',
              backgroundColor: '#8da9db',
              borderColor: '#8da9db',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [5000, 5250, 5513, 5254],
            }, {
              label: 'Activaciones',
              backgroundColor: '#a4a4a4',
              borderColor: '#a4a4a4',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [3000, 3600, 4320, 3640],
            }
          ]
        };
        break;
    }
  }
  renderTable() {
    switch(this.state.selectedSubHeader) {
      case 'costosEnElTiempo':
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
      case 'costosEnElTiempoPercent':
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
      case 'costosAcumulados':
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
                <th>% Digna total</th>
                <td>35%</td>
                <td>33%</td>
                <td>32%</td>
                <td>100%</td>
              </tr>
            </tbody>
          </table>
        );
        break;
      case 'productividad':
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
      case 'activacionesYDevengo':
        return (
          <table className="table">
            <THead>
              <tr>
                <th>
                  Gasto
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
                <th>Gasto corriente</th>
                <td>5,0%</td>
                <td>4,8%</td>
                <td>4,9%</td>
              </tr>
              <tr>
                <th>Activaciones</th>
                <td>5,3%</td>
                <td>5,0%</td>
                <td>5,1%</td>
              </tr>
              <tr>
                <th>Devengo</th>
                <td>5,6%</td>
                <td>5,3%</td>
                <td>5,4%</td>
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
            {this.renderSubHeader()}


            <FilterContainer>
              <table className="table">
                <tbody>
                  <tr>
                    <th>
                      Apertura de negocio
                    </th>
                    <th>
                      Filtro de negocio
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
                  <tr>
                    <th>
                      Apertura de costos
                    </th>
                    <th>
                      Filtro de costos
                    </th>
                    <th>
                      
                    </th>
                    <th>
                      
                    </th>
                    <th>
                      
                    </th>
                  </tr>
                  <tr>
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
                              <option>N/a</option>
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
                              <option>Cuenta contable</option>
                            </select>
                          </div>
                          <div className="form-group col-12">
                            <select className="form-control">
                              <option>Remuneracio</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td>
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
