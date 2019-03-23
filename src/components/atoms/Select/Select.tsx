import React, {ChangeEventHandler, FunctionComponent} from 'react'
import styled from "styled-components";
import {SelectOption} from "../../../types";
import {inputStyle} from "../styles";

interface Props {
  selected: string | number
  options:  SelectOption[],
  onChange: ChangeEventHandler<HTMLSelectElement>,
  width?: number
}

const StyledSelect = styled.select`
  ${inputStyle}
  & {
    height: 34px;
    cursor: pointer;
  }
`;

export const Select: FunctionComponent<Props> = ({selected, options, onChange, width}) => (
  <StyledSelect
    style={{width: !!width ? `${width}px` : 'inherit'}}
    onChange={onChange}
    defaultValue={(typeof selected === 'number') ? selected.toString() : selected}
  >
      { options.length && options.map(({value, description}) =>
            <option
              value={value}
              key={value}
            >
                {description}
            </option>
          )
      }
  </StyledSelect>
);

export default Select