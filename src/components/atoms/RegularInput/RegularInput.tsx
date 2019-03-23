import React, {FunctionComponent, InputHTMLAttributes} from 'react'
import styled from 'styled-components'
import { inputStyle } from "../styles";

const Input = styled.input`
 ${inputStyle}
`;

export const InputText: FunctionComponent<InputHTMLAttributes<HTMLInputElement>> = ({value, onChange, ...props}) => (
  <Input
    value={value}
    onChange={onChange}
    type="text"
    {...props}
  />
);

export default InputText;