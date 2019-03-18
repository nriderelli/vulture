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
import Graph from '../../Graph';
import TR from './TR';
import TH from './TH';

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
            <Button className="volume_kl"
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
            <Button className="volume_kl"
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
            <Button className="volume_kl"
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
            <Button className="volume_kl"
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
            <Button className="volume_kl"
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
            <Button className="volume_kl"
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
            <Button className="volume_kl"
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
              <TR border='1px'>
                <TH>
                  Marcas
                </TH>
                <TH>
                  Var. % 2015 - 2016
                </TH>
                <TH>
                  Var. % 2016 - 2017
                </TH>
                <TH>
                  CAGR 2015 - 2017
                </TH>
              </TR>
            </THead>
            <tbody>
              <TR border='1px'>
                <TH>Las Mulas</TH>
                <TD border='1px'>13,4%</TD>
                <TD border='1px'>6,7%</TD>
                <TD border='1px'>10,0%</TD>
              </TR>
              <TR border='1px'>
                <TH>Santa Digna</TH>
                <TD border='1px'>7,6%</TD>
                <TD border='1px'>7,3%</TD>
                <TD border='1px'>7,4%</TD>
              </TR>
              <TR border='1px'>
                <TH>El Gobemador</TH>
                <TD border='1px'>2,0%</TD>
                <TD border='1px'>1,6%</TD>
                <TD border='1px'>1,8%</TD>
              </TR>
              <TTotal>
                <TH>Total</TH>
                <TD border='1px'>7,5%</TD>
                <TD border='1px'>5,1%</TD>
                <TD border='1px'>6,3%</TD>
              </TTotal>
            </tbody>
          </table>
        );
        break;
      case 'márgenesInPercent':
        return (
          <table className="table">
            <THead>
              <TR border='1px'>
                <TH>
                  Marcas
                </TH>
                <TH>
                  Var. % 2015 - 2016
                </TH>
                <TH>
                  Var. % 2016 - 2017
                </TH>
                <TH>
                  CAGR 2015 - 2017
                </TH>
              </TR>
            </THead>
            <tbody>
              <TR border='1px'>
                <TH>Las Mulas</TH>
                <TD border='1px'>8,0%</TD>
                <TD border='1px'>1,9%</TD>
                <TD border='1px'>4,9%</TD>
              </TR>
              <TR border='1px'>
                <TH>Santa Digna</TH>
                <TD border='1px'>2,2%</TD>
                <TD border='1px'>2,2%</TD>
                <TD border='1px'>2,2%</TD>
              </TR>
              <TR border='1px'>
                <TH>El Gobemador</TH>
                <TD border='1px'>-3,3%</TD>
                <TD border='1px'>-3,4%</TD>
                <TD border='1px'>-3,4%</TD>
              </TR>
              <TTotal>
                <TH>Total</TH>
                <TD border='1px'>2,7%</TD>
                <TD border='1px'>0,1%</TD>
                <TD border='1px'>1,1%</TD>
              </TTotal>
            </tbody>
          </table>
        );
        break;
      case 'mgAcumulados':
        return (
          <table className="table">
            <THead>
              <TR border='1px'>
                <TH>
                </TH>
                <TH>
                  Las Mulas
                </TH>
                <TH>
                  Santa Digna
                </TH>
                <TH>
                  El Gobemador
                </TH>
                <TH>
                  Total
                </TH>
              </TR>
            </THead>
            <tbody>
              <TR border='1px'>
                <TH>% Del Total</TH>
                <TD border='1px'>36%</TD>
                <TD border='1px'>29%</TD>
                <TD border='1px'>35%</TD>
                <TD border='1px'>100%</TD>
              </TR>
            </tbody>
          </table>
        );
        break;
      case 'mixPercentMg':
        return (
          <table className="table">
            <THead>
              <TR border='1px'>
                <TH>
                  Marcas
                </TH>
                <TH>
                  Var. % 2015 - 2016
                </TH>
                <TH>
                  Var. % 2016 - 2017
                </TH>
                <TH>
                  CAGR 2015 - 2017
                </TH>
              </TR>
            </THead>
            <tbody>
              <TR border='1px'>
                <TH>Las Mulas</TH>
                <TD border='1px'>5,0%</TD>
                <TD border='1px'>4,8%</TD>
                <TD border='1px'>4,9%</TD>
              </TR>
              <TR border='1px'>
                <TH>Santa Digna</TH>
                <TD border='1px'>5,3%</TD>
                <TD border='1px'>5,0%</TD>
                <TD border='1px'>5,1%</TD>
              </TR>
              <TR border='1px'>
                <TH>El Gobemador</TH>
                <TD border='1px'>5,6%</TD>
                <TD border='1px'>5,3%</TD>
                <TD border='1px'>5,4%</TD>
              </TR>
              <TTotal>
                <TH>Total</TH>
                <TD border='1px'>5,3%</TD>
                <TD border='1px'>5,0%</TD>
                <TD border='1px'>5,1%</TD>
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
        <CardContainer className="card mar-top-0" key={this.props.index}>
          <div className="card-body shdow_box">
            <Header className='point_not'>
              <div className="poin_nt_child"
              >
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
                    className="ingross"
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
                    className="ingross"
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
                  className="ingross"
                    borderLeft={ this.state.selectedHeader === 'total' ? '0px' : '1px' }
                  >
                    Comportamiento
                  </P>
                </DIV>
              </div>
              <div
                className="pencil_bk"
               >
                <img src={Edit} />
              </div>
            </Header>
            {this.renderSubHeader()}
          </div>
        </CardContainer>

        <CardContainer className="card x-flow shdow_box" key={this.props.index} style={{padding: '15px'}}>
          <table style={{width: '100%'}}>
            <tbody className="aptuera">
              <TR border='0px'>
                <TD border='0px' width='250px' >
                  <div className='row'>
                    <strong className='col-12'> Tipo de Mg.</strong>
                    <div className='col-12 row'>
                      <div className="form-group col-12">
                        <Select className="form-control">
                          <option>EBITDA</option>
                        </Select>
                      </div>
                    </div>
                  </div>
                </TD>
                <TD border='1px' width='250px' >
                  <div className='row'>
                    <strong className='col-12'>Apertura de negocios</strong>
                    <div className='col-11 row'>
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
                  
                <TD border='1px' width='250px' >
                  <div className='row'>
                    <strong className='col-12'>Flitro de costos</strong>
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

                <TD border='1px' width='250px' >
                  <div className='row'>
                    <strong className='col-12'>Plazo</strong>
                    <div className='col-11 row'>
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

                <TD border='1px' width='250px' >
                  <strong className='col-12'>Opciones</strong>
                  <div className='col-12 row'>
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

                <TD border='1px' width='250px' >
                  <strong className='wid-100pr'>Opciones</strong>
                  <div className='wid-100pr flx_opin'>
                    <OpcionesContainer className="wid-50pr">
                      Exportar PPT
                    </OpcionesContainer>

                    <OpcionesContainer className="wid-50pr">
                      Guardar como fav.
                    </OpcionesContainer>
                  </div>

                  <div className='wid-100pr flx_opin'>
                    <OpcionesContainer className="wid-50pr">
                      Exportar XLS
                    </OpcionesContainer>

                    <OpcionesContainer className="wid-50pr">
                      Agregar a mi DB
                    </OpcionesContainer>
                  </div>
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

            <Container className="x-flow new_down_table">
              {this.renderTable()}
            </Container>
            
          </div>
        </CardContainer>
      </div>
    );
  }
}

export default Card;
