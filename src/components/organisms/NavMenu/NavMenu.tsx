import React, {FunctionComponent} from 'react';
import styled, {IStyledComponent} from "../../../theme";
import {ThMenu} from "styled-icons/typicons/ThMenu";

const MobileWireframe: FunctionComponent<IStyledComponent> = ({className}) => {
  return (
    <div className={`${className} ${className}`}>
      <ThMenu size={56} />
    </div>
  );
};

export const MobileMenu = styled(MobileWireframe)`
  display: none;
  
  @media screen and (max-width: 768px) {
    align-items: center;
    background-color: ${({theme}) => theme.primaryColor};
    color: ${({theme}) => theme.secondaryColor};
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row-reverse;
    grid-area: menu;
    height: 80px;
    justify-content: flex-start;
    width: 100%;
  }
`;

export default MobileMenu