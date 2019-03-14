// import npm packages
import React from 'react';

// import local files
import Edit from 'images/icons/edit.png';
import Add from 'images/icons/add.png';
import CardContainer from './CardContainer';
import Header from './Header';
import MainSection from './MainSection';
import Section from './Section';
import Select from './Select';
import Button from './Button';
/* eslint-disable react/prefer-stateless-function */
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <CardContainer className="card" key={this.props.index}>
        <MainSection className="">
          <div className="row">
            <Section className="">
              <strong>BUSINESS LINE</strong>
              <div>
                <Select className="form-control">
                  <option>All Selected (5)</option>
                </Select>
              </div>
            </Section>
            <Section className="col-1">
              <strong>INDUSTRY</strong>
              <div>
                <Select className="form-control">
                  <option>All Selected (6)</option>
                </Select>
              </div>
            </Section>
            <Section className="col-1">
              <strong>CUSTOMERS</strong>
              <div>
                <Select className="form-control">
                  <option>All Selected (31)</option>
                </Select>
              </div>
            </Section>
            <Section className="col-1">
              <strong>COMPANY</strong>
              <div>
                <Select className="form-control">
                  <option>None Selected</option>
                </Select>
              </div>
            </Section>
            <Section className="col-1">
              <strong>RESULT CENTER</strong>
              <div>
                <Select className="form-control">
                  <option>All Selected (147)</option>
                </Select>
              </div>
            </Section>
            <Section className="col-7">
              <div style={{ float: 'left' }}>
                <strong>ACCOUNT GROUP</strong>
                <Select className="form-control" width="175px">
                  <option>All Selected (203)</option>
                </Select>
              </div>
              <Button
                float="right"
                height="50px"
                width="50px"
                background="#dde7e9"
                color="#2b6d81"
              >
                <i className="fa fa-filter" aria-hidden="true" />
              </Button>
            </Section>
          </div>
        </MainSection>

        <MainSection className="">
          <div className="row">
            <Section className="col-1">
              <strong>YEAR</strong>
              <div>
                <Select className="form-control">
                  <option>2015</option>
                </Select>
              </div>
            </Section>
            <Section className="col-1">
              <strong>MONTH</strong>
              <div>
                <Select className="form-control">
                  <option>None Selected</option>
                </Select>
              </div>
            </Section>
            <Section className="col-1">
              <strong>EXECUTIVE</strong>
              <div>
                <Select className="form-control">
                  <option>None Selected</option>
                </Select>
              </div>
            </Section>
            <Section className="col-1">
              <strong>METRICS</strong>
              <div>
                <Select className="form-control">
                  <option>Select</option>
                </Select>
              </div>
            </Section>
            <Section className="col-1">
              <strong>COMPARISON</strong>
              <div>
                <Select className="form-control">
                  <option>Select</option>
                </Select>
              </div>
            </Section>
            <Section className="col-7">
              <strong />
              <div style={{ paddingTop: '15px' }}>
                <div
                  className="custom-control custom-checkbox"
                  style={{ display: 'inline' }}
                >
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    MARGINS
                  </label>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button background="#2b6d81" color="#fff" height="50px">
                  Generate
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button background="#2b6d81" color="#fff" height="50px">
                  save
                  <i className="fa fa-floppy" aria-hidden="true" />
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button
                  background="#dde7e9"
                  color="#2b6d81"
                  height="50px"
                  width="50px"
                >
                  <i className="fa fa-file-excel" aria-hidden="true" />
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button
                  background="#dde7e9"
                  color="#2b6d81"
                  height="50px"
                  width="50px"
                >
                  <i className="fa fa-star" aria-hidden="true" />
                </Button>
              </div>
            </Section>
          </div>
        </MainSection>
      </CardContainer>
    );
  }
}

export default Card;
