import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Dayjs } from 'dayjs';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import CommonSelect from '../../components/common/CommonSelect/CommonSelect';
import { USERS, PROJECTS, BUGS } from './consts/viewBug';
import GridPageWrapper from '../../components/common/GridPageWrapper/GridPageWrapper';
import BugCard from '../../components/BugCard/BugCard';
import { viewBugsStyles } from './styles';
import CommonButton from '../../components/common/CommonButton/CommonButton';
import CommonDatePicker from '../../components/common/CommonDatePicker/CommonDatePicker';
import { FormControl, FormLabel } from '@mui/material';

interface IFormInput {
    user: string;
    project: string;
    startDate: Dayjs | null;
    endDate: Dayjs | null;
    outForm: string;
}

function ViewBug() {
  const [outterError, setOuterError] = useState(false);
  const methods = useForm<IFormInput>({
    defaultValues: {
      user: '',
      project: '',
      startDate: null,
      endDate: null,
      outForm: ''
    }
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const values = Object.values(data).reduce((acc, value) => {
      if (value !== null && value !== undefined && value !== '') {
        acc += 1;
      }
      return acc;
    } , 0);
    
    if (values <= 0) {
      setOuterError(true);
    } else {
      setOuterError(false);
    }
  };

  const getHeader = () => {
    return( 
      <FormControl sx={{width: '100%', mb: 4}}>
        <Box sx={viewBugsStyles.header}>
          <FormProvider {...methods}>
            <CommonSelect label='User' name='user' options={USERS}/>
            <CommonSelect label='Project' name = 'project' options={PROJECTS}/>
            <CommonDatePicker label='Start Date' name='startDate' />
            <CommonDatePicker label='End Date' name='endDate' />
            <CommonButton variant='contained' onClick={methods.handleSubmit(onSubmit)}>Find Bugs</CommonButton>
          </FormProvider>
        </Box>
        { outterError && <FormLabel error>Must provide at least one filter</FormLabel> }
      </FormControl>
    );
  };

  const getBody = () => {
    return (
      <Box sx={viewBugsStyles.body}>
        {BUGS.map(bug => <BugCard 
          key={bug.id}
          createdAt={bug.creationDate} 
          username={bug.username} 
          project={bug.project} 
          description={bug.description} 
        />)}
      </Box>);
  };

  return (
    <GridPageWrapper>
      <Paper square={false} sx={{minHeight: '30rem', marginLeft: '10%'}}>
        {getHeader()}
        {getBody()}
      </Paper>
    </GridPageWrapper>
  );
}

export default ViewBug;