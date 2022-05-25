import { Control, Controller, FieldValues } from 'react-hook-form';

import QTextField from './QTextField';

interface IFormTextInputProps {
  name: string;
  control: Control<FieldValues, any> | undefined;
  label: string;
  rules?: object;
  error?: boolean;
  errorText?: string;
  type?: string;
}

const FormTextInput = (props: IFormTextInputProps) => {
  const { name, control, rules, label, type, error, errorText } = props;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={rules}
      render={({ field: { ref, ...field } }) => (
        <QTextField
          inputRef={ref}
          label={label}
          type={type}
          error={error}
          helperText={errorText}
          {...field}
        />
      )}
    />
  );
};

export default FormTextInput;
