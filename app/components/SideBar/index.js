// import npm packages
import React, { Component } from 'react';

// import local files
import LOGO from 'images/logo.png';
import SideBarContainer from './SideBarContainer';
import IMG from './IMG';
import LogoContainer from './LogoContainer';
import Options from './Options';
import CircleIcon from './CircleIcon';
import SideBarOptionLabel from './SideBarOptionLabel';
import CollapseContainer from './CollapseContainer';

// component for Sidebar
class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: [],
    };
    this.sideBarOptions = {
      dashboard: [
        {
          name: 'FINANCIAL MANAGEMENT CONTROL',
          url: '',
          options: [
            {
              name: 'Results',
              url: '',
            },
            {
              name: 'Flow & Balance',
              url: '',
            },
            {
              name: 'Drivers & Opportunities',
              url: '',
            },
          ],
        },
        {
          name: 'PROJECT CONRTOL',
          url: '',
          options: [],
        },
        {
          name: 'COMMERCIAL CONTROL',
          url: '',
          options: [],
        },
        {
          name: 'BUDGET & GROWTH PLAN',
          url: '',
          options: [
            {
              name: 'EBITDA',
              url: '',
            },
            {
              name: 'Cash Flow',
              url: '',
            },
            {
              name: 'Financing Structure',
              url: '',
            },
            {
              name: 'Forecast',
              url: '',
            },
          ],
        },
        {
          name: 'VALORIZATION',
          url: '',
          options: [],
        },
        {
          name: 'ADMINISTRATION',
          url: '',
          options: [],
        },
        {
          name: 'MESSAGES',
          url: '',
          options: [],
        },
      ],
    };
  }

  renderSideBar(val, index) {
    return (
      <Options className="" key={index}>
        <SideBarOptionLabel
          className="row"
          color="#01b9bf"
          data-toggle="collapse"
          href={`#collapseExample-${index}`}
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={() => {
            const { isOpen } = this.state;
            const index = isOpen.findIndex(option => option === val.name);
            if (index !== -1) {
              isOpen.splice(index, 1);
            } else {
              isOpen.push(val.name);
            }
            this.setState({
              isOpen,
            });
          }}
        >
          <CircleIcon
            size="7px"
            className="fa fa-circle col-1"
            aria-hidden="true"
          />

          <p className="col-8">{val.name}</p>
          {this.state.isOpen.findIndex(option => option === val.name) !== -1 ? 
            <CircleIcon
              size="10px"
              className="fa fa-angle-up col-1"
              aria-hidden="true"
            />
           : 
            <CircleIcon
              size="10px"
              className="fa fa-angle-down col-1"
              aria-hidden="true"
            />
          }
        </SideBarOptionLabel>
        <CollapseContainer className="collapse" id={`collapseExample-${index}`}>
          {val.options &&
            val.options.length !== 0 &&
            val.options.map((option, i) => (
              <p key={i}>
                <SideBarOptionLabel color="#fff" href={val.url}>
                  <CircleIcon
                    className="fa fa-angle-right"
                    aria-hidden="true"
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {option.name}
                </SideBarOptionLabel>
              </p>
            ))}
        </CollapseContainer>
      </Options>
    );
  }

  render() {
    return (
      <SideBarContainer>
        <LogoContainer>
          <IMG src={LOGO} alt="site logo" />
        </LogoContainer>
        <div>
          {this.sideBarOptions &&
          this.sideBarOptions.dashboard &&
          this.sideBarOptions.dashboard.length !== 0
            ? this.sideBarOptions.dashboard.map((val, index) => {
                if(val && val.options && val.options.length !== 0) {
                  return this.renderSideBar(val, index)
                } 
                  return (
                    <Options key={index}>
                      <SideBarOptionLabel
                        color='#01b9bf'
                        href={val.url}
                        className='row'
                      >
                        <CircleIcon size='7px' className="fa fa-circle col-1" aria-hidden="true"></CircleIcon>
                    
                        <p className='col-8'>
                          {val.name}
                        </p>
                      </SideBarOptionLabel>
                    </Options>
                  )
                
              })
              : ''}
        </div>
      </SideBarContainer>
    );
  }
}

export default SideBar;
