import React, {ChangeEventHandler, FunctionComponent, ReactElement} from 'react'
import {InputText, InputDateTime} from "../../atoms";
import {withLabel, withError} from "../../_hocs";
import {CanBeUndefined} from "../../../types";
import {WrappedFieldProps} from "redux-form";

type Props = {
  label?: string,
  type?: string
} & WrappedFieldProps

const isNotUndefined = (z: any) => z !== undefined && !!z;

const render = (label: CanBeUndefined<string>, error: CanBeUndefined<string>, Component: ReactElement<Props>) =>
  isNotUndefined(label) || isNotUndefined(error)
    ? withLabel<Props>(label, withError<Props>(error, Component))
    : Component;

export const Input: FunctionComponent<Props> = ({type = 'text', label, meta, input, ...props}) => {
  switch (type) {
    case 'date':
      return render(label, meta.error, <InputDateTime {...input} {...props} />);
    case 'text':
    default:
      return render(label, meta.error, <InputText {...input} {...props} />);
  }
};

export default Input