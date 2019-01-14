import styled from 'styled-components';

export default styled.td`
  &&& {
    padding: 10px;
  	border-left: ${props => props.border} solid #ebebeb;
  	&:nth-child(1) {
  		border-left: ${props => props.border} solid;
  	}
  }
`;
