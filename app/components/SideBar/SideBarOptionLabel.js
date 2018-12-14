import styled from 'styled-components';

export default styled.a`
  text-decoration: none;
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  &:hover {
    text-decoration: none;
    color: ${props => props.color};
  }
`;
