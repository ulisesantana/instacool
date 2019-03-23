import React, {FunctionComponent} from 'react';
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Row, RegularInput} from "../../atoms";

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
    <Row>
      <Field name={`name`} component={RegularInput} placeholder={`Name`}/>
      <Field name={`lastName`} component={RegularInput} placeholder={`Last name`} />
      <input type="submit" value={`Mándale`}/>
    </Row>
  </form>
);

export default reduxForm<FormData,Props>({
  form: 'user',
  validate
})(UserForm);