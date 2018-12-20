import styled from 'styled-components';

export default styled.a`
  background: ${props => props.background};
  margin-top: 5px;
  &&&{color: #fff;}
  border-radius: 5px;
  float: ${props => props.float};
  cursor: pointer;
  padding: 5px;
  font-size: 1em;
  &:focus {
    outline: none;
  }
  &:hover {
    &&&{color: #fff;}
    text-decoration: none;
  }
`;
