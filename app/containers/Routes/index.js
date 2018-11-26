import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import local files
import Header from 'components/Header';
import SideBar from 'components/SideBar';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';
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
        <AppContainer className="row">
          <LeftContainer width={this.state.isSideBarOpen ? '18%' : '0px'}>
            <SideBar isSideBarOpen={this.state.isSideBarOpen} />
          </LeftContainer>
          <RightContainer width={this.state.isSideBarOpen ? '82%' : '100%'}>
            <Header
              {...this.props}
              toggelSideBar={this.toggelSideBar.bind(this)}
            />
            <Container>
              <Switch>
                <Route path="/dashboard" component={Dashboard} />

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
