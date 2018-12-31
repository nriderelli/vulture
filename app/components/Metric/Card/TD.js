import styled from 'styled-components';

export default styled.td`
  &&& {
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 0px;
    width: ${props => props.width};
  }
`;
