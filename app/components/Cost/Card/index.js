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
import TD from './TD';
import Graph from '../../Graph';
import TR from './TR';
import TH from './TH';

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
              datasetKeyProvider: '0',
              label: 'Las Mulas',
              backgroundColor: '#1f3764',
              borderColor: '#1f3764',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [4000, 4200, 4400, 4200],
            }, {
              datasetKeyProvider: '1',
              label: 'Santa Digna',
              backgroundColor: '#8da9db',
              borderColor: '#8da9db',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [3800, 4000, 4200, 4000],
            }, {
              datasetKeyProvider: '2',
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
              datasetKeyProvider: '0',
              label: 'Las Mulas',
              backgroundColor: '#1f3764',
              borderColor: '#1f3764',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [35, 35, 35],
            }, {
              datasetKeyProvider: '1',
              label: 'Santa Digna',
              backgroundColor: '#8da9db',
              borderColor: '#8da9db',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [33, 33, 33],
            }, {
              datasetKeyProvider: '2',
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
              datasetKeyProvider: '0',
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
              datasetKeyProvider: '0',
              label: 'Gasto corriente',
              backgroundColor: '#1f3764',
              borderColor: '#1f3764',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [10000, 11000, 12100, 11033],
            }, {
              datasetKeyProvider: '1',
              label: 'Devengo',
              backgroundColor: '#8da9db',
              borderColor: '#8da9db',
              borderWidth: 2,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              data: [5000, 5250, 5513, 5254],
            }, {
              datasetKeyProvider: '2',
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
              <TR border='1px'>
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
              </TR>
            </THead>
            <tbody>
              <TR border='1px'>
                <th>Las Mulas</th>
                <TD border='1px'>5,0%</TD>
                <TD border='1px'>4,8%</TD>
                <TD border='1px'>4,9%</TD>
              </TR>
              <TR border='1px'>
                <th>Santa Digna</th>
                <TD border='1px'>5,3%</TD>
                <TD border='1px'>5,0%</TD>
                <TD border='1px'>5,1%</TD>
              </TR>
              <TR border='1px'>
                <th>El Gobemador</th>
                <TD border='1px'>5,6%</TD>
                <TD border='1px'>5,3%</TD>
                <TD border='1px'>5,4%</TD>
              </TR>
              <TTotal>
                <th>Total</th>
                <TD border='1px'>5,3%</TD>
                <TD border='1px'>5,0%</TD>
                <TD border='1px'>5,1%</TD>
              </TTotal>
            </tbody>
          </table>
        );
        break;
      case 'costosEnElTiempoPercent':
        return (
          <table className="table">
            <THead>
              <TR border='1px'>
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
              </TR>
            </THead>
            <tbody>
              <TR border='1px'>
                <th>Las Mulas</th>
                <TD border='1px'>5,0%</TD>
                <TD border='1px'>4,8%</TD>
                <TD border='1px'>4,9%</TD>
              </TR>
              <TR border='1px'>
                <th>Santa Digna</th>
                <TD border='1px'>5,3%</TD>
                <TD border='1px'>5,0%</TD>
                <TD border='1px'>5,1%</TD>
              </TR>
              <TR border='1px'>
                <th>El Gobemador</th>
                <TD border='1px'>5,6%</TD>
                <TD border='1px'>5,3%</TD>
                <TD border='1px'>5,4%</TD>
              </TR>
              <TTotal>
                <th>Total</th>
                <TD border='1px'>5,3%</TD>
                <TD border='1px'>5,0%</TD>
                <TD border='1px'>5,1%</TD>
              </TTotal>
            </tbody>
          </table>
        );
        break;
      case 'costosAcumulados':
        return (
          <table className="table">
            <THead>
              <TR border='1px'>
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
              </TR>
            </THead>
            <tbody>
              <TR border='1px'>
                <th>% Digna total</th>
                <TD border='1px'>35%</TD>
                <TD border='1px'>33%</TD>
                <TD border='1px'>32%</TD>
                <TD border='1px'>100%</TD>
              </TR>
            </tbody>
          </table>
        );
        break;
      case 'productividad':
        return (
          <table className="table">
            <THead>
              <TR border='1px'>
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
              </TR>
            </THead>
            <tbody>
              <TR border='1px'>
                <th>Las Mulas</th>
                <TD border='1px'>5,0%</TD>
                <TD border='1px'>4,8%</TD>
                <TD border='1px'>4,9%</TD>
              </TR>
              <TR border='1px'>
                <th>Santa Digna</th>
                <TD border='1px'>5,3%</TD>
                <TD border='1px'>5,0%</TD>
                <TD border='1px'>5,1%</TD>
              </TR>
              <TR border='1px'>
                <th>El Gobemador</th>
                <TD border='1px'>5,6%</TD>
                <TD border='1px'>5,3%</TD>
                <TD border='1px'>5,4%</TD>
              </TR>
              <TTotal>
                <th>Total</th>
                <TD border='1px'>5,3%</TD>
                <TD border='1px'>5,0%</TD>
                <TD border='1px'>5,1%</TD>
              </TTotal>
            </tbody>
          </table>
        );
        break;
      case 'activacionesYDevengo':
        return (
          <table className="table">
            <THead>
              <TR border='1px'>
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
              </TR>
            </THead>
            <tbody>
              <TR border='1px'>
                <th>Gasto corriente</th>
                <TD border='1px'>5,0%</TD>
                <TD border='1px'>4,8%</TD>
                <TD border='1px'>4,9%</TD>
              </TR>
              <TR border='1px'>
                <th>Activaciones</th>
                <TD border='1px'>5,3%</TD>
                <TD border='1px'>5,0%</TD>
                <TD border='1px'>5,1%</TD>
              </TR>
              <TR border='1px'>
                <th>Devengo</th>
                <TD border='1px'>5,6%</TD>
                <TD border='1px'>5,3%</TD>
                <TD border='1px'>5,4%</TD>
              </TR>
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
            <Header className=''>
              <div
                style={{
                  float: 'left'
                }}
              >
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
              <div
                style={{
                  float: 'right'
                }}
              >
                <img src={Edit} />
              </div>
            </Header>
            {this.renderSubHeader()}
          </div>
        </CardContainer>

        <CardContainer className="card" key={this.props.index} style={{padding: '15px'}}>
          <table style={{width: '100%'}}>
            <tbody>
              <TR border='1px'>
                <TD border='0px' width='250px'>
                  <div className='row'>
                    <strong className='col-12'>Apertura de negocio</strong>
                    <div className='col-11 row'>
                      <div className="form-group col-12">
                        <Select className="form-control">
                          <option>Marca</option>
                          <option>abc</option>
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
                  
                <TD border='1px' width='250px'>
                  <div className='row'>
                    <strong className='col-12'> Filtro de negocio</strong>
                    <div className='col-11 row'>
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

                <TD border='1px' width='250px'>
                  <div className='col-12 row'>
                    <strong className='col-12'>Plazo</strong>
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

                <TD border='1px' width='250px'>
                  <div className='col-12 row'>
                    <strong className='col-12'>Frecuencia</strong>
                    <div className="form-group col-12">
                      <Select className="form-control">
                        <option>Mensual</option>
                      </Select>
                    </div>
                  </div>
                </TD>

                 <TD border='1px' width='250px'>
                  <div className='col-12 row'>
                    <strong className='col-12'>Opciones</strong>
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
              </TR>
              <TR border='0px'>
                <TD border='0px' width='250px'>
                  <strong>Apertura de cost8</strong>
                  <div className='row'>
                    <div className='col-10 row'>
                      <div className="form-group col-12">
                        <Select className="form-control">
                          <option>Centro de costos</option>
                        </Select>
                      </div>
                      <div className="form-group col-12">
                        <Select className="form-control">
                          <option>N/a</option>
                        </Select>
                      </div>
                    </div>
                  </div>
                </TD>
                <TD border='1px' width='250px'>
                  <strong>Filtro de cost8</strong>
                  <div className='r8'>
                    <div className='col-10 row'>
                      <div className="form-group col-12">
                        <Select className="form-control">
                          <option>Cuenta contable</option>
                        </Select>
                      </div>
                      <div className="form-group col-12">
                        <Select className="form-control">
                          <option>Remuneracio</option>
                        </Select>
                      </div>
                    </div>
                  </div>
                </TD>
                <TD border='1px'>
                </TD>
                <TD border='0px'>
                </TD>
                <TD border='0px'>
                </TD>
              </TR>
            </tbody>
          </table>

        </CardContainer>

        <CardContainer className="card" key={this.props.index}>
          <div className="card-body">
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
