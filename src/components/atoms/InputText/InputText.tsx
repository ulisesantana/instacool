import React, {ChangeEventHandler, FunctionComponent} from 'react'
import styled from 'styled-components'
import { inputStyle } from "../styles";

interface Props {
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement>
}

const Input = styled.input`
 ${inputStyle}
`;

export const InputText: FunctionComponent<Props> = ({value, onChange}) => (
  <Input
    value={value}
    onChange={onChange}
    type="text"
  />
);

export default InputText;