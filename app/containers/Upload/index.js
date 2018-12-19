
 /* Dashboard
 *
 * This is the first thing users see of our App, at the '/' route
 */

// imports npm packages
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

// import local files
import url from 'api/urls.json';
import Loading from '../Loader';
import CardContainer from './CardContainer';
// import saga from './saga';
// import { DASHBOARD } from './constants';
// import { incomeLoaded, dashboardIncome } from './actions';
// import { makeIncome } from './selectors';
// import injectReducer from 'utils/injectReducer';
// import injectSaga from 'utils/injectSaga';
// import reducer from './reducer';

/* eslint-disable react/prefer-stateless-function */
export default class Upload extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      error: null,
      incomeData: [],
      accountGroupData: [],
      incomeOutcomeData: [],
      indirectCostData: [],
      directCostData: [],
      metricsData: [],
      mainMetricsData: [],
    };
    
  }
  componentWillMount() {
    
   
  }
  uploadData(type) {
    let requestURL = '';
    switch(type) {
      case 'incomeData':
        requestURL = `${url.mainUrl}${url.postIncome}`
        break;
      case 'accountGroupData':
        requestURL = `${url.mainUrl}${url.postAccountGroup}`
        break;
      case 'incomeOutcomeData':
        requestURL = `${url.mainUrl}${url.postIncomeOutcome}`
        break;
      case 'indirectCostData':
        requestURL = `${url.mainUrl}${url.postIndirectCost}`
        break;
      case 'directCostData':
        requestURL = `${url.mainUrl}${url.postDirectCost}`
        break;
      case 'metricsData':
        requestURL = `${url.mainUrl}${url.postMetrics}`
        break;
      case 'mainMetricsData':
        requestURL = `${url.mainUrl}${url.postMainMetrics}`
        break;
      default:
        break;
    }
    console.log(this.state[type].length,':: requestURL ',requestURL)
    this.setState({
      isLoading: true,
    })
    fetch(
        requestURL,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state[type])
        }
    )
    .then(response => response.json())
    .then(responseData => {
      console.log(':: responseData ',responseData)
      this.setState({
        isLoading: false,
      })
    })
    .catch(err => {
      this.setState({
        error: responseData.error || 'Data fetching failed'
      });
    });
  }
  getJsonData(type, event){
    event.preventDefault();
    let regex = /[^.]+$/;
    console.log(':: type ',type)
    let selectedFile = event.target.files.length != 0?event.target.files[0]:[];
    let reader = new FileReader();
    if(selectedFile.length!=0){
      if(regex.exec(selectedFile.name)[0] == "json"){
        reader.onload = (event) => {
          try {
            if(JSON.parse(event.target.result)){
              switch(type) {
                case 'incomeData':
                  this.setState({
                    incomeData: JSON.parse(event.target.result)
                  });
                  break;
                case 'accountGroupData':
                  this.setState({
                    accountGroupData: JSON.parse(event.target.result)
                  });
                  break;
                case 'incomeOutcomeData':
                  this.setState({
                    incomeOutcomeData: JSON.parse(event.target.result)
                  });
                  break;
                case 'indirectCostData':
                  this.setState({
                    indirectCostData: JSON.parse(event.target.result)
                  });
                  break;
                case 'directCostData':
                  this.setState({
                    directCostData: JSON.parse(event.target.result)
                  });
                  break;
                case 'metricsData':
                  this.setState({
                    metricsData: JSON.parse(event.target.result)
                  });
                  break;
                case 'mainMetricsData':
                  this.setState({
                    mainMetricsData: JSON.parse(event.target.result)
                  });
                  break;
                default:
                  break;
              }
              this.setState({
                json: JSON.parse(event.target.result)
              });
            }
          } catch (e) {
            return false;
          }
        };
        reader.readAsText(selectedFile);
      }
    }
  }
  render() {
    return (
      <div>
      {
        this.state.isLoading ?
          <Loading />
        :
          ''
      }
        <Helmet>
          <title>Upload</title>
          <meta name="Upload" content="Upload of the application" />
        </Helmet>
        <div className="row">
          <CardContainer className='col-6'>
            <div className="card">
              <h5 className="card-header">Income</h5>
              <div className="card-body">
                <h5 className="card-title">Upload Income Json</h5>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  this.uploadData('incomeData')
                }}>
                  <div className="card-text">
                    <div className="form-group">
                      <input
                        type="file"
                        className="form-control-file"
                        onChange={this.getJsonData.bind(this, 'incomeData')}
                      />
                    </div>
                  </div>
                  <button className="btn btn-primary">Upload</button>
                </form>
              </div>
            </div>
          </CardContainer>

          <CardContainer className='col-6'>
            <div className="card">
              <h5 className="card-header">Accounts Group</h5>
              <div className="card-body">
                <h5 className="card-title">Upload Accounts Group Json</h5>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  this.uploadData('accountGroupData')
                }}>
                  <div className="card-text">
                    <div className="form-group">
                      <input
                        type="file"
                        className="form-control-file"
                        onChange={this.getJsonData.bind(this, 'accountGroupData')}
                      />
                    </div>
                  </div>
                  <button className="btn btn-primary">Upload</button>
                </form>
              </div>
            </div>
          </CardContainer>

          <CardContainer className='col-6'>
            <div className="card">
              <h5 className="card-header">Income Outcome</h5>
              <div className="card-body">
                <h5 className="card-title">Upload Income Outcome Json</h5>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  this.uploadData('incomeOutcomeData')
                }}>
                  <div className="card-text">
                    <div className="form-group">
                      <input
                        type="file"
                        className="form-control-file"
                        onChange={this.getJsonData.bind(this, 'incomeOutcomeData')}
                      />
                    </div>
                  </div>
                  <button className="btn btn-primary">Upload</button>
                </form>
              </div>
            </div>
          </CardContainer>

          <CardContainer className='col-6'>
            <div className="card">
              <h5 className="card-header">Indirect Cost</h5>
              <div className="card-body">
                <h5 className="card-title">Upload Indirect Cost Json</h5>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  this.uploadData('indirectCostData')
                }}>
                  <div className="card-text">
                    <div className="form-group">
                      <input
                        type="file"
                        className="form-control-file"
                        onChange={this.getJsonData.bind(this, 'indirectCostData')}
                      />
                    </div>
                  </div>
                  <button className="btn btn-primary">Upload</button>
                </form>
              </div>
            </div>
          </CardContainer>

          <CardContainer className='col-6'>
            <div className="card">
              <h5 className="card-header">Direct Cost</h5>
              <div className="card-body">
                <h5 className="card-title">Upload Direct Cost Json</h5>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  this.uploadData('directCostData')
                }}>
                  <div className="card-text">
                    <div className="form-group">
                      <input
                        type="file"
                        className="form-control-file"
                        onChange={this.getJsonData.bind(this, 'directCostData')}
                      />
                    </div>
                  </div>
                  <button className="btn btn-primary">Upload</button>
                </form>
              </div>
            </div>
          </CardContainer>

          <CardContainer className='col-6'>
            <div className="card">
              <h5 className="card-header">Metrics</h5>
              <div className="card-body">
                <h5 className="card-title">Upload Metrics Json</h5>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  this.uploadData('metricsData')
                }}>
                  <div className="card-text">
                    <div className="form-group">
                      <input
                        type="file"
                        className="form-control-file"
                        onChange={this.getJsonData.bind(this, 'metricsData')}
                      />
                    </div>
                  </div>
                  <button className="btn btn-primary">Upload</button>
                </form>
              </div>
            </div>
          </CardContainer>

          <CardContainer className='col-6'>
            <div className="card">
              <h5 className="card-header">Main Metrics</h5>
              <div className="card-body">
                <h5 className="card-title">Upload Main Metrics Json</h5>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  this.uploadData('mainMetricsData')
                }}>
                  <div className="card-text">
                    <div className="form-group">
                      <input
                        type="file"
                        className="form-control-file"
                        onChange={this.getJsonData.bind(this, 'mainMetricsData')}
                      />
                    </div>
                  </div>
                  <button className="btn btn-primary">Upload</button>
                </form>
              </div>
            </div>
          </CardContainer>
        </div>
      </div>
    );
  }
}

/*export function mapDispatchToProps(dispatch) {
  console.log(':: mapDispatchToProps')
  return {
    getDashboardIncome: () => dispatch(dashboardIncome())
  };
}

const mapStateToProps = createStructuredSelector({
  income: makeIncome()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: DASHBOARD, reducer });
const withSaga = injectSaga({ key: DASHBOARD, saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Upload); */