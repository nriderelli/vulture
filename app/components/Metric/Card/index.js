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
                edit
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
