import React, {FunctionComponent} from 'react'
import styled from "styled-components";

type Props = {
  className?: string,
  label?: string,
  type?: string,
}

const CardWireframe: FunctionComponent<Props> = ({className, children}) => (
  <div className={className}>
    {children}
  </div>
);

export const Card = styled(CardWireframe)`
  background-color: yellow;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 10px blueviolet;
  padding: 10px 15px;
`;

export default Card;