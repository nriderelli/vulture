import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  margin-left: 45px;
  text-decoration: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 18px;
  color: ${props => props.color};
  &:active {
    background: transparent;
    color: #187e90;
  }
  &:hover {
    color: #187e90;
    text-decoration: none;
  }
`;
