import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  margin-left: 20px;
  text-decoration: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 18px;
  color: ${props => props.color};
  &:active {
    background: #41addd;
    color: #fff;
  }
  &:hover {
    color: #187e90;
    text-decoration: none;
  }
`;
