import styled from 'styled-components';

export default styled.a`
  background: ${props => props.background};
  &&& {
    color: #fff;
  }
  border-radius: 5px;
  float: ${props => props.float};
  cursor: pointer;
  padding: 5px;
  font-size: 18px;
  &:focus {
    outline: none;
  }
  &:hover {
    &&& {
      color: #fff;
    }
    text-decoration: none;
  }
`;
