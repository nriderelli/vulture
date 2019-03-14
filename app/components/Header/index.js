import React from 'react';
import { FormattedMessage } from 'react-intl';

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
import IconContainer from './IconContainer';
import Button from '../Button';
import Banner from './banner.jpg';
import SideBarIcon from './SideBarIcon';
import NavBarContainer from './NavBarContainer';
import HeaderLink from './HeaderLink';
import NavBar from './NavBar';
import Img from './Img';
import A from './A';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <NavBarContainer className="right-header">
        <div className="head_flex">
          <div className="bar-btn">
            <nav className="navbar navbar-default">
              <div className="sidebar-icon">
                <div className="navbar-header">
                  <Button
                    id="sidebarCollapse"
                    className="btn  navbar-btn"
                    onClick={this.props.toggelSideBar}
                  >
                    <SideBarIcon>
                      <span>
                        <i className="fa fa-bars" aria-hidden="true" />
                      </span>
                    </SideBarIcon>
                  </Button>
                </div>
              </div>
            </nav>
          </div>
          <div className="main-menubar">
            <nav className="navbar navbar-expand-lg navbar-light">
              {/* <a class="navbar-brand" href="#">Navbar</a> */}
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div id="navbarNavDropdown" className="navbar-collapse collapse">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <HeaderLink
                      className="nav-link"
                      color={
                        location.pathname === '/dashboard'
                          ? '#187e90'
                          : '#646464'
                      }
                      to="/dashboard"
                    >
                      <IconContainer>
                        <img
                          src={
                            location.pathname === '/dashboard'
                              ? DashboardBlue
                              : DashboardBlack
                          }
                        />
                      </IconContainer>
                      Dashboard
                    </HeaderLink>
                  </li>
                  <li className="nav-item">
                    <HeaderLink
                      className="nav-link"
                      color={
                        location.pathname === '/income' ? '#187e90' : '#646464'
                      }
                      to="/income"
                    >
                      <IconContainer>
                        <img
                          src={
                            location.pathname === '/income'
                              ? IncomeBlue
                              : IncomeBlack
                          }
                        />
                      </IconContainer>
                      Income
                    </HeaderLink>
                  </li>
                  <li className="nav-item">
                    <HeaderLink
                      className="nav-link"
                      color={
                        location.pathname === '/costs' ? '#187e90' : '#646464'
                      }
                      to="/costs"
                    >
                      <IconContainer>
                        <img
                          src={
                            location.pathname === '/costs'
                              ? CostBlue
                              : CostBlack
                          }
                        />
                      </IconContainer>
                      Costs
                    </HeaderLink>
                  </li>
                  <li className="nav-item">
                    <HeaderLink
                      className="nav-link"
                      color={
                        location.pathname === '/margins' ? '#187e90' : '#646464'
                      }
                      to="/margins"
                    >
                      <IconContainer>
                        <img
                          src={
                            location.pathname === '/margins'
                              ? MarginBlue
                              : MarginBlack
                          }
                        />
                      </IconContainer>
                      Margins
                    </HeaderLink>
                  </li>
                  <li className="nav-item">
                    <HeaderLink
                      className="nav-link"
                      color={
                        location.pathname === '/metrics' ? '#187e90' : '#646464'
                      }
                      to="/metrics"
                    >
                      <IconContainer>
                        <img
                          src={
                            location.pathname === '/metrics'
                              ? MetricsBlue
                              : MetricsBlack
                          }
                        />
                      </IconContainer>
                      Metrics
                    </HeaderLink>
                  </li>
                  <li className="nav-item">
                    <HeaderLink
                      className="nav-link"
                      color={
                        location.pathname === '/eerr' ? '#187e90' : '#646464'
                      }
                      to="/eerr"
                    >
                      <IconContainer>
                        <img
                          src={
                            location.pathname === '/eerr' ? EERRBlue : EERRBlack
                          }
                        />
                      </IconContainer>
                      EERR
                    </HeaderLink>
                  </li>
                  <li className="nav-item">
                    <HeaderLink
                      className="nav-link"
                      color={
                        location.pathname === '/explore' ? '#187e90' : '#646464'
                      }
                      to="/explore"
                    >
                      <IconContainer>
                        <img
                          src={
                            location.pathname === '/explore'
                              ? ExploreBlue
                              : ExploreBlack
                          }
                        />
                      </IconContainer>
                      Explore
                    </HeaderLink>
                  </li>
                  <li className="nav-item">
                    <HeaderLink
                      className="nav-link"
                      color={
                        location.pathname === '/upload' ? '#187e90' : '#646464'
                      }
                      to="/upload"
                    >
                      <IconContainer>
                        <i className="fa fa-upload" aria-hidden="true" />
                      </IconContainer>
                      Upload
                    </HeaderLink>
                  </li>
                  <li className="nav-item">
                    <Button className="nav-link test">Test</Button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </NavBarContainer>
    );
  }
}

export default Header;
