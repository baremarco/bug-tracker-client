import TextField from '@mui/material/TextField';
import { commonTypes } from '../../../typings';
import { Controller, useFormContext } from 'react-hook-form';

interface ICommonTextField extends commonTypes.IFormInputProps {
  multiline: boolean;
  maxRows: number;
}
function CommonTextField({ label, name, multiline = false, maxRows = 1 }: ICommonTextField) {
  const { control } = useFormContext();
  return (
    <Controller 
      name={name}
      control={control}
      render={({field: { onChange, value }, fieldState: { error }}) => (
        <TextField
          id={`text-field-${label}`}
          label={label}
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          value={value}
          multiline={multiline}
          maxRows={maxRows}
        />
      )}
    />
  );
}

export default CommonTextField;