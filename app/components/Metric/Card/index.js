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
      selectedHeader: 'métricasOp',
      selectedSubHeader: 'metricasInDoller',
    };
  }
  renderSubHeader() {
    switch(this.state.selectedHeader) {
      case 'métricasOp':
        return (
          <Container>
            <Button className="volume_kl"
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
          </Container>
        )
        break;
      case 'metricas':
        return (
          <Container>
            <Button className="volume_kl"
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
            <Button className="volume_kl"
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
            <Button className="volume_kl"
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
                <TD border='1px'>20,0%</TD>
                <TD border='1px'>8,3%</TD>
                <TD border='1px'>14,0%</TD>
              </TR>
              <TR border='1px'>
                <TH>Santa Digna</TH>
                <TD border='1px'>25,0%</TD>
                <TD border='1px'>-20,0%</TD>
                <TD border='1px'>0,0%</TD>
              </TR>
              <TR border='1px'>
                <TH>El Gobemador</TH>
                <TD border='1px'>14,3%</TD>
                <TD border='1px'>50,0%</TD>
                <TD border='1px'>30,9%</TD>
              </TR>
              <TTotal>
                <TH>Total</TH>
                <TD border='1px'>19,4%</TD>
                <TD border='1px'>14,0%</TD>
                <TD border='1px'>16,7%</TD>
              </TTotal>
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
      case 'metricasDeIngresos':
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
      case 'metricasDeCost':
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
      case 'metricasDeMargenes':
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
      
      
    }
  }
  render() {
    return (
      <div>
        <CardContainer className="card" key={this.props.index}>
          <div className="card-body shdow_box">
            <Header className='point_not'>
              <div
                className="poin_nt_child"
                >
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
                    className="ingross"
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
                    className="ingross"
                  >
                    Métricas
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


        <CardContainer className="card x-flow shdow_box add_img_re"  key={this.props.index} style={{padding: '15px'}}>
          <table style={{width: '100%'}}>
            <tbody className="aptuera">
              <TR border='0px'>
                <TD border='0px' width='250px'>
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
                <TD border='1px' width='250px'>
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
                  
                <TD border='1px' width='250px'>
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

                <TD border='1px' width='250px'>
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

                <TD border='1px' width='250px'>
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

                <TD border='1px' width='250px'>
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

            <Container  className="x-flow new_down_table">
              {this.renderTable()}
            </Container>
            
          </div>
        </CardContainer>
      </div>
    );
  }
}

export default Card;
