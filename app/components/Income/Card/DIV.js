import styled from 'styled-components';

export default styled.div`
  	display: inline;
	font-weight: bold;
    font-size: 18px;
    color: ${props => props.color};
    background: ${props => props.background};
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 5px;
    cursor: pointer
`;
