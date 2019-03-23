import React, {ChangeEventHandler, FunctionComponent} from 'react'
import styled from 'styled-components'
import {inputStyle} from "../styles";

interface Props {
    value: string,
    onChange: ChangeEventHandler
}

const Input = styled.input`
  ${inputStyle}
  & {
    width: 140px;
  }
`;

export const InputDateTime: FunctionComponent<Props> = ({value, onChange}) => (
    <Input {...{value, onChange}} type="date"/>
);

/** @component */
export default InputDateTime