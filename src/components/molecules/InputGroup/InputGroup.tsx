import styled from 'styled-components';

export const InputGroup = styled.div`
  padding: 10px;
  
  & :not(input:first-child):not(input:last-child):not(select:first-child):not(select:last-child) {
    border-radius: 0;
  }
  input:first-child, select:first-child{
    border-radius: 16px 0 0 16px;
  }
  input:last-child, select:last-child{
    border-radius: 0 16px 16px 0;
  }
`;

export default InputGroup;