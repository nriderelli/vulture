import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import local files
import Header from 'components/Header';
import SideBar from 'components/SideBar';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Dashboard from 'containers/Dashboard';
import Upload from 'containers/Upload';
import Cost from 'containers/Cost/Loadable';
import Income from 'containers/Income/Loadable';
import Margin from 'containers/Margin/Loadable';
import Metric from 'containers/Metric/Loadable';
import EERR from 'containers/EERR/Loadable';
import RightContainer from './RightContainer';
import LeftContainer from './LeftContainer';
import AppContainer from './AppContainer';
import Container from './Container';

class Routes extends React.PureComponent {
  constructor(props) {
    super(props);

    // get product data from props
    const product = props.product || {};

    // initialize product data
    this.state = {
      isSideBarOpen: false,
    };
  }

  toggelSideBar(e) {
    e.preventDefault();
    this.setState({
      isSideBarOpen: !this.state.isSideBarOpen,
    });
  }

  render() {
    return (
      <div>
        <AppContainer className="wrapper">
          <LeftContainer id="sidebar">
            <SideBar isSideBarOpen={this.state.isSideBarOpen} />
          </LeftContainer>
          <RightContainer id="content">
            <Header
              {...this.props}
              toggelSideBar={this.toggelSideBar.bind(this)}
            />
            <Container>
              <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/costs" component={Cost} />
                <Route path="/income" component={Income} />
                <Route path="/margins" component={Margin} />
                <Route path="/metrics" component={Metric} />
                <Route path="/eerr" component={EERR} />
                <Route path="/upload" component={Upload} />

                <Route path="" component={NotFoundPage} />
              </Switch>
            </Container>
          </RightContainer>
        </AppContainer>
      </div>
    );
  }
}

// const IsAuthenticate = redirectToAppComponent(Routes);

export default Routes;

/*
export default Routes; */
