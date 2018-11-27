import styled from 'styled-components';

export default styled.div`
 	font-size: 10px;
 	border-left: 1px solid #e1e1e1;
 	&&{
 		padding: 0px;
 	 	padding-right: 0px;
 	    padding-left: 0px;
 	}
 	&:nth-child(1) {
		border-left: 0px solid #e1e1e1;
	}
`;
