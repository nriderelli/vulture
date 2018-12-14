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
import IconContainer from './IconContainer';
import Edit from 'images/icons/edit.png';

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
            <IconContainer>
              <img src={Edit} />
            </IconContainer>
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
                    <div className='row'>
                      <div className='col-6'>
                        {
                          results.income.ytd.value
                          && results.income.ytd.value.value
                        }
                      </div>
                      <div className='col-4'>
                        {
                          results.income.ytd.value
                          && results.income.ytd.value.percentage
                        }
                      </div>
                      <Icon
                        color={results.income.ytd.color}
                        className="fa fa-circle col-1"
                        aria-hidden="true"
                        size='8px'
                      >
                      </Icon>
                    </div>
                  </TextTD>
                  <TextTD>
                    <div className='row'>
                      <div className='col-6'>
                        {
                          results.income.forecast.value
                          && results.income.forecast.value.value
                        }
                      </div>
                      <div className='col-4'>
                        {
                          results.income.forecast.value
                          && results.income.forecast.value.percentage
                        }
                      </div>
                      <Icon
                        color={results.income.forecast.color}
                        className="fa fa-circle col-1"
                        aria-hidden="true"
                        size='8px'
                      >
                      </Icon>
                    </div>
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
                    <div className='row'>
                      <div className='col-6'>
                        {
                          results.contribution.ytd.value
                          && results.contribution.ytd.value.value
                        }
                      </div>
                      <div className='col-4'>
                        {
                          results.contribution.ytd.value
                          && results.contribution.ytd.value.percentage
                        }
                      </div>
                      <Icon
                        color={results.contribution.ytd.color}
                        className="fa fa-circle col-1"
                        aria-hidden="true"
                        size='8px'
                      >
                      </Icon>
                    </div>
                  </TextTD>
                  <TextTD>
                    <div className='row'>
                      <div className='col-6'>
                        {
                          results.contribution.forecast.value
                          && results.contribution.forecast.value.value
                        }
                      </div>
                      <div className='col-4'>
                        {
                          results.contribution.forecast.value
                          && results.contribution.forecast.value.percentage
                        }
                      </div>
                      <Icon
                        color={results.contribution.forecast.color}
                        className="fa fa-circle col-1"
                        aria-hidden="true"
                        size='8px'
                      >
                      </Icon>
                    </div>
                  </TextTD>
                  <TextTD>
                    <p
                      onClick={() => {
                        this.setState({
                          graphData: this.monthlyGraph(results.contribution.monthly) 
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
                          graphData: this.monthlyGraph(results.contribution.annual) 
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
                  <th scope="row">EBIDA</th>
                  <TextTD>
                    <div className='row'>
                      <div className='col-6'>
                        {
                          results.ebida.ytd.value
                          && results.ebida.ytd.value.value
                        }
                      </div>
                      <div className='col-4'>
                        {
                          results.ebida.ytd.value
                          && results.ebida.ytd.value.percentage
                        }
                      </div>
                      <Icon
                        color={results.ebida.ytd.color}
                        className="fa fa-circle col-1"
                        aria-hidden="true"
                        size='8px'
                      >
                      </Icon>
                    </div>
                  </TextTD>
                  <TextTD>
                    <div className='row'>
                      <div className='col-6'>
                        {
                          results.ebida.forecast.value
                          && results.ebida.forecast.value.value
                        }
                      </div>
                      <div className='col-4'>
                        {
                          results.ebida.forecast.value
                          && results.ebida.forecast.value.percentage
                        }
                      </div>
                      <Icon
                        color={results.ebida.forecast.color}
                        className="fa fa-circle col-1"
                        aria-hidden="true"
                        size='8px'
                      >
                      </Icon>
                    </div>
                  </TextTD>
                  <TextTD>
                    <p
                      onClick={() => {
                        this.setState({
                          graphData: this.monthlyGraph(results.ebida.monthly) 
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
                          graphData: this.monthlyGraph(results.ebida.annual) 
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
              </tbody>
            </table>
          </div>
        </CardContainer>

        <CardContainer className="card">
          <div className="card-body">
            <IconContainer>
              <img src={Edit} />
            </IconContainer>
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
                  <th scope="row">Boxes</th>
                  <TextTD>
                    <div className='row'>
                      <div className='col-6'>
                        {
                          results.boxes.ytd.value
                          && results.boxes.ytd.value.value
                        }
                      </div>
                      <div className='col-4'>
                        {
                          results.boxes.ytd.value
                          && results.boxes.ytd.value.percentage
                        }
                      </div>
                      <Icon
                        color={results.boxes.ytd.color}
                        className="fa fa-circle col-1"
                        aria-hidden="true"
                        size='8px'
                      >
                      </Icon>
                    </div>
                  </TextTD>
                  <TextTD>
                    <div className='row'>
                      <div className='col-6'>
                        {
                          results.boxes.forecast.value
                          && results.boxes.forecast.value.value
                        }
                      </div>
                      <div className='col-4'>
                        {
                          results.boxes.forecast.value
                          && results.boxes.forecast.value.percentage
                        }
                      </div>
                      <Icon
                        color={results.boxes.forecast.color}
                        className="fa fa-circle col-1"
                        aria-hidden="true"
                        size='8px'
                      >
                      </Icon>
                    </div>
                  </TextTD>
                  <TextTD>
                    <p
                      onClick={() => {
                        this.setState({
                          graphData: this.monthlyGraph(results.boxes.monthly) 
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
                          graphData: this.monthlyGraph(results.boxes.annual) 
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
              </tbody>
            </table>
          </div>
        </CardContainer>
      </div>
    );
  }
}

export default DashboardTable;
