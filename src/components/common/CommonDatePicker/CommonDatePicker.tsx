import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller, useFormContext } from 'react-hook-form';
import { DATE_FORMAT } from '../../../utils/constants';
import { IFormInputProps } from '../../../typings/components/common/common';

function CommonDatePicker({name, label}: IFormInputProps) {
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