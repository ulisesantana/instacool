import React, {FunctionComponent} from 'react';
import {reduxForm, Field, InjectedFormProps} from "redux-form";

type Props = {

};

type FormData = {
  [key: string]: string,
  name: string,
  lastName: string
}

const validate = (values: FormData) => {
  const errors = {} as FormData;
  const fields = ['name', 'lastName'];

  fields.forEach((f) => {
    if (!values[f]) {
      errors[f] = 'Campo obligatorio';
    }
  });

  return errors
};

export const UserForm: FunctionComponent<InjectedFormProps<FormData, Props>> = ({handleSubmit}) => (
  <form onSubmit={handleSubmit}>
    <Field name={`name`} component={`input`} />
    <Field name={`lastName`} component={`input`} />
    <input type="submit" value={`Mándale`}/>
  </form>
);

export default reduxForm<FormData,Props>({
  form: 'user',
  validate
})(UserForm);