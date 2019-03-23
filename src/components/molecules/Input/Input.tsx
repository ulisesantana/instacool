import React, {ChangeEventHandler, FunctionComponent, ReactElement} from 'react'
import {InputText, InputDateTime} from "../../atomics";
import {withLabel, withText} from "../../_hocs";
import {CanBeUndefined} from "../../../types";

interface Props {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  text?: string,
  label?: string,
  type?: string
}

const render = (label: CanBeUndefined<string>, text: CanBeUndefined<string>, Component: ReactElement<Props>) =>
  !!label || !!text
    ? withLabel<Props>(label, withText<Props>(text, Component))
    : Component;

export const Input: FunctionComponent<Props> = ({type = 'text', label, text, ...inputProps}) => {
  switch (type) {
    case 'date':
      return render(label, text, <InputDateTime {...inputProps}/>);
    case 'text':
    default:
      return render(label, text, <InputText {...inputProps}/>);
  }
};

export default Input