import styled from 'styled-components';

export default styled.button`
  &&&{
  	font-size: 20px;
  	float: ${props => props.float};
  	height: ${props => props.height};
	width:${props => props.width};
    border-radius: 10px;
  	color: ${props => props.color};
  	background: ${props => props.background};
  	margin-right: 20px;
  	cursor: pointer;
  }
`;
