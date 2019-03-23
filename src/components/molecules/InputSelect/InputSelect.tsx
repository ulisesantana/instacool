import React, {ChangeEventHandler, FunctionComponent} from 'react'
import InputText from '../../atomics/InputText'
import Select from '../../atomics/Select'
import InputGroup from '../InputGroup';
import {SelectOption} from "../../../types";

interface Props {
    options: SelectOption[],
    onSelectChange: ChangeEventHandler,
    onInputChange: ChangeEventHandler,
    selected?: string,
    value: string
}

export const InputSelect: FunctionComponent<Props> = ({options, onInputChange, onSelectChange, selected = '', value}) => (
    <InputGroup>
        <Select
            selected={selected}
            options={options}
            onChange={onSelectChange}
        />
        <InputText {...{onChange: onInputChange, value}}/>
    </InputGroup>
);

export default InputSelect;