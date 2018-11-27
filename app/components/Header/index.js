import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import NavBarContainer from './NavBarContainer';
import SideBarIcon from './SideBarIcon';
import Banner from './banner.jpg';
import Button from '../Button';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <NavBarContainer>
        <Button
          left="0"
          top="12px"
          paddingLeft="11px"
          width="40px"
          background="#006e82"
          onClick={this.props.toggelSideBar}
        >
          <SideBarIcon>
            <span>
              <i className="fa fa-align-justify" />
            </span>
          </SideBarIcon>
        </Button>
        <NavBar>
          <HeaderLink
            color={location.pathname === '/dashboard' ? '#187e90' : '#646464'}
            to="/dashboard"
          >
            Dashboard
          </HeaderLink>
          <HeaderLink
            color={location.pathname === '/income' ? '#187e90' : '#646464'}
            to="/income"
          >
            Income
          </HeaderLink>
          <HeaderLink
            color={location.pathname === '/costs' ? '#187e90' : '#646464'}
            to="/costs"
          >
            Costs
          </HeaderLink>
          <HeaderLink
            color={location.pathname === '/margins' ? '#187e90' : '#646464'}
            to="/margins"
          >
            Margins
          </HeaderLink>
          <HeaderLink
            color={location.pathname === '/metrics' ? '#187e90' : '#646464'}
            to="/metrics"
          >
            Metrics
          </HeaderLink>
          <HeaderLink
            color={location.pathname === '/benchmark' ? '#187e90' : '#646464'}
            to="/benchmark"
          >
            Benchmark
          </HeaderLink>
          <HeaderLink
            color={location.pathname === '/eerr' ? '#187e90' : '#646464'}
            to="/eerr"
          >
            EERR
          </HeaderLink>
          <HeaderLink
            color={location.pathname === '/explore' ? '#187e90' : '#646464'}
            to="/explore"
          >
            Explore
          </HeaderLink>
          <Button left="20px" background="#006e82">
            Test
          </Button>
        </NavBar>
      </NavBarContainer>
    );
  }
}

export default Header;
