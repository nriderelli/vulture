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
import IconContainer from './IconContainer';
import DashboardBlue from 'images/icons/dashboard_blue.png';
import DashboardBlack from 'images/icons/dashboard_black.png';
import IncomeBlue from 'images/icons/income_blue.png';
import IncomeBlack from 'images/icons/income_black.png';
import CostBlue from 'images/icons/cost_blue.png';
import CostBlack from 'images/icons/cost_black.png';
import MarginBlue from 'images/icons/margin_blue.png';
import MarginBlack from 'images/icons/margin_black.png';
import MetricsBlue from 'images/icons/metrics_blue.png';
import MetricsBlack from 'images/icons/metrics_black.png';
import EERRBlue from 'images/icons/eerr_blue.png';
import EERRBlack from 'images/icons/eerr_black.png';
import ExploreBlue from 'images/icons/explore_blue.png';
import ExploreBlack from 'images/icons/explore_black.png';

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
            <IconContainer>
              <img src={location.pathname === '/dashboard' ? DashboardBlue : DashboardBlack} />
            </IconContainer>
            Dashboard
          </HeaderLink>
          <HeaderLink
            color={location.pathname === '/income' ? '#187e90' : '#646464'}
            to="/income"
          >
            <IconContainer>
              <img src={location.pathname === '/income' ? IncomeBlue : IncomeBlack} />
            </IconContainer>
            Income
          </HeaderLink>
          <HeaderLink
            color={location.pathname === '/costs' ? '#187e90' : '#646464'}
            to="/costs"
          >
            <IconContainer>
              <img src={location.pathname === '/costs' ? CostBlue : CostBlack} />
            </IconContainer>
            Costs
          </HeaderLink>
          <HeaderLink
            color={location.pathname === '/margins' ? '#187e90' : '#646464'}
            to="/margins"
          >
            <IconContainer>
              <img src={location.pathname === '/margins' ? MarginBlue : MarginBlack} />
            </IconContainer>
            Margins
          </HeaderLink>
          <HeaderLink
            color={location.pathname === '/metrics' ? '#187e90' : '#646464'}
            to="/metrics"
          >
            <IconContainer>
              <img src={location.pathname === '/metrics' ? MetricsBlue : MetricsBlack} />
            </IconContainer>
            Metrics
          </HeaderLink>
          <HeaderLink
            color={location.pathname === '/eerr' ? '#187e90' : '#646464'}
            to="/eerr"
          >
            <IconContainer>
              <img src={location.pathname === '/eerr' ? EERRBlue : EERRBlack} />
            </IconContainer>
            EERR
          </HeaderLink>
          <HeaderLink
            color={location.pathname === '/explore' ? '#187e90' : '#646464'}
            to="/explore"
          >
            <IconContainer>
              <img src={location.pathname === '/explore' ? ExploreBlue : ExploreBlack} />
            </IconContainer>
            Explore
          </HeaderLink>
          <HeaderLink
            color={location.pathname === '/upload' ? '#187e90' : '#646464'}
            to="/upload"
          >
            <IconContainer>
              <i className="fa fa-upload" aria-hidden="true"></i>
            </IconContainer>
            Upload
          </HeaderLink>
          <Button left="45px" background="#006e82" width='75px' fontSize='18px' right='25px'>
            Test
          </Button>
        </NavBar>
      </NavBarContainer>
    );
  }
}

export default Header;
