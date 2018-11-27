import styled from 'styled-components';

export default styled.div`
  	display: inline;
	font-weight: bold;
    font-size: 12px;
    color: ${props => props.color};
    background: ${props => props.background};
    padding-top: 15px;
    padding-bottom: 15px;
    border-radius: 5px;
`;
