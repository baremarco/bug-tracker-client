import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { selecTypes, commonTypes } from '../../../typings';
import { Controller, useFormContext } from 'react-hook-form';


interface ICommonSelect extends commonTypes.IFormInputProps {
  options: selecTypes.IOption[] 
}

function CommonSelect({name, label, options}:ICommonSelect) {
  const { control } = useFormContext();
  const generateOptions = () => options.map((option) => <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>); 

  return (
    <Controller
      name={name}
      control={control} 
      render={({
        field: {onChange, value},
        fieldState: { error },
      }) => (
        <FormControl sx={{width: '20ch'}} error={!!error}>
          <InputLabel id={ `select-label-${label}` }>{label}</InputLabel>
          <Select
            labelId={ `select-label-${label}-label` }
            id={ `select-label-${label}` }
            value={value}
            label={label}
            placeholder={label}
            onChange={onChange}
          >
            {generateOptions()}
          </Select>
          { !!error && <FormHelperText>{error.message}</FormHelperText> }
        </FormControl>
      )}
    />
  );
}

export default CommonSelect;