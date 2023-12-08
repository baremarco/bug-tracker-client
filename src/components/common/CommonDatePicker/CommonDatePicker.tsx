import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { commonTypes } from '../../../typings';
import { Controller, useFormContext } from 'react-hook-form';
import { DATE_FORMAT } from '../../../utils/constants';

function CommonDatePicker({name, label}: commonTypes.IFormInputProps) {
  const { control } = useFormContext();
  return (
    <Controller 
      name={name}
      control={control}
      render={({field: { value, onChange }}) => (
        <DatePicker label={label} value={value} onChange={onChange} format={DATE_FORMAT} sx={{width: '20ch'}} />
      )}
    />
  );
}

export default CommonDatePicker;