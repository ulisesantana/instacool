import {css} from 'styled-components'

export const inputStyle = css`
  background-color: rgba(255,255,255,0.6);
  border: solid 2px transparent;
  border-radius: 16px;
  height: 30px;
  padding: 0 10px;
  transition: all ease-in-out 300ms;
  width: 100px;

  &:focus{
    outline: none;
    background-color: white;
  }
  
`;