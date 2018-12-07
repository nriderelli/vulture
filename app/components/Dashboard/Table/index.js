// import npm packages
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Line } from 'react-chartjs-2';

// import local files
import Button from '../../Button';
import CardContainer from './CardContainer';
import TextHead from './TextHead';
import TextTD from './TextTD';
import Icon from './Icon';
/* eslint-disable react/prefer-stateless-function */
class DashboardTable extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      graphData: null,
    };
  }
  monthlyGraph(graphData) {
    return {
      labels: graphData.data,
      datasets: [
        {
          label: 'Last 6 Months',
          backgroundColor: 'transparent', // convertHex('#63c2de', 16),
          borderColor: '#63c2de',
          pointHoverBackgroundColor: '#fff',
          borderWidth: 2,
          data: graphData.value,
        },
      ],
    };
  }

  renderGraph() {
    return(
       <div
        className="modal fade in show"
        role="dialog"
        aria-labelledby="add/edit products"
        aria-hidden="true"
        style={{
          'background': '#000000b3',
          display: 'block'
        }}
      >
        <div className="modal-dialog modal-md" role="document">
          <div className="modal-content">
            <div className="modal-body">
                <button
                  type="button"
                  className="close pull-right"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    this.setState({
                      graphData: null
                    })
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <Line
                  data={this.state.graphData}
                  height={300}
                />
            </div>
          </div>
        </div>
      </div>
    )
  }
  

  render() {
    const { results } = this.props;
    return (
      <div>
        {
          this.state.graphData ?
              this.renderGraph()
          :
            ''
        }
        <CardContainer className="card">
          <div className="card-body">
            {
              this.props.index === 0 ?
                  <h5 className="card-title">Values in M CLP</h5>
              :
                ''
            }
            <Icon
              color="#006e82"
              className="fa fa-pencil-square-o"
              aria-hidden="true"
            />
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">
                    <Button left="0" background="#006e82">
                      RESULTS
                    </Button>
                  </th>
                  <th scope="col">
                    <TextHead>YTD</TextHead>
                    <TextHead>Ago-2018</TextHead>
                  </th>
                  <th scope="col">
                    <TextHead>FORECAST</TextHead>
                    <TextHead>2018</TextHead>
                  </th>
                  <th scope="col">
                    <TextHead>MONTHLY</TextHead>
                    <TextHead>TREND</TextHead>
                  </th>
                  <th scope="col">
                    <TextHead>ANNUAL</TextHead>
                    <TextHead>TREND</TextHead>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Income</th>
                  <TextTD>
                    {results.income.ytd.value}
                    &nbsp;&nbsp;
                    <Icon
                      color={results.income.ytd.color}
                      className="fa fa-circle col-1"
                      aria-hidden="true"
                      size='8px'
                    >
                    </Icon>
                  </TextTD>
                  <TextTD>
                    {results.income.forecast.value}
                    &nbsp;&nbsp;
                    <Icon
                      color={results.income.forecast.color}
                      className="fa fa-circle col-1"
                      aria-hidden="true"
                      size='8px'
                    >
                    </Icon>
                  </TextTD>
                  <TextTD>
                    <p
                      onClick={() => {
                        this.setState({
                          graphData: this.monthlyGraph(results.income.monthly) 
                        })
                      }}
                      style={{
                        cursor: 'pointer'
                      }}
                    >
                      Check Graph
                    </p>
                  </TextTD>
                  <TextTD>
                    <p
                      onClick={() => {
                        this.setState({
                          graphData: this.monthlyGraph(results.income.annual) 
                        })
                      }}
                      style={{
                        cursor: 'pointer'
                      }}
                    >
                      Check Graph
                    </p>
                  </TextTD>

                </tr>

                <tr>
                  <th scope="row">Mg. Contribution</th>
                  <TextTD>
                    
                    &nbsp;&nbsp;
                    <Icon
                      
                      className="fa fa-circle col-1"
                      aria-hidden="true"
                      size='8px'
                    >
                    </Icon>
                  </TextTD>
                  <TextTD>
                    
                    &nbsp;&nbsp;
                    <Icon
                      
                      className="fa fa-circle col-1"
                      aria-hidden="true"
                      size='8px'
                    >
                    </Icon>
                  </TextTD>
                  <TextTD>
                    
                  </TextTD>
                  <TextTD>
                    
                  </TextTD>

                </tr>

                <tr>
                  <th scope="row">EBIDA</th>
                  <TextTD>
                    
                    &nbsp;&nbsp;
                    <Icon
                    
                      className="fa fa-circle col-1"
                      aria-hidden="true"
                      size='8px'
                    >
                    </Icon>
                  </TextTD>
                  <TextTD>
                    
                    &nbsp;&nbsp;
                    <Icon
                    
                      className="fa fa-circle col-1"
                      aria-hidden="true"
                      size='8px'
                    >
                    </Icon>
                  </TextTD>
                  <TextTD>
                    
                  </TextTD>
                  <TextTD>
                    
                  </TextTD>

                </tr>
              </tbody>
            </table>
          </div>
        </CardContainer>

        <CardContainer className="card">
          <div className="card-body">
            <Icon
              color="#006e82"
              className="fa fa-pencil-square-o"
              aria-hidden="true"
            />
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">
                    <Button left="0" background="#006e82">
                      METRICS
                    </Button>
                  </th>
                  <th scope="col">
                    <TextHead>YTD</TextHead>
                    <TextHead>Ago-2018</TextHead>
                  </th>
                  <th scope="col">
                    <TextHead>FORECAST</TextHead>
                    <TextHead>2018</TextHead>
                  </th>
                  <th scope="col">
                    <TextHead>MONTHLY</TextHead>
                    <TextHead>TREND</TextHead>
                  </th>
                  <th scope="col">
                    <TextHead>ANNUAL</TextHead>
                    <TextHead>TREND</TextHead>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">#Contracts</th>
                  <TextTD>
               
                    &nbsp;&nbsp;
                    <Icon
               
                      className="fa fa-circle col-1"
                      aria-hidden="true"
                      size='8px'
                    >
                    </Icon>
                  </TextTD>
                  <TextTD>
               
                    &nbsp;&nbsp;
                    <Icon
               
                      className="fa fa-circle col-1"
                      aria-hidden="true"
                      size='8px'
                    >
                    </Icon>
                  </TextTD>
                  <TextTD>
               
                  </TextTD>
                  <TextTD>
               
                  </TextTD>

                </tr>

                <tr>
                  <th scope="row">Metric 1</th>
                  <TextTD>
               
                    &nbsp;&nbsp;
                    <Icon
               
                      className="fa fa-circle col-1"
                      aria-hidden="true"
                      size='8px'
                    >
                    </Icon>
                  </TextTD>
                  <TextTD>
               
                    &nbsp;&nbsp;
                    <Icon
               
                      className="fa fa-circle col-1"
                      aria-hidden="true"
                      size='8px'
                    >
                    </Icon>
                  </TextTD>
                  <TextTD>
               
                  </TextTD>
                  <TextTD>
               
                  </TextTD>

                </tr>

                <tr>
                  <th scope="row">Metric 2</th>
                  <TextTD>
               
                    &nbsp;&nbsp;
                    <Icon
               
                      className="fa fa-circle col-1"
                      aria-hidden="true"
                      size='8px'
                    >
                    </Icon>
                  </TextTD>
                  <TextTD>
               
                    &nbsp;&nbsp;
                    <Icon
               
                      className="fa fa-circle col-1"
                      aria-hidden="true"
                      size='8px'
                    >
                    </Icon>
                  </TextTD>
                  <TextTD>
               
                  </TextTD>
                  <TextTD>
                    
                  </TextTD>

                </tr>
              </tbody>
            </table>
          </div>
        </CardContainer>
      </div>
    );
  }
}

export default DashboardTable;
