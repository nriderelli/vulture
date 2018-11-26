// import npm packages
import React from 'react';

// import local files
import CardContainer from './CardContainer';
import Icon from './Icon';
import Number from './Number';
import Text from './Text';
import Container from './Container';
import CardBody from './CardBody';

export class LeftCard extends React.PureComponent {
  render() {
    const { data } = this.props;
    return (
      <CardContainer className="card">
        <CardBody className="card-body">
          {data &&
            data.length !== 0 &&
            data.map((val, index) => (
              <Container className="row" key={index}>
                <Icon
                  color={val.color}
                  className="col-1 fa fa-circle col-1"
                  aria-hidden="true"
                  size="12px"
                />
                <Number className="col-3">{val.number}</Number>
                <Text className="col-7">{val.text}</Text>
              </Container>
            ))}
        </CardBody>
      </CardContainer>
    );
  }
}

export default LeftCard;
