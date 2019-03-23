import {Color} from "csstype";
import React, {FunctionComponent, ReactChildren, ReactNode, MouseEventHandler} from 'react'
import styled from 'styled-components'

const SButton = styled.button`
  background-color: ${({color}: Props) => color};
  border: solid ${({color}: Props) => color} 2px;  
  box-shadow: 0 1px 5px black;
  color: white;
  cursor: pointer;
  font-weight: bold;
  outline: none;
  padding: 8px;
  text-transform: uppercase;
  transition: all ease 400ms;
  
  &:hover {
    background-color: transparent;
    color: ${({color}: Props) => color};
  }
`;

interface Props {
    /**
     * Button color
     * @default 'white'
     */
    color?: Color
    /**
     * Function triggered when the button is clicked
     * */
    onClick: MouseEventHandler<HTMLButtonElement>,
    children: ReactNode | ReactChildren
}

export const Button: FunctionComponent<Props> = ({onClick, children, color = 'initial'}) => (
    <SButton onClick={onClick} color={color}>
        {children}
    </SButton>
);

export default Button