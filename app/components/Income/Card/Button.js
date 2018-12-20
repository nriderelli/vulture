import styled from 'styled-components';

export default styled.button`
  background: ${props => props.background};
  color: ${props => props.color};
  border-radius: 5px;
  margin-left: 15px;
  padding: 5px;
  font-size: 12px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:nth-child(1) {
    margin-left: 0px;
  }
`;
