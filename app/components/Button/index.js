import styled from 'styled-components';

export default styled.button`
  background: ${props => props.background};
  margin-top: 5px;
  color: #fff;
  border-radius: 5px;
  margin-top: ${props => props.top};
  margin-left: ${props => props.left};
  margin-right: ${props => props.right};
  padding: ${props => props.padding || '5px'};
  height: ${props => props.height || ''};
  float: ${props => props.float};
  padding-left: ${props => props.paddingLeft};
  width: ${props => props.width};
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
