import styled from 'styled-components';

export default styled.select`
  &&&{
  	float: ${props => props.float || ''};
  	font-size: 10px;
  	width: ${props => props.width || '100%'};
  	margin-top: 10px;
    height: 35px;
  }
`;
