import styled from 'styled-components';

export default styled.a`
  text-decoration: none;
  color: ${props => props.color};
  &:hover {
    text-decoration: none;
    color: ${props => props.color};
  }
`;
